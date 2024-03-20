import { contentData } from "./data";

export const reviewsData = [
    {
        name: "Max",
        img: 'item-img.avif',
        stars: 4,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet dolor sit amet consectetur adipisicing elit.',
        item: contentData[0].id,
        date: '19.03.2024',
        id: new Date().getTime() + Math.random(1, 1000000000),
    },
    {
        name: "Victoria",
        img: '',
        stars: 5,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi voluptatem dolores autem, veritatis voluptatibus cum iure nobis voluptate officia doloremque neque optio voluptas quibusdam esse qui corrupti aut? Excepturi.',
        item: contentData[0].id,
        date: '05.01.2024',
        id: new Date().getTime() + Math.random(1, 1000000000),
    },
    {
        name: "Mike",
        img: 'item-img.avif',
        stars: 5,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi voluptatem dolores autem, veritatis voluptatibus cum iure nobis voluptate officia doloremque neque optio voluptas quibusdam esse qui corrupti aut? Excepturi.',
        item: contentData[0].id,
        date: '05.01.2024',
        id: new Date().getTime() + Math.random(1, 1000000000),
    },
    
  ];