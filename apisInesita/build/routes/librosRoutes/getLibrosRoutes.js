"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getLibrosControllers_1 = require("../../controllers/librosControllers/getLibrosControllers");
const router = express_1.default.Router();
router.get("/", getLibrosControllers_1.getLibrosControllers);
exports.default = router;
