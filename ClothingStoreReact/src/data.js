export const contentData = [
  {
    title: "T-shirt 1",
    category: "T-shirts & Tops",
    img: "item-img.avif",
    price: "111,00",
    colors: ["white", "aqua", "lightgreen"],
    sizes: ["XS", "S", "M", "L"],
    id: new Date().getTime() + Math.random(1, 1000000000),
  },
  {
    title: "T-shirt 2",
    category: "T-shirts & Tops",
    img: "item-img.avif",
    price: "111,00",
    colors: ["white", "black"],
    sizes: ["XS", "S", "M", "L"],
    id: new Date().getTime() + Math.random(1, 1000000000),

    bestseller: true,
  },
  {
    title: "Hoodies",
    category: "Hoodies",
    img: "item-img.avif",
    price: "111,00",
    colors: ["white"],
    sizes: ["XS", "S", "M", "L"],
    id: new Date().getTime() + Math.random(1, 1000000000),

    sale: "69,00",
    bestseller: true,
  },
  {
    title: "Hoodies 2",
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
