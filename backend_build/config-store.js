"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var nconf_1 = __importDefault(require("nconf"));
dotenv_1.config();
nconf_1.default.env();
nconf_1.default.required([
    "WUFOO_BASE_URL",
    "WUFOO_API_KEY",
    "WUFOO_PASSWORD",
    "WUFOO_FORM_ID",
    "BACKEND_PORT",
    "PORT",
    "REACT_APP_FRONTEND_URL",
]);
exports.default = {
    WUFOO_BASE_URL: nconf_1.default.get("WUFOO_BASE_URL"),
    WUFOO_API_KEY: nconf_1.default.get("WUFOO_API_KEY"),
    WUFOO_PASSWORD: nconf_1.default.get("WUFOO_PASSWORD"),
    WUFOO_FORM_ID: nconf_1.default.get("WUFOO_FORM_ID"),
    BACKEND_PORT: nconf_1.default.get("BACKEND_PORT"),
    PORT: nconf_1.default.get("PORT"),
    FRONTEND_URL: nconf_1.default.get("REACT_APP_FRONTEND_URL"),
};
