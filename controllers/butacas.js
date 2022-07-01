const {
	updateButaca
} = require("../repository/butacasRepository");
const { validationResult } = require("express-validator");

const editarButaca = async (req, res) => {   
	let errors = validationResult(req.body);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errores: errors.array() });
	}
	const bodyRequest = req.body;
	const datosButaca = {
		id: bodyRequest.id,
		columna: bodyRequest.columna,
		fila: bodyRequest.fila,
		disponible: bodyRequest.disponible,	
	};
	const actualizar = await updateButaca(datosButaca);

    if (!actualizar.modifiedCount) {
		return res.status(400).json({ mensaje: "No se modificó la butaca" });
	}
	if (actualizar.matchedCount == 0) {
		return res.status(404).json({ mensaje: "No se encontro la butaca" });
	}
	return res.status(200).json({ mensaje: "Butaca editada correctamente" });

};

module.exports = { editarButaca};