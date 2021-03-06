const _ = require("lodash");

module.exports = {
  Funciones: [
    {
      idFuncion: 1,
      idPelicula: 1,
      titulo: "Sonic",
      sala: 5,
      dia: "Lunes",
      fecha: "13-06-22",
      horario: "10 HS.",
      valorEntrada: 500,
      entradasDisponibles: 1000, 
    },
    {     
      idFuncion: 2,
      idPelicula: 1,
      titulo: "Sonic",
      sala: 6,
      dia: "Lunes",
      fecha: "13-06-22",
      horario: "16 HS.",
      valorEntrada: 500,
      entradasDisponibles: 1000,
    },
    {
      idFuncion: 3,
      idPelicula: 1,
      titulo: "Sonic",
      sala: 5,
      dia: "Martes",
      fecha: "14-06-22",
      horario: "14 HS.",
      valorEntrada: 500,
      entradasDisponibles: 1000,
    },
    {
      idFuncion: 4,
      idPelicula: 2,
      titulo: "Joker",
      sala: 1,
      dia: "Miercoles",
      fecha: "15-06-22",
      horario: "22 HS.",
      valorEntrada: 600,
      entradasDisponibles: 1000,
    },
    {
      idFuncion: 5,
      idPelicula: 1,
      titulo: "Sonic",
      sala: 2,
      dia: "Miercoles",
      fecha: "15-06-22",
      horario: "20 HS.",
      valorEntrada: 550,
      entradasDisponibles: 1000,
    },
    {
      idFuncion: 6,
      idPelicula: 1,
      titulo: "Sonic",
      sala: 5,
      dia: "Miercoles",
      fecha: "15-06-22",
      horario: "22 HS.",
      valorEntrada: 600,
      entradasDisponibles: 1000,
    },
    {
      idFuncion: 7,
      idPelicula: 1,
      titulo: "Sonic",
      sala: 5,
      dia: "Miercoles",
      fecha: "15-06-22",
      horario: "00 HS.",
      valorEntrada: 450,
      entradasDisponibles: 1000,
    },
    {
      idFuncion: 8,
      idPelicula: 2,
      titulo: "Joker",
      sala: 2,
      dia: "Jueves",
      fecha: "16-06-22",
      horario: "10 HS.",
      valorEntrada: 500,
      entradasDisponibles: 1000,
    },
    {
      idFuncion: 9,
      idPelicula: 2,
      titulo: "Joker",
      sala: 2,
      dia: "Jueves",
      fecha: "16-06-22",
      horario: "15 HS.",
      valorEntrada: 500,
      entradasDisponibles: 1000,
    },
  ],
};

module.exports.obtenerPorID = function (idPeli) {
  return _.filter(this.Funciones, { idPelicula: idPeli }); //devuelve las funciones que sean de esa pelicula
};
