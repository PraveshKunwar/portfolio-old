"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const router = express_1.default.Router();
require('dotenv').config();
router.get('/github', async (req, res) => {
    await node_fetch_1.default('https://api.github.com/repos/PraveshKunwar/Ultimatum/commits/master')
        .then((resp) => resp.json())
        .then((data) => res.send(data));
});
module.exports = router;
