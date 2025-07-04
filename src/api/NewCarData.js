const carData = [
  {
    id: 1,
    carId: 1,
    name: "TATA",
    model: "Nexon EV",
    type: "Electric",
    year: 2023,
    rating: 4.5,
    passengers: 4,
    transmission: "Automatic",
    price: {
      min_price: "12.49",
      max_price: "17.19",
    },
    range: 453,
    battery: 46.08,
    power: 148,
    charging: {
      min_time: 6.5,
      max_time: 9.17,
    },
    bodyStyle: "SUV",
    warranty_years: 3,
    warranty_km: 125000,
    length: 3993,
    width: 1811,
    height: {
      min_height: 1606,
      max_height: 1616,
    },
    weight: 1400,
    cargoVolume: 350,
    about:
      "The TATA Nexon EV is a sub-4 metre electric SUV that has been extremely popular in the Indian market. It first went on sale in 2020 and later down line, got a heavily revised facelift in 2023. The Nexon EV brings power, silence and lower running costs to what is an already capable car in its ICE avatar.",
    image: 
    "/images/BuyCars/newtnexcar1.png",
    //  "https://firebasestorage.googleapis.com/v0/b/zymo-prod.appspot.com/o/carImage%2FNexon%20EV.jpeg?alt=media&token=f21e99fb-44f0-48b4-9781-212c197fd1b5",
    monthlyTestDriveFee: 52500,
    securityDeposit: 40000,
    totalAmount: 92500,
    freeKilometers: 1500,
    vendor: "MyChoize",
    status:"available",
  },
  {
    id: 2,
    carId: 2,
    name: "Volvo",
    model: "XC40 Recharge",
    type: "Electric",
    year: 2023,
    rating: 4.9,
    passengers: 5,
    transmission: "Automatic",
    price: {
      min_price: "54.00",
      max_price: "56.00",
    },
    range: 418,
    battery: 78,
    power: 408,
    charging: {
      min_time: 6.5,
      max_time: 8.0,
    },
    bodyStyle: "SUV",
    warranty_years: 3,
    warranty_km: 100000,
    length: 4425,
    width: 1863,
    height: {
      min_height: 1650,
      max_height: 1652,
    },
    weight: 2150,
    cargoVolume: 452,
    about:
      "The Volvo XC40 Recharge is a luxury electric SUV offering powerful dual-motor performance, refined comfort, and a premium safety package. Perfect for those looking for sophistication and sustainability.",
      image:"/images/BuyCars/xc40img1.png",
    monthlyTestDriveFee: 10000,
    securityDeposit: 50000,
    totalAmount: 60000,
    freeKilometers: 2000,
    vendor: "Volvo India",
    status:"disable",
  },
  {
    id: 3,
    carId: 3,
    name: "TATA",
    model: "Curvv EV",
    type: "Electric",
    year: 2024,
    rating: 4.6,
    passengers: 5,
    transmission: "Automatic",
    price: {
      min_price: "18.00",
      max_price: "22.00",
    },
    range: 500,
    battery: 50,
    power: 170,
    charging: {
      min_time: 6.5,
      max_time: 7.5,
    },
    bodyStyle: "Coupe SUV",
    warranty_years: 8,
    warranty_km: 160000,
    length: 4300,
    width: 1850,
    height: {
      min_height: 1600,
      max_height: 1610,
    },
    weight: 1600,
    cargoVolume: 400,
    about:
      "The Tata Curvv EV is a futuristic coupe-style electric SUV, combining modern design with a long range. It represents Tata's vision of bold and smart EVs for the next generation.",
    image:"/images/BuyCars/tatacurvvimg1.png",
    monthlyTestDriveFee: 6000,
    securityDeposit: 20000,
    totalAmount: 26000,
    freeKilometers: 1500,
    vendor: "TATA",
    status:"disable",
  },
  {
    id: 4,
    carId: 4,
    name: "Hyundai",
    model: "Kona Electric",
    type: "Electric",
    year: 2023,
    rating: 4.7,
    passengers: 5,
    transmission: "Automatic",
    price: {
      min_price: "23.00",
      max_price: "25.00",
    },
    range: 452,
    battery: 39.2,
    power: 136,
    charging: {
      min_time: 6.1,
      max_time: 7.5,
    },
    bodyStyle: "SUV",
    warranty_years: 8,
    warranty_km: 160000,
    length: 4180,
    width: 1800,
    height: {
      min_height: 1570,
      max_height: 1580,
    },
    weight: 1535,
    cargoVolume: 332,
    about:
      "The Hyundai Kona Electric is a stylish and efficient SUV with a solid range and advanced features. A great blend of urban performance and eco-conscious driving.",
    image:"/images/BuyCars/konaimg1.png",
    monthlyTestDriveFee: 7000,
    securityDeposit: 25000,
    totalAmount: 32000,
    freeKilometers: 1600,
    vendor: "Hyundai",
    status:"disable",
  },
  {
    id: 5,
    carId: 5,
    name: "Tata",
    model: "Tiago EV",
    type: "Electric",
    year: 2025,
    rating: 4.7,
    passengers: 5,
    transmission: "Automatic",
    price: {
      min_price: "6.99",
      max_price: "9.84",
    },
    range: 230,
    battery: 24,
    power: 55,
    charging: {
      min_time: 6.1,
      max_time: 7.5,
    },
    bodyStyle: "Sedan",
    warranty_years: 8,
    warranty_km: 160000,
    length: 3769,
    width: 1677,
    height: {
      min_height: 1536,
      max_height: 1537,
    },
    weight: 1535,
    cargoVolume: 240,
    about:
      "The Tata Tiago EV is a chill car. Powered by electricity, fueled by pure chill.",
    image:"/images/BuyCars/Tata Tiago EV/8.png",
    monthlyTestDriveFee: 7000,
    securityDeposit: 25000,
    totalAmount: 32000,
    freeKilometers: 1600,
    vendor: "Tata",
    status:"disable",
  },
  {
    id: 6,
    carId: 6,
    name: "Tata",
    model: "Punch EV",
    type: "Electric",
    year: 2025,
    rating: 4.7,
    passengers: 5,
    transmission: "Automatic",
    price: {
      min_price: "9.99",
      max_price: "14.84",
    },
    range: 365,
    battery: 35,
    power: 90,
    charging: {
      min_time: 6.1,
      max_time: 7.5,
    },
    bodyStyle: "SUV",
    warranty_years: 8,
    warranty_km: 160000,
    length: 3857,
    width: 1742,
    height: {
      min_height: 1630,
      max_height: 1640,
    },
    weight: 1535,
    cargoVolume: 366,
    about:
      "Dive into the world of Punch.ev and discover a design philosophy that goes beyond the ordinary. Our focus on aesthetics transforms every journey into a visually enchanting experience, making each drive truly extraordinary",
    image:"/images/BuyCars/Tata Punch EV/1.png",
    monthlyTestDriveFee: 7000,
    securityDeposit: 25000,
    totalAmount: 32000,
    freeKilometers: 1600,
    vendor: "Tata",
    status:"disable",
  },
    {
      id: 7,
      carId: 7,
      name: "Mahindra",
      model: "Scorpio",
      type: "Diesel",
      year: 2023,
      rating: 4.7,
      passengers: '7 / 9',
      transmission: "Manual",
      price: {
        min_price: "13.77",
        max_price: "17.72",
      },
      engine: 2184,
      mileage: 14.44,
      power: 130,
      torque: 300,
      speed: 165,
      bodyStyle: "SUV",
      warranty_years: 2,
      warranty_km: 75000,
      length: 4456,
      width: 1820,
      height: 1994,
      weight: 1950,
      cargoVolume: 460,
      about:
        "The Mahindra Scorpio is a robust SUV known for its powerful performance and rugged design, making it a favorite among off-road enthusiasts.",
      image: "/images/BuyCars/scorpio.jpg",
      vendor: "Mahindra",
      status: "available",
    },
    {
      id: 8,
      carId: 8,
      name: "Mahindra",
      model: "Thar",
      type: "Diesel",
      year: 2023,
      rating: 4.5,
      passengers: 4,
      transmission: "Automatic",
      price: {
        min_price: "11.50",
        max_price: "17.62",
      },
      engine: 2184,
      mileage: 10,
      power: 130,
      torque: 300,
      speed: 155,
      bodyStyle: "SUV",
      warranty_years: 3,
      warranty_km: 'unlimited',
      length: 3985,
      width: 1820,
      height: 1845,
      weight: 1710,
      cargoVolume: 600,
      about:
        "The Mahindra Thar is an iconic off-roader, combining classic design with modern features, perfect for adventure seekers.",
      image: "/images/BuyCars/thar1.jpg",
      vendor: "Mahindra",
      status: "available",
    },
    {
      id: 9,
      carId: 9,
      name: "Toyota",
      model: "Urban Cruiser Hyryder",
      type: "Petrol",
      year: 2023,
      rating: 4.4,
      passengers: 5,
      transmission: "Automatic",
      price: {
        min_price: "11.34",
        max_price: "19.99",
      },
      engine: 1490,
      mileage: 27.97,
      power: 91.18,
      torque: 122,
      speed: 180,
      bodyStyle: "SUV",
      warranty_years: 3,
      warranty_km: 100000,
      length: 3995,
      width: 1790,
      height: 1640,
      weight: 1150,
      cargoVolume: 328,
      about:
        "The Toyota Urban Cruiser offers a blend of style and performance, making it a suitable choice for urban commuting.",
      image: "/images/BuyCars/urban_cruiser.png",

      vendor: "Toyota",
      status: "available",
    },
    {
      id: 10,
      carId: 10,
      name: "Hyundai",
      model: "Creta",
      type: "Diesel",
      year: 2023,
      rating: 4.6,
      passengers: 5,
      transmission: "Automatic",
      price: {
        min_price: "11.11",
        max_price: "20.50",
      },
      engine: 1493,
      mileage: 19.1,
      power: 114,
      torque: 250,
      speed: 195,
      bodyStyle: "SUV",
      warranty_years: 3,
      warranty_km: "unlimited",
      length: 4300,
      width: 1790,
      height: 1634,
      weight: 1360,
      cargoVolume: 433,
      about:
        "The Hyundai Creta is a popular compact SUV known for its modern design, comfort, and advanced features.",
      image: "/images/BuyCars/creta.jpg",
      vendor: "Hyundai",
      status: "available",
    },
    {
      id: 11,
      carId: 11,
      name: "Maruti Suzuki",
      model: "Brezza",
      type: "Petrol",
      year: 2023,
      rating: 4.5,
      passengers: 5,
      transmission: "Automatic",
      price: {
        min_price: "8.69",
        max_price: "14.14",
      },
      engine: 1462,
      mileage: 19.8,
      power: 102,
      torque: 136.8,
      speed: 159,
      bodyStyle: "SUV",
      warranty_years: 3,
      warranty_km: 100000,
      length: 3995,
      width: 1790,
      height: 1684,
      weight: 1600,
      cargoVolume: 328,
      about:
        "The Maruti Suzuki Brezza is a compact SUV offering a balance of performance and efficiency, ideal for city drives.",
      image: "/images/BuyCars/brezza.png",
      vendor: "Maruti Suzuki",
      status: "available",
    },
    {
      id: 12,
      carId: 12,
      name: "Maruti Suzuki",
      model: "Ertiga",
      type: "Petrol",
      year: 2023,
      rating: 4.3,
      passengers: 7,
      transmission: "Automatic",
      price: {
        min_price: "8.84",
        max_price: "13.13",
      },
      engine: 1462,
      mileage: 20.3,
      power: 101.64,
      torque: 139,
      speed: 175,
      bodyStyle: "MUV",
      warranty_years: 3,
      warranty_km: 100000,
      length: 4395,
      width: 1735,
      height: 1690,
      weight: 1150,
      cargoVolume: 209,
      about:
        "The Maruti Suzuki Ertiga is a versatile MPV, offering spacious interiors and efficient performance for families.",
      image: "/images/BuyCars/ertiga.jpg",
      vendor: "Maruti Suzuki",
      status: "available",
    },
    {
      id: 13,
      carId: 13,
      name: "Maruti Suzuki",
      model: "Baleno",
      type: "Petrol",
      year: 2023,
      rating: 4.4,
      passengers: 5,
      transmission: "Automatic",
      price: {
        min_price: "6.50",
        max_price: "9.92",
      },
      engine: 1197,
      mileage: 22.94,
      power: 88.50,
      torque: 113,
      speed: 180,
      bodyStyle: "Hatchback",
      warranty_years: 3,
      warranty_km: 100000,
      length: 3990,
      width: 1745,
      height: 1500,
      weight: 1000,
      cargoVolume: 318,
      about:
        "The Maruti Suzuki Baleno is a premium hatchback known for its stylish design, spacious cabin, and fuel efficiency.",
      image: "/images/BuyCars/baleno.png",
      vendor: "Maruti Suzuki",
      status: "available",
    },
    {
      id: 14,
      carId: 14,
      name: "MG",
      model: "Comet EV",
      type: "Electric",
      year: 2025,
      rating: 4.3,
      passengers: 4,
      transmission: "Automatic",
      price: {
        min_price: "7.36",
        max_price: "9.86",
      },
      range: 230,
      battery: 17.3,
      power: 41.42,
      charging: {
        min_time: 3,
        max_time: 7,
      },
      bodyStyle: "Hatchback",
      warranty_years: 3,
      warranty_km: 100000,
      length: 2974,
      width: 1505,
      height: {
        min_height: 1640,
        max_height: 1642,
      },
      weight: 815,
      cargoVolume: 350,
      about: "The MG Comet EV is a smart, compact electric hatchback built for city driving. With a 230 km range, automatic transmission, and modern design, it's ideal for everyday urban mobility.",
      image:"/images/BuyCars/comet.webp",
      vendor: "MG",
      status:"available",
    }
];

export default carData;