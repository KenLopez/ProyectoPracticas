"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        //*********************************************************get publicacion************************************************************ */
        this.router.get('/publicaciones', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    var cadena = "select * from publicacion";
                    var con = new mssql.ConnectionPool(config);
                    con.connect(function (err) {
                        var req = new mssql.Request(con);
                        if (err) {
                            console.log(err);
                            return;
                        }
                        req.query(cadena, function (err, recordset) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                res.send(JSON.stringify(recordset.recordset));
                            }
                            con.close();
                        });
                    });
                }
                catch (Exception) {
                    console.log(Exception);
                }
            });
        });
        //*********************************************************post publicacion************************************************************ */
        this.router.post('/nueva', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let resp = req.body;
                    console.log(resp.mensaje);
                    var cadena = "insert into publicacion values('" + resp.mensaje + "');";
                    var con = new mssql.ConnectionPool(config);
                    con.connect(function (err) {
                        var req = new mssql.Request(con);
                        if (err) {
                            console.log(err);
                            return;
                        }
                        req.query(cadena, function (err, recordset) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                res.send(JSON.stringify(recordset));
                            }
                            con.close();
                        });
                    });
                }
                catch (Exception) {
                    console.log(Exception);
                }
            });
        });
        //*********************************************************delete publicacion************************************************************ */
        this.router.post('/quitar', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let resp = req.body;
                    console.log(resp.mensaje);
                    var cadena = "delete from publicacion where IdPublicacion=" + resp.id + ";";
                    var con = new mssql.ConnectionPool(config);
                    con.connect(function (err) {
                        var req = new mssql.Request(con);
                        if (err) {
                            console.log(err);
                            return;
                        }
                        req.query(cadena, function (err, recordset) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                res.send(JSON.stringify(recordset));
                            }
                            con.close();
                        });
                    });
                }
                catch (Exception) {
                    console.log(Exception);
                }
            });
        });
    }
}
const publicacionesRoutes = new PublicacionesRoutes();
exports.default = publicacionesRoutes.router;
