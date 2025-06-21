"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registerController_1 = require("../controllers/registerController");
const router = express_1.default.Router();
//resgitrar
router.post("/", registerController_1.registerUser);
exports.default = router;
