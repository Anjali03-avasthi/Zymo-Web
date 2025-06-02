import { collection, getDocs } from "firebase/firestore";
import { appDB } from "../firebase";
import { toPascalCase } from "../helperFunctions";
import { getVendorDetails } from "../helperFunctions";
export const fetchAllTestZtCollections = async function (
  _appDB,
  formatFare,
  currentCity = "Mumbai",
  tripDurationHours = 24
) {
  // Helper function to create car object with price calculations
  const makeCarObject = (car, vendorDetails) => {
    const vendorRate = parseFloat(vendorDetails?.CurrentrateSd);
    const discountRate = parseFloat(vendorDetails?.DiscountSd);
    const taxRate = parseFloat(vendorDetails?.TaxSd);

    // Calculate prices based on vendor rates - matching Dart implementation exactly
    const perHourRate = car?.perHourRate;

    const inflatedFare = perHourRate * tripDurationHours * vendorRate;

    const finalPrice =
      perHourRate * tripDurationHours * vendorRate * discountRate;

    return {
      id: car.id,
      brand: car.carBrand,
      name: car.name,
      type: car.carType,
      partnerBrandName: vendorDetails?.vendor,
      options: [car.transmission, car.fuelType, `${car.seats} Seats`],
      address: car.pickupLocation,
      images: Array.isArray(car.imageUrls) ? car.imageUrls : [car.imageUrls],
      fare: formatFare(Math.round(finalPrice)),
      inflated_fare: formatFare(Math.round(inflatedFare)),
      actualPrice: inflatedFare,
      hourly_amount: perHourRate,
      extrakm_charge: car.extraKmRate,
      extrahour_charge: car.extraHourRate,
      securityDeposit: car.securityDeposit,
      pickupLocation: car.pickupLocation,
      deliveryCharge: car.deliveryCharge,
      yearOfRegistration:
        car.yearOfRegistration || new Date().getFullYear() - 2,
      ratingData: {
        text: vendorDetails?.rating?.text || "Good",
        rating: parseFloat(vendorDetails?.rating?.value) || 4.2,
      },
      trips: vendorDetails?.trips || "20+",
      source: vendorDetails?.id || "Zeptep",
      sourceImg: vendorDetails?.Imageurl || "/images/ServiceProvider/zymo.png",
      location_est: currentCity,
      isSoldOut: car.isSoldOut,
      taxRate,
      currentRate: vendorRate,
      discountRate,
      plateColor: vendorDetails?.plateColor || "White",
      minHrsTillBooking: vendorDetails?.minHrsTillBooking?.sd || 3,
    };
  };

  try {
    // Get vendor details first to check PU status
    const vendorDetails = await getVendorDetails("Zt");
    if (!vendorDetails) {
      console.log("Vendor details not found for testZeptep");
      return [];
    }
    // Check if API is enabled
    if (!vendorDetails?.Api?.PU) {
      return [];
    }

    // Check if the min hours till booking is less than the trip duration
    if (vendorDetails?.minHrsTillBooking?.sd < tripDurationHours) {
      return [];
    }

    let allTestCars = [];

    // Only search for the current city
    const cityVariations = [toPascalCase(currentCity)];

    try {
      // Process each city separately
      for (const city of cityVariations) {
        try {
          const carCollection = "Cars"; // Only "Cars" subcollection exists
          const cityRef = collection(appDB, "testZt", city, carCollection);
          const cityDoc = await getDocs(cityRef);

          if (cityDoc.empty) {
            continue;
          }

          // Process the cars directly
          const cars = cityDoc.docs.map((doc) => {
            const carData = doc.data();
            const carName = carData["Car Name"] || carData.carName || "Unknown";

            // Skip sold-out cars
            if (carData?.isSoldOut) {
              return null;
            }

            // Parse price from "Price (Package1)" field
            const basePrice = parseInt(
              carData["Price (Package1)"]?.split(" ")[0] || carData.price || "0"
            );

            const perHourRate = basePrice / 24;

            const freeKms = Math.round(
              (parseInt(carData["KM Limit"] || 300) / 24) * tripDurationHours
            );

            const baseHourlyPrice = perHourRate * tripDurationHours;

            return {
              id: doc.id,
              citySource: city,
              collectionType: carCollection,
              name: carName,
              carBrand: carName,
              actualPrice: basePrice,
              perHourRate: perHourRate,
              baseHourlyPrice: baseHourlyPrice,
              pickupLocation: carData["Pick-Up location"],
              deliveryCharge: parseInt(carData["Home Delivery Charges"]),
              transmission:
                carData["Transmission"] || carData.transmission || "Manual",
              fuelType: carData["Fuel Type"] || carData.fuelType || "Petrol",
              securityDeposit: parseInt(carData["Security Deposit"]),
              extraKmRate: parseInt(carData["Extra Km Rate"]),
              extraHourRate: parseInt(carData["Extra Hr Rate"]),
              kmLimit: freeKms,
              imageUrls: carData["imageUrl"],
              isSoldOut: Boolean(carData["isSoldOut"]) || false,
              seats:
                parseInt(carData["No of Seats"]) ||
                parseInt(carData.seats) ||
                5,
            };
          });
          // Filter out null values and add valid cars
          const validCars = cars.filter((car) => car !== null);
          allTestCars = [...allTestCars, ...validCars];
        } catch (error) {
          console.error(
            `Error processing city ${city} in collection "testZt"`,
            error
          );
        }
      }
    } catch (error) {
      console.error(`Error processing collection "testZt":`, error);
    }
    if (allTestCars.length === 0) {
      return [];
    }

    const formattedTestCars = allTestCars.map((car) => {
      const kmLimit = Math.round(parseInt(car.kmLimit));
      const freeKm = kmLimit;

      return {
        ...makeCarObject(car, vendorDetails),
        kmLimit,
        extraKm: kmLimit,
        freeKm,
        total_km: { FF: `${kmLimit} KMs` },
      };
    });

    // sort formattedTestCars by fare and brand name
    formattedTestCars.sort((a, b) => {
      const fareA = parseInt(a.fare.replace(/[^0-9]/g, ""));
      const fareB = parseInt(b.fare.replace(/[^0-9]/g, ""));
      const result = fareA - fareB;
      if (result === 0) {
        const brandA = a.brand.toLowerCase();
        const brandB = b.brand.toLowerCase();
        if (brandA < brandB) return -1;
        if (brandA > brandB) return 1;
      }
      return result;
    });

    // Group cars by name to combine similar cars
    const groupTheCarsByName = (cars) => {
      const groupedCars = {};

      cars.forEach((car) => {
        const key = car.name.toLowerCase();
        if (!groupedCars[key]) {
          groupedCars[key] = {
            ...car,
            all_fares: [],
            total_km: [],
            variations: [],
          };
        }
        groupedCars[key].all_fares.push(car.fare?.slice(1));
        groupedCars[key].total_km.push(car.total_km);
        groupedCars[key].variations.push(car);
      });

      return Object.values(groupedCars);
    };

    return groupTheCarsByName(formattedTestCars);
  } catch (error) {
    console.error("Error fetching test collections:", error);
    return [];
  }
};

export default fetchAllTestZtCollections;
