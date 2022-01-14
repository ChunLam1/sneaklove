require("dotenv").config();
require("../../config/mongodb");
const SneakerModel = require("../../models/Sneaker");

const sneakers = [
  {
    name: "SmochyWhite",
    ref: "azert123",
    size: 42,
    description: "faaa",
    price: 129,
    category: "men",
    // id_tags:null
    image:
      "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_533,b_rgb:f5f5f5/cms/3Ufg4RUeHvyH8b8ndy6LaU/28afa616cd111ce21b2c00a6c7ab0b9d/TD1MGYS_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_GEYSER.png",
  },
  {
    name: "lazyBear",
    ref: "tyutuy1234",
    size: 39,
    description: "fooooooooooo",
    price: 109,
    category: "men",
    // id_tags:null
    image: "https://m.media-amazon.com/images/I/81KL8CvRg5L._AC_UY395_.jpg",
  },
  {
    name: "StrawSneak",
    ref: "tutututut123123",
    size: 39,
    description: "Bzzzzzzz",
    price: 99,
    category: "women",
    image:
      "https://cdn.luxe.digital/media/2021/05/24141724/best-sneakers-women-alexander-mcqueen-review-luxe-digital%402x.jpg",
    // id_tags:null
  },
  {
    name: "Smachtoooo",
    ref: "tytytytytyy321321",
    size: 39,
    description: "flooooooooooo",
    price: 199,
    category: "women",
    // id_tags:null
    image:
      "https://media-cdn.placedestendances.com/en/mellow-yellow-flat-two-tone-leather-sandals-golden/image/62/6/3261626.png?fit=bounds&bg-color=f7f7f7&width=380&height=520&canvas=380,520",
  },
  {
    name: "Sharkyy",
    ref: "Graaaww232323",
    size: 39,
    description: "fuuuuuuuuuuuu",
    price: 179,
    category: "kids",
    // id_tags:null
    image: "https://m.media-amazon.com/images/I/81Mu9ef+qcL._AC_UY395_.jpg",
  },
  {
    name: "Tigershoes",
    ref: "Abobobobobo1212121",
    size: 39,
    description: "fiiiiiiii",
    price: 149,
    category: "kids",
    // id_tags:null
    image:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiQn_qIgrH1AhUSjWgJHWdPBzUYABALGgJ3Zg&sig=AOD64_2MgdaOPan877vd2Ua5vFhSDX59pQ&adurl&ctype=5&ved=2ahUKEwjf6-qIgrH1AhUQRvEDHbN9DY8Qvhd6BAgBEF0",
  },
];

(async function insertSneacker() {
  try {
    await SneakerModel.deleteMany();
    const inserted = await SneakerModel.insertMany(sneakers);
    console.log(`seed Sneacker done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
})();
