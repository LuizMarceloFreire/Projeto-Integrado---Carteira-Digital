const TiposDocumento = require('../models/TiposDocumento');

module.exports = {
    async getAll(req, res) {
        let todosTiposDocumentos = await TiposDocumento.findAll();

        todosTiposDocumentos = await todosTiposDocumentos.map(tipoDocumento => ({
            id: tipoDocumento.id,
            tipo: tipoDocumento.tipo,
            temVerso: tipoDocumento.temVerso, 
        }));

        return res.status(200).json(todosTiposDocumentos);
    }

}
