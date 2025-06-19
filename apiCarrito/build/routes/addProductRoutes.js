"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addProductController_1 = require("../controllers/addProductController");
const router = express_1.default.Router();
router.get("/agregar", addProductController_1.addProduct);
exports.default = router;
