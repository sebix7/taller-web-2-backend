const Model = require("../models/Reserva");

const saveReserva = async (reservas) => {
//como vienen un array de reservas hay que recorrerlo.
	for (let index = 0; index < reservas.length; index++) {
	
	const ultimaReservaCargada = await Model.findOne({}).sort({ id: -1 }).limit(1);
	if (!ultimaReservaCargada) {
		reservas[index].id = 1;
	} else {
		reservas[index].id = ultimaReservaCargada.id + 1;
	}
	console.log(reservas[index]);
	const reserva = Model(reservas[index]);
	const request = await reserva.save(reserva).catch((err) => null);
	return request; 
	} 
	
};

const getReservas = async (req,res) => {
	var IdUser = (req.params.id);
	console.log(IdUser);
	try{
		const reservas = await Model.find({usuario:IdUser}, { _id: 0, __v: 0 }).sort({ id: 1 });
		console.log(reservas)
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