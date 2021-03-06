const express = require("express");
var multer = require("multer");

var upload = multer({ dest: "./public/uploads/" });
var ProductController = require("../controller/product.controller");
var authMiddleware = require("../middlewares/auth.middleware");
var validate = require("../validate/product.validate");
const routes = express.Router();
//
routes.get("/", ProductController.listProduct);
routes.get("/search", ProductController.searchPro);
routes.get(
  "/create",
  authMiddleware.requiredAuth,
  ProductController.GETcreatePro
);
routes.post(
  "/create",
  upload.single("avatar"),
  validate.POSTcreatePro,
  ProductController.POSTcreatePro
);
routes.get("/:id", ProductController.getProduct); //dinamic param sử dụng toán tử ":"
module.exports = routes;
