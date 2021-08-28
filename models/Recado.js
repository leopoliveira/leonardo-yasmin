//Requires
   const mongoose = require("mongoose")
   const Schema = mongoose.Schema

//Criando o model para receber os recados  
    const presentesRecebidosSchema = new Schema({
        nome: {
            type: String,
            require: false,
        },
        presente: {
            type: String,
            require: false
        },
        recado: {
            type: String,
            require: false
        }
    })

//Criando a collection
    mongoose.model("presentesrecebidos", presentesRecebidosSchema)