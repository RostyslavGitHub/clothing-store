export const contentData = [
  {
    title: "T-shirt s",
    category: "T-shirts & Tops",
    img: "item-img.avif",
    price: "111,00",
    colors: ["white", "aqua", "lightgreen"],
    sizes: ["S"],
    id: new Date().getTime() + Math.random(1, 1000000000),
  },
  {
    title: "T-shirt l",
    category: "T-shirts & Tops",
    img: "item-img.avif",
    price: "111,00",
    colors: ["white", "black"],
    sizes: ["L"],
    id: new Date().getTime() + Math.random(1, 1000000000),

    bestseller: true,
  },
  {
    title: "Hoodies m l",
    category: "Hoodies",
    img: "item-img.avif",
    price: "111,00",
    colors: ["white"],
    sizes: ["M", "L"],
    id: new Date().getTime() + Math.random(1, 1000000000),

    sale: "69,00",
    bestseller: true,
  },
  {
    title: "Hoodies 2 all",
    category: "Hoodies",
    img: "item-img.avif",
    price: "111,00",
    colors: ["white", "red"],
    sizes: ["XS", "S", "M", "L"],
    id: new Date().getTime() + Math.random(1, 1000000000),

    sale: "69,00",
    bestseller: true,
  },
];