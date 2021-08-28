//Requires
    const express = require("express")
    const router = express.Router()
    const mongoose = require("mongoose") //Mongoose
    require("../models/Recado") //Path JS do Model
    const Presente = mongoose.model("presentesrecebidos") //Model
    require("../models/ListaPresente") //Path JS do Model
    const Lista = mongoose.model("lista") //Model

//Rotas
    //Index - Página Inicial
    router.get("/index", (req, res) => {
        res.render("index") //index.handlebars. Como está na pasta views não precisa passar o caminho.
    })

    //Lista de Presentes. .sort({key: 1 para crescente, -1 para decrescente})
    router.get("/lista", (req, res) => {
            Lista.find().sort({presente: 1}).then((lista) => {
            res.render("listaPresentes", {lista: lista})
        }).catch((err) => {
            console.log(`Erro: ${err}`)
        })
    })

    //Local da Festa
    router.get("/local", (req, res) => {
        res.render("localFesta") //localFesta.handlebars. Como está na pasta views não precisa passar o caminho.
    })

    //Recados Recebidos
    router.get("/recados", (req, res) => {
        Presente.find({}).then((recados) => {
            res.render("recado", {recados: recados})
    }).catch((err) => {
        console.log(err)
        })
    })

    //Enviando os dados do formulário dos prestes
    router.post("/lista", (req, res) => {
        const novoRecado = {
            nome: req.body.nome,
            presente: req.body.presente,
            recado: req.body.recado
        }

        new Presente(novoRecado).save().then(() => {
            console.log("Recado salvo com sucesso...")
            res.redirect("/route/lista")
        }).catch((err) => {
            console.log(`Erro: ${err}`)
        })

        Lista.deleteOne({presente: req.body.presente}).then(() => {
            console.log("Sucesso ao deletar")
        }).catch((err) => {console.log(err)})
    })


//Exportando módulo
    module.exports = router