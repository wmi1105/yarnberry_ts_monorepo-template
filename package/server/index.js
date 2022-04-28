"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@mono/common");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use("/test", (req, res) => {
    (0, common_1.sayHello)();
    res.status(204).send();
});
app.listen(4000, () => {
    console.log("🚀 Server Listening on localhost:4000!");
});
