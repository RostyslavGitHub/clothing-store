import { contentData } from "./data";

export const reviewsData = [
  // Відгуки для першої речі з contentData
  {
    name: "Max",
    img: 'item-img.avif',
    stars: 4,
    description: "I love this Cotton Comfort T-shirt! It's so comfortable and fits perfectly. The material is high quality and feels great on my skin. Definitely recommend it.",
    item: contentData[0].id,
    date: '19.03.2024',
    id: new Date().getTime() + Math.random(1, 1000000000),
  },
  {
    name: "Victoria",
    img: 'item-img.avif',
    stars: 5,
    description: "Absolutely fantastic Classic Crew Neck T-shirt! The fabric is soft, the fit is just right, and the colors are vibrant. I've received so many compliments.",
    item: contentData[0].id,
    date: '05.01.2024',
    id: new Date().getTime() + Math.random(1, 1000000000),
  },
  {
    name: "Mike",
    img: 'item-img.avif',
    stars: 5,
    description: "This Cotton Comfort T-shirt is amazing! The material is top-notch and the fit is perfect. I've already ordered it in multiple colors.",
    item: contentData[0].id,
    date: '05.01.2024',
    id: new Date().getTime() + Math.random(1, 1000000000),
  },

  // Відгуки для другої речі з contentData
  {
    name: "Emily",
    img: 'item-img.avif',
    stars: 2,
    description: "I had high hopes for this Classic Crew Neck T-shirt, but unfortunately, it didn't meet my expectations. The fabric feels cheap and the fit is off.",
    item: contentData[1].id,
    date: '10.02.2024',
    id: new Date().getTime() + Math.random(1, 1000000000),
  },
  {
    name: "Oliver",
    img: 'item-img.avif',
    stars: 3,
    description: "Decent Classic Crew Neck T-shirt for the price. The fabric is okay, but the fit is a bit loose for my liking. It's good for casual wear.",
    item: contentData[1].id,
    date: '27.12.2023',
    id: new Date().getTime() + Math.random(1, 1000000000),
  },
  {
    name: "Sophia",
    img: 'item-img.avif',
    stars: 4,
    description: "I'm very pleased with this Classic Crew Neck T-shirt. The fabric is soft and breathable, and the fit is just right. Will definitely buy more.",
    item: contentData[1].id,
    date: '15.01.2024',
    id: new Date().getTime() + Math.random(1, 1000000000),
  },

  // Відгуки для інших речей з contentData
  {
    name: "Jack",
    img: 'item-img.avif',
    stars: 5,
    description: "The Athletic Performance T-shirt is perfect for workouts. The fabric is moisture-wicking and the fit is great. I highly recommend it for active individuals.",
    item: contentData[3].id,
    date: '03.02.2024',
    id: new Date().getTime() + Math.random(1, 1000000000),
  },
  {
    name: "Sarah",
    img: 'item-img.avif',
    stars: 4,
    description: "I'm impressed with the quality of the Basic Pullover Hoodie. It's warm, comfortable, and the front kangaroo pocket is a nice touch.",
    item: contentData[4].id,
    date: '12.03.2024',
    id: new Date().getTime() + Math.random(1, 1000000000),
  },
  {
    name: "Alex",
    img: 'item-img.avif',
    stars: 4,
    description: "The Sporty Zip-Up Hoodie exceeded my expectations. The design is stylish, the zipper is smooth, and the fit is just right. Very satisfied with my purchase.",
    item: contentData[5].id,
    date: '28.02.2024',
    id: new Date().getTime() + Math.random(1, 1000000000),
  },
  {
    name: "Jessica",
    img: 'item-img.avif',
    stars: 3,
    description: "The Slim Fit Pullover Hoodie is okay. The fit is snug, which I like, but the material feels a bit thin. It's decent for the price.",
    item: contentData[6].id,
    date: '10.03.2024',
    id: new Date().getTime() + Math.random(1, 1000000000),
  },
  {
    name: "William",
    img: 'item-img.avif',
    stars: 5,
    description: "I'm in love with the Classic Denim Shirt! The denim is authentic, the buttons are secure, and the fit is spot on. Definitely a wardrobe staple.",
    item: contentData[7].id,
    date: '22.02.2024',
    id: new Date().getTime() + Math.random(1, 1000000000),
  },
  {
    name: "Natalie",
    img: 'item-img.avif',
    stars: 4,
    description: "The Flannel Plaid Shirt is cozy and stylish. The plaid pattern is classic and the fabric is warm. Perfect for casual outings.",
    item: contentData[8].id,
    date: '18.03.2024',
    id: new Date().getTime() + Math.random(1, 1000000000),
  },

  // Додайте відгуки для інших елементів contentData за аналогією
];
