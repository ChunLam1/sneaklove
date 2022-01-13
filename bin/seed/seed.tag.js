require("dotenv").config();
require("./../../config/mongo"); 
const TagModel = require("../../models/Tag")

const tag = [
    label:"NEW"
];

(async function insertTag() {
    try {
      await TagModel.deleteMany();
      const inserted = await TagModel.insertMany(tag);
      console.log(`seed Tag done : ${inserted.length} documents inserted !`);
    } catch (err) {
      console.error(err);
    }
  })();
  