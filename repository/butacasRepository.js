const Model = require("../models/Butacas");

const getButacas = () => {
	
		const butacas = Model.find({}, { _id: 0}).sort({ id: 1 });
        return butacas;
};

const updateButaca = async (data) => {
	const request = await Model.updateOne({ columna: data.columna }, data);
	return request;
};

const getButaca = async (req, res) => {
	//const response = await Model.findOne({ columna }, { _id: 0});
	//return response;

    try{
	const butaca = await Model.findOne({columna: req.params.columna }, { _id: 0});
        if(!butaca){
            res.status(404).json({msg:'no existe la butaca'})
        }

        res.json(butaca)
    }catch(error){

        console.log(error)
        res.status(500).send('algun error')

    }
};

module.exports = {
	getButacas,
	updateButaca,
    getButaca
};