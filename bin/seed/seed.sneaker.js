require("dotenv").config();
require("./../../config/mongo");*
 const SneakerModel = require("../../models/Sneaker")

const sneaker = [
    {
    name:"SmochyWhite",
    ref:"azert123",
    size:39,40,41,42,43,44,
    description:"faaa",
    price:129,
    category:["men"]
    // id_tags:null
    },
    {
        name:"lazyBear",
        ref:"tyutuy1234",
        size:39,40,41,42,43,44,
        description:"fooooooooooo",
        price:109,
        category:["men"]
        // id_tags:null
    },
    {
            name:"StrawSneak",
            ref:"tutututut123123",
            size:39,40,41,42,43,44,
            description:"Bzzzzzzz",
            price:99,
            category:["women"]
            // id_tags:null
     },
     {
                name:"Smachtoooo",
                ref:"tytytytytyy321321",
                size:39,40,41,42,43,44,
                description:"flooooooooooo",
                price:199,
                category:["women"]
                // id_tags:null
     },
     {
                    name:"Sharkyy",
                    ref:"Graaaww232323",
                    size:39,40,41,42,43,44,
                    description:"fuuuuuuuuuuuu",
                    price:179,
                    category:["kids"]
                    // id_tags:null
     },
     {
                        name:"Tigershoes",
                        ref:"Abobobobobo1212121",
                        size:39,40,41,42,43,44,
                        description:"fiiiiiiii",
                        price:149,
                        category:["kids"]
                        // id_tags:null
     }
];

(async function insertSneacker() {
    try {
      await SneackerModel.deleteMany();
      const inserted = await SneackerModel.insertMany(sneacker);
      console.log(`seed Sneacker done : ${inserted.length} documents inserted !`);
    } catch (err) {
      console.error(err);
    }
  })();
  