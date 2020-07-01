const Documentos = require('../models/Documentos');
const TiposDocumento = require('../models/TiposDocumento');
const fs = require('fs');
const md5 = require('md5');

module.exports = {
    async pegarTodosDocumentosPorUsuario(req, res) {
        const { usuarioId } = req.params;
        let documentos = await Documentos.findAll({
            where: {
                usuarioId,
            },
            include: [
                {
                    model: TiposDocumento,
                    as: 'tipoDocumento',
                }
            ]
        });
        documentos = await documentos.map(documento => {
            const { id } = documento;
            const { tipo } = documento.tipoDocumento;
            return ({
                id,
                tipo,
            });
        });

        return res.status(200).json(documentos);
    },

    async pegarDocumentoPorId(req, res) {
        const { usuarioId, documentoId } = req.params;

        const documentos = await Documentos.findOne({
            where: {
                id: documentoId,
                usuarioId,
            }
        });

        return res.status(200).json(documentos);
    },

    async deletarDocumento(req, res) {
        const { documentoId } = req.params;

        const documento = await Documentos.findOne({
            where: {
                id: documentoId,
            }
        });

        const {
            imagemDocumentoFrente,
            imagemDocumentoVerso
        } = (documento);

        await Documentos.destroy({
            where: {
                id: documentoId
            }
        });

        try {
            fs.unlinkSync(`uploads/${imagemDocumentoFrente}`);
            if (imagemDocumentoVerso) {
                fs.unlinkSync(`uploads/${imagemDocumentoVerso}`);
            }
        } catch (error) {
            console.log(error);
        }

        return res.status(200).end();
    },

    async create(req, res) {
        const { tipoDocumentoId, usuarioId, imagemDocumentoFrente, imagemDocumentoVerso } = req.body;
        const imagemDocumentoFrenteBuffer = await Buffer.from(imagemDocumentoFrente, "base64");

        const newName = await md5(
            `${Math.random().toString()}
            ${(new Date()).valueOf().toString()}`
        );
        fs.writeFileSync(`uploads/${newName}.jpeg`, imagemDocumentoFrenteBuffer);

        const defineNewNameVerso = async () => {
            if (!imagemDocumentoVerso) {
                return null;
            }
            return md5(
                `${Math.random().toString()}
                ${(new Date()).valueOf().toString()}2`
            );
        }

        const defineImagemDocumentoVersoBuffer = async () => {
            if (!imagemDocumentoVerso) {
                return null;
            }
            return Buffer.from(imagemDocumentoVerso, "base64");
        }

        const newNameVerso = await defineNewNameVerso();
        const imagemDocumentoVersoBuffer = await defineImagemDocumentoVersoBuffer();

        if (newNameVerso) {
            fs.writeFileSync(`uploads/${newNameVerso}.jpeg`, imagemDocumentoVersoBuffer);
        }

        const jaExiste = await Documentos.findOne({
            where: {
                usuarioId,
                tipoDocumentoId,
            }
        });

        if (jaExiste) {
            await Documentos.update(
                {
                    imagemDocumentoFrente: `${newName}.jpeg`,
                    imagemDocumentoVerso: newNameVerso ? `${newNameVerso}.jpeg` : null,
                },
                {
                    where: {
                        id: jaExiste.id
                    }
                }
            );
        } else {
            await Documentos.create({
                tipoDocumentoId,
                usuarioId,
                imagemDocumentoFrente: `${newName}.jpeg`,
                imagemDocumentoVerso: newNameVerso ? `${newNameVerso}.jpeg` : null,
            });
        };

        return res.status(201).end();
    },
}