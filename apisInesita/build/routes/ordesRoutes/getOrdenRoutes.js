"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifytoken_1 = require("../../middlewares/verifytoken");
const isAdmin_1 = require("../../middlewares/isAdmin");
const router = express_1.default.Router();
router.post("/", verifytoken_1.verifyToken, isAdmin_1.isAdmin);
exports.default = router;
