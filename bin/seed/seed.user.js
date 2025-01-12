require("dotenv").config();
require("../../config/mongodb");
const UserModel = require("../../models/User");

const user = [
  {
    name: "PIERRE",
    lastname: "DUPONT",
    email: "foo@aaaa.fr",
    password: "ZAE123",
  },

  {
    name: "JEANNE",
    lastname: "DUC",
    email: "fARR@aaaa.fr",
    password: "123123aze",
  }
];

(async function insertUser() {
  try {
    await UserModel.deleteMany();
    const inserted = await UserModel.insertMany(user);
    console.log(`seed User done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
})();
