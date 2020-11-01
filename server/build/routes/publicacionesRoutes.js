"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
var mssql = require('mssql');
var config = {
    server: 'localhost',
    host: 'localhost',
    user: 'mario',
    password: 'MarioSolis',
    port: 1433,
    "options": {
        "encrypt": true,
        "enableArithAbort": true
    },
};
class PublicacionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => { res.send('esta es una publicacion'); });
    }
}
const publicacionesRoutes = new PublicacionesRoutes();
exports.default = publicacionesRoutes.router;
