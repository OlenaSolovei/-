let osmosis = require("osmosis");
let fs = require("fs");
// const MongoClient = require("mongodb").MongoClient;

// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url, { useNewUrlParser: true });

osmosis
  .get("https://ukraine.deka.ua/recommended/")
  .find(".grid-trands")
  .set({
      "name": [".grid-item .catalog-card .product-card .product-body .bx_catalog_item_title"],
      "price": [".grid-item .catalog-card .product-card .product-body .product-price"]
    })
  .data(function(listing) {
    fs.writeFile("index.html", JSON.stringify(listing), function(err) {
      if (err) throw err;
      console.log("Saved!");
    });
  });