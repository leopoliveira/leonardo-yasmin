//Requires
const mongoose = require("mongoose")
const Schema = mongoose.Schema

/*mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/bd", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado com sucesso ao MongoDB!")
}).catch((err)=> {
    console.log(`Não conectado, erro: ${err}`)
})*/

//Criando o model para receber os presentes   
const presenteSchema = new Schema({
    presente: {
        type: String,
        require: false
    }
})

//Criando a collection
//const lista = mongoose.model("lista", presenteSchema)
mongoose.model("lista", presenteSchema)

/*lista.insertMany([{presente: 'Abridores de Garrafas e Latas'},
{presente: 'Air Fryer 5L'},
{presente: 'Amassador de Alho'},
{presente: 'Amassador de Batata'},
{presente: 'Aparelho de Chá'},
{presente: 'Aparelho de Fondue'},
{presente: 'Aparelho de Jantar'},
{presente: 'Apoio de Colher'},
{presente: 'Ar Condicionado 9000BTUs Inverter'},
{presente: 'Aspirador de Pó Vertical'},
{presente: 'Banquetas'},
{presente: 'Boleira de Vidro'},
{presente: 'Cafeteira Elétrica Tradicional'},
{presente: 'Cama Box Casal com Baú'},
{presente: 'Cesto de Roupa Suja'},
{presente: 'Churrasqueira Elétrica'},
{presente: 'Chuveiro tipo Ducha Inox'},
{presente: 'Coifa ou Depurador'},
{presente: 'Conjunto de Armários Cozinha e Banheiro'},
{presente: 'Cooktop'},
{presente: 'Copos'},
{presente: 'Cortina com Blackout'},
{presente: 'Descascador de Legumes'},
{presente: 'Ducha 5000W'},
{presente: 'Edredom para Cama Box Normal'},
{presente: 'Escorredor de Macarrão e Arroz'},
{presente: 'Faqueiro'},
{presente: 'Fechador de Pastel e Cortador de Pizza'},
{presente: 'Ferro de Passar a Vapor'},
{presente: 'Forma de Bolo Tubo'},
{presente: 'Forma de Torta com Fundo Removível'},
{presente: 'Formas de Gelo de Silicone'},
{presente: 'Fruteira'},
{presente: 'Garrafa Térmica'},
{presente: 'Grill'},
{presente: 'Guarda-Roupas (Sob Medida)'},
{presente: 'Jogo Americano'},
{presente: 'Jogo Copos'},
{presente: 'Jogo de Cama Normal'},
{presente: 'Jogo de Colheres de Madeira'},
{presente: 'Jogo de Copos'},
{presente: 'Jogo de Espátulas'},
{presente: 'Jogo de Facas'},
{presente: 'Jogo de Formas Quadrada'},
{presente: 'Jogo de Jarras'},
{presente: 'Jogo de Luvas e Descanso de Panelas'},
{presente: 'Jogo de Panelas Antiaderente'},
{presente: 'Jogo de Potes'},
{presente: 'Jogo de Pratos'},
{presente: 'Jogo de Pratos para Sobremesa'},
{presente: 'Jogo de Tábuas para Cozinha'},
{presente: 'Jogo de Taças'},
{presente: 'Jogo de Taças para Sobremesa'},
{presente: 'Jogo de Talheres'},
{presente: 'Jogo de Tampas de Silicone'},
{presente: 'Jogo de Toalhas'},
{presente: 'Jogo de Travessas'},
{presente: 'Jogo Pano de Prato'},
{presente: 'Jogo para Bolo e Torta'},
{presente: 'Jogo Talheres'},
{presente: 'Kit Bacia de Cozinha (bowl)'},
{presente: 'Kit Banheiro'},
{presente: 'Kit Cobre Leito Cama Casal'},
{presente: 'Kit de Flanelas'},
{presente: 'Kit Petisqueira'},
{presente: 'Lixeira de Banheiro Inox'},
{presente: 'Máquina de Waffle'},
{presente: 'Medidores de Cozinha'},
{presente: 'Microonadas Inox'},
{presente: 'Mixer e Triturador'},
{presente: 'Mop'},
{presente: 'Painel TV (Sob Medida)'},
{presente: 'Panela de Pressão Elétrica'},
{presente: 'Panela Elétrica de Arroz'},
{presente: 'Pegadores'},
{presente: 'Pegadores de Silicone'},
{presente: 'Pipoqueira'},
{presente: 'Porta Temperos'},
{presente: 'Processador de Alimentos'},
{presente: 'Puff Pequeno'},
{presente: 'Rolo de Abrir Massa'},
{presente: 'Saleiro, Porta Óleo'},
{presente: 'Sanduicheira'},
{presente: 'SmarTv'},
{presente: 'Sofá (Sob Medida)'},
{presente: 'Tábua de Passar Roupa'},
{presente: 'Tapete Antiderrapante para Banheiro'},
{presente: 'Tapetes'},
{presente: 'Travesseiros'},
{presente: 'Varal de Chão Inox'}]
).then(() => {
    console.log("Salvo com sucesso....")
}).catch((err) => {
    console.log(err)
})*/

