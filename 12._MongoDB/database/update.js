import db from "./connection.js";

db.shops.updateOne({ city: "Copenhagen"}, {$push: {shops: "Candy Shop" } } )
db.shops.updateOne({ city: "Copenhagen"}, {$push: {shops: "Slik biksen" } } )