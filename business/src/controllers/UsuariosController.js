const Usuarios = require('../models/Usuarios');

module.exports = {
    async login(req, res) {
        const { cpf, senha } = req.body;

        if (!cpf || !senha) {
            return res.status(401).json({
                message: 'envie todos os valores obrigatorios!'
            });
        }

        const usuario = await Usuarios.findOne({
            where: {
                cpf
            }
        });

        const userPassword = usuario.senha
        const id = usuario.id

        if (userPassword === senha) {
            return res.status(200).json({ result: true, id });
        } else {
            return res.status(401).json({ result: false });
        }
    },

    async create(req, res) {
        const { nome, cpf, email, senha } = req.body;

        if (!nome || !cpf || !email || !senha) {
            return res.status(200).json({
                message: 'envie todos os valores obrigatorios!'
            });
        }

        const usuario = await Usuarios.findOne({
            where: {
                cpf
            }
        });

        if (usuario) {
            return res.json({ message: 'este CPF ja esta cadastrado!' });
        }

        await Usuarios.create({
            nome,
            cpf,
            email,
            senha,
        });

        return res.status(201).end();
    },
}