"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const updateLibrosControllers_1 = require("../../controllers/librosControllers/updateLibrosControllers");
const verifytoken_1 = require("../../middlewares/verifytoken");
const isAdmin_1 = require("../../middlewares/isAdmin");
const router = express_1.default.Router();
router.put('/', verifytoken_1.verifyToken, isAdmin_1.isAdmin, updateLibrosControllers_1.updateLibrosControllers);
exports.default = router;
// This code defines a route for updating book details in an Express application.
// It uses the PUT method to handle requests at the root path ('/') of the `lib         
