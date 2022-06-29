const { check } = require("express-validator");

const validarNuevaPelicula = [
	check("titulo")
		.notEmpty()
		.trim()
		.withMessage("El título de la película no puede estar vacío"),
	check("imagen")
		.notEmpty()
		.trim()
		.withMessage("Debe existir una imagen para la película"),
	check("descripcion")
		.notEmpty()
		.trim()
		.withMessage("El título de la película no puede estar vacío"),
	check("genero")
		.notEmpty()
		.trim()
		.withMessage("El título de la película no puede estar vacío"),
	check("duracion")
		.notEmpty()
		.trim()
		.withMessage("El título de la película no puede estar vacío"),
	check("actores")
		.notEmpty()
		.trim()
		.withMessage("El título de la película no puede estar vacío"),
	check("director")
		.notEmpty()
		.trim()
		.withMessage("El título de la película no puede estar vacío"),
	check("trailer")
		.notEmpty()
		.trim()
		.withMessage("El título de la película no puede estar vacío"),
];

module.exports = { validarNuevaPelicula };
