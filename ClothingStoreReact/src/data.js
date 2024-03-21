export const contentData = [
  {
    title: "Cotton Comfort T-shirt",
    category: "T-shirts & Tops",
    images: [
        ["Cotton Comfort T-shirt white.webp", "Cotton Comfort T-shirt white.webp", "Cotton Comfort T-shirt white.webp"],
        ["Cotton Comfort T-shirt dimgray.webp", "Cotton Comfort T-shirt dimgray.webp", "Cotton Comfort T-shirt dimgray.webp"],
    ],
    price: "35.99",
    description: ['100% combed ringspun cotton', 'Double-needle stitching', 'Made in USA'],
    colors: ["white", "dimgray"],
    sizes: ["M", "L", "XL", "XXL", "3XL"],
  
    sale: "25.99",
    bestseller: true,
    colorIdMap: {
        white: { id: generateUniqueID(), count: 0 },
        dimgray: { id: generateUniqueID(), count: 0 }
    },
    choosenColor: 'white',
},

  {
    title: "Classic Crew Neck T-shirt",
    category: "T-shirts & Tops",
    images: [
      ["Classic_Crew_Neck_T-shirt_Black_50.webp", "Classic_Crew_Neck_T-shirt_Black_50.webp", "Classic_Crew_Neck_T-shirt_Black_50.webp"],
      ["Classic_Crew_Neck_T-shirt_burlyWood_50.webp", "Classic_Crew_Neck_T-shirt_burlyWood_50.webp", "Classic_Crew_Neck_T-shirt_burlyWood_50.webp"],
    ],
    price: "29.99",
    description: ['Soft and lightweight fabric', 'Versatile for any occasion'],
    colors: ["black", "burlywood"],
    sizes: ["M", "L", "XL"],
    id: generateUniqueID(), 

    sale: "22.49",
    bestseller: true,
    colorIdMap: {
      black: { id: generateUniqueID(), count: 0 },
      burlywood: { id: generateUniqueID(), count: 0 }
  },
  choosenColor: 'black',
  },
  {
    title: "Casual V-Neck T-shirt",
    category: "T-shirts & Tops",
    images: [
      ["Casual_V-Neck_T-shirt_white_50.webp", "Casual_V-Neck_T-shirt_white_50.webp", "Casual_V-Neck_T-shirt_white_50.webp"],
      ["Casual_V-Neck_T-shirt_grey_50.webp", "Casual_V-Neck_T-shirt_grey_50.webp", "Casual_V-Neck_T-shirt_grey_50.webp"],
      ["Casual_V-Neck_T-shirt_green_50.webp", "Casual_V-Neck_T-shirt_green_50.webp", "Casual_V-Neck_T-shirt_green_50.webp"],
    ],
    price: "25.99",
    description: ['Cool and breathable fabric', 'Perfect for everyday wear'],
    colors: ["white", "dimgray", "green"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    id: generateUniqueID(), 
    colorIdMap: {
        white: { id: generateUniqueID(), count: 0 },
        dimgray: { id: generateUniqueID(), count: 0 },
        green: { id: generateUniqueID(), count: 0 },
    },
    choosenColor: 'white',
  },
  {
    title: "Basic Pullover Hoodie",
    category: "Hoodies",
    images: [
      ["Basic_Pullover_Hoodie_rust_50.webp", "Basic_Pullover_Hoodie_rust_50.webp", "Basic_Pullover_Hoodie_rust_50.webp"],
      ["Basic_Pullover_Hoodie_maroon_50.webp", "Basic_Pullover_Hoodie_maroon_50.webp", "Basic_Pullover_Hoodie_maroon_50.webp"],
    ],
    price: "49.99",
    description: ['Warm and comfortable fleece', 'Front kangaroo pocket'],
    colors: ["sienna", "orangered"],
    sizes: ["S", "M", "L", "XXL"],
    id: generateUniqueID(), 
    colorIdMap: {
      sienna: { id: generateUniqueID(), count: 0 },
      orangered: { id: generateUniqueID(), count: 0 }
    },
    choosenColor: 'sienna',

    sale: "39.99",
    bestseller: true,
  },
  {
    title: "Sporty Zip-Up Hoodie",
    category: "Hoodies",
    images: [
      ["Sporty_Zip-Up_Hoodie_black_50.webp", "Sporty_Zip-Up_Hoodie_black_50.webp", "Sporty_Zip-Up_Hoodie_black_50.webp"],
    ],
    price: "59.99",
    description: ['Stylish and functional design', 'Full-zip front with drawstrings'],
    colors: ["black"],
    sizes: ["S", "M", "L"],
    id: generateUniqueID(), 
    colorIdMap: {
      black: { id: generateUniqueID(), count: 0 },
    },
    choosenColor: 'black',
  },
  {
    title: "Classic Denim Shirt",
    category: "Shirts",
    images: [
      ["Classic_Denim_Shirt_green_50.webp", "Classic_Denim_Shirt_green_50.webp", "Classic_Denim_Shirt_green_50.webp"],
      ["Classic_Denim_Shirt_orange_50.webp", "Classic_Denim_Shirt_orange_50.webp", "Classic_Denim_Shirt_orange_50.webp"],
    ],
    price: "59.99",
    description: ['Authentic denim look', 'Button-up front'],
    colors: ["green", "orange"],
    sizes: ["S", "M", "L", "XL"],
    id: generateUniqueID(), 
    colorIdMap: {
      green: { id: generateUniqueID(), count: 0 },
      orange: { id: generateUniqueID(), count: 0 }
    },
    choosenColor: 'green',
  },
  {
    title: "Flannel Plaid Shirt",
    category: "Shirts",
    images: [
      ["Flannel_Plaid_Shirt_blue_50.webp", "Flannel_Plaid_Shirt_blue_50.webp", "Flannel_Plaid_Shirt_blue_50.webp"],
      ["Flannel_Plaid_Shirt_green_50.webp", "Flannel_Plaid_Shirt_green_50.webp", "Flannel_Plaid_Shirt_green_50.webp"],
    ],
    price: "39.99",
    description: ['Cozy flannel fabric', 'Classic plaid pattern'],
    colors: ["mediumblue", "green"],
    sizes: ["S", "M", "L", "XL"],
    id: generateUniqueID(), 
    colorIdMap: {
      mediumblue: { id: generateUniqueID(), count: 0 },
      green: { id: generateUniqueID(), count: 0 }
    },
    choosenColor: 'mediumblue',

    sale: "29.99",
  },
];

function generateUniqueID() {
  return new Date().getTime() + Math.floor(Math.random() * 1000000);
}
