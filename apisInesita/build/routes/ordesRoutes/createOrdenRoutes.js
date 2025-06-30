"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifytoken_1 = require("../../middlewares/verifytoken");
const createOrderController_1 = require("../../controllers/ordesControllers/createOrderController");
const router = express_1.default.Router();
router.post("/crear", verifytoken_1.verifyToken, createOrderController_1.createOrderContoller);
exports.default = router;
