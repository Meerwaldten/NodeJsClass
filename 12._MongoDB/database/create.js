import db from "./connection.js";

const newShop = /*await*/ db.shops.insertOne({city: "Nordvest", shops: ["third shop"]});
db.shops.insertOne({ city: "Copenhagen", shops: ["first shop", "second shop"]})
