require("dotenv").config();
require("../../config/mongodb");
const TagModel = require("../../models/Tag");

const tags = [
  {
    label: "NEW",
  },
  {
    label: "OLD",
  },
  {
    label: "TRASHY",
  },
  {
    label: "420 FRIENDLY",
  },
  {
    label: "LIDL",
  },
];

(async function insertTag() {
  try {
    await TagModel.deleteMany();
    const inserted = await TagModel.insertMany(tags);
    console.log(`seed Tag done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
})();
