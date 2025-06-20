"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addProductController_1 = require("../controllers/addProductController");
const verifytoken_1 = require("../middlewares/verifytoken");
const router = express_1.default.Router();
router.post("/agregar", verifytoken_1.verifyToken, addProductController_1.addProductController);
exports.default = router;
