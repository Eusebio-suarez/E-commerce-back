"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifytoken_1 = require("../../middlewares/verifytoken");
const getProductsController_1 = require("../../controllers/carControllers/getProductsController");
const router = express_1.default.Router();
router.get("/productos", verifytoken_1.verifyToken, getProductsController_1.getProductsController);
exports.default = router;
