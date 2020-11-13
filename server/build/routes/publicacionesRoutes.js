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
class PublicacionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => { res.send('esta es una publicacion'); });
        //      **************** Anadir publicacion - curso ******************
        this.router.post('/nuevaCurso', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let resp = req.body;
                    console.log(resp.mensaje);
                    var cadena = "INSERT INTO Publicacion(mensaje,usuario_carnet,fecha,curso_CodigoCurso,tipo) values('" + resp.mensaje + "','" + resp.usuario_carnet + "','" + resp.fecha + "','" + resp.curso_CodigoCurso + "','" + resp.tipo + "');";
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
        //      **************** Anadir publicacion - catedratico ******************
        this.router.post('/nuevaCatedratico', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let resp = req.body;
                    console.log(resp.mensaje);
                    var cadena = "INSERT INTO Publicacion(mensaje,usuario_carnet,fecha,catedratico_NoCatedratico,tipo) values('" + resp.mensaje + "','" + resp.usuario_carnet + "','" + resp.fecha + "','" + resp.catedratico_NoCatedratico + "','" + resp.tipo + "');";
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
        //      **************** Anadir publicacion - curso-Catedratico ******************
        this.router.post('/nuevaCursoCatedratico', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let resp = req.body;
                    console.log(resp.mensaje);
                    var cadena = "INSERT INTO Publicacion(mensaje,usuario_carnet,fecha,curso_Catedratico_idCatedraticoCurso,tipo) values('" + resp.mensaje + "','" + resp.usuario_carnet + "','" + resp.fecha + "','" + resp.curso_Catedratico_idCatedraticoCurso + "','" + resp.tipo + "');";
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
        //      **************** Anadir publicacion - auxiliar ******************
        this.router.post('/nuevaAuxiliar', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let resp = req.body;
                    console.log(resp.mensaje);
                    var cadena = "INSERT INTO Publicacion (mensaje,usuario_carnet,fecha, auxiliar_idAuxiliar, tipo) VALUES ('" + resp.mensaje + "','" + resp.usuario_carnet + "','" + resp.fecha + "','" + resp.auxiliar_idAuxiliar + "','" + resp.tipo + "');";
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
        //      **************** Anadir publicacion - catedratico ******************
        this.router.post('/nuevaAuxiliarCurso', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let resp = req.body;
                    console.log(resp.mensaje);
                    var cadena = "INSERT INTO Publicacion (mensaje,usuario_carnet,fecha, auxiliar_Curso, tipo) VALUES ('" + resp.mensaje + "','" + resp.usuario_carnet + "','" + resp.fecha + "','" + resp.auxiliar_Curso + "','" + resp.tipo + "');";
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
        //******************************************get publicacion************************************************************ */
        this.router.get('/getPublicacion', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    var cadena = "select * from Publicacion";
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
        //******************************************get usuario************************************************************ */
        this.router.get('/usuario', function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let resp = req.body;
                    var cadena = "Select nombres,apellidos from Usuario where carnet  = '" + resp.carnet + "';";
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
const publicacionesRoutes = new PublicacionesRoutes();
exports.default = publicacionesRoutes.router;
