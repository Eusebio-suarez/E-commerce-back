"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const eliminateProductController_1 = require("../../controllers/carControllers/eliminateProductController");
const verifytoken_1 = require("../../middlewares/verifytoken");
const router = express_1.default.Router();
router.post("/eliminar", verifytoken_1.verifyToken, eliminateProductController_1.eliminateProductController);
exports.default = router;
