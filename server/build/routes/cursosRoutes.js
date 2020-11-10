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
    database: 'proyecto_practicas',
    host: 'localhost',
    user: 'ProyectoPracticas',
    password: '1234',
    port: 1433,
    "options": {
        "encrypt": true,
        "enableArithAbort": true
    },
};
class CursosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => { res.send('esta es una publicacion'); });
        //*********************************************************get carnet************************************************************ */
        this.router.get('/getCurso', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    var cadena = "select * from Curso";
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
                                res.send(JSON.stringify(recordset.recordsets[0]));
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
        //*********************************************************get contrasena************************************************************ */
        this.router.get('/catedratico', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    var cadena = "Select * from Catedratico";
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
                                res.send(JSON.stringify(recordset.recordsets[0]));
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
        //*********************************************************get contrasena************************************************************ */
        this.router.get('/curso-catedratico', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    var cadena = "select Curso.nombre,Catedratico.nombres,Catedratico.apellidos FROM ((Curso_Catedratico JOIN Curso ON Curso_Catedratico.curso_CodigoCurso=Curso.codigoCurso) JOIN Catedratico ON Curso_Catedratico.catedratico_NoCatedratico=Catedratico.noCatedratico);";
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
                                res.send(JSON.stringify(recordset.recordsets[0]));
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
const cursosRoutes = new CursosRoutes();
exports.default = cursosRoutes.router;
