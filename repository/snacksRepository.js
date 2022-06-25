const Model = require("../models/Store");

const getProductos = () => {
	const response = Model.find({}, { _id: 0 }).sort({ titulo: 1 });
	return response;
};

const getProducto = (id) => {
	const response = Model.findOne({ id },{ _id: 0, __v: 0 });
	return response;
};

module.exports = { getProductos, getProducto};
