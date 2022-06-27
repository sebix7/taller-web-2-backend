const Model = require("../models/Reserva");

const saveReserva = async (data) => {
	const ultimaReservaCargada = await Model.findOne({})
		.sort({ id: -1 })
		.limit(1);
	if (!ultimaReservaCargada) {
		data.id = 1;
	} else {
		data.id = ultimaReservaCargada.id + 1;
	}
	const reserva = new Model(data);
	const request = await reserva.save(data).catch((err) => null);
	return request;
};

const getReservas = async (req,res) => {
	try{
		const reservas = await Model.find({}, { _id: 0, __v: 0 }).sort({ id: 1 });
		res.json(reservas)
	}catch(error){
		console.log(error)
		res.status(500).send('Hubo un error')
	}
};

const deleteReserva = async (req, res)=>{
	
		let id=parseInt(req.params.id);
		const reserva = await Model.deleteOne({id});
		res.json(reserva)
		if(!reserva){
			res.status(404).json({msg:'No existe la reserva que intenta eliminar'});
		}
		await Model.findOneAndDelete({id})
		res.json({msg:'Reserva eliminada con exito'});
	
}

module.exports = {
	//getReserva
	getReservas,
	saveReserva,
	deleteReserva
	//updateReserva
};