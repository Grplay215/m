const express = require ('express')
const cors    = require ('cors')

const app = express()

const corsOptions ={
    origin:['*'],
    methods: 'GET',
    allowedHeaders: ['Content-type', 'Authorization']
}

app.use(cors(corsOptions))

const zapFake = require('./modelo/funcoes.js')

app.get('/v1/senai/lista/tudo', function(request, response){
    let dados = zapFake.getListaDeContatos()
    response.json(dados)
    response.status(200)
})
app.get('/v1/senai/dados/:perfil', function(request, response){
    let nome = request.params.perfil
    let user = zapFake.getdadosdeperfil(nome)
    if(!user){
        response.json(user)
        response.status(200)
    } else{
        response.status(400)
        response.json({"mensagem": "Nenhum perfil com esse nome achado"})
    }
})
app.get('/v1/senai/dados/do/contato', function(request, response){
    let name = request.query.nome
    let usaresse = zapFake.getdadosdeusuarios(name)
    response.json(usaresse)
    response.status(200)
})
app.get('/v1/senai/mensagem/usuario', function(request, response){
    let name = request.query.nome
    let gr = zapFake.getmensagens(name)
    response.json(gr)
    response.status(200)
})
app.get('/v1/senai/mensagem', function(request, response){
    let contact = request.query.user
    let dos = request.query.contato
    let gart = zapFake.getconversaporusuario(contact, dos)
    response.json(gart)
    response.status(200)

})



app.listen(5050, function(){
    console.log('iniciando a API, aguarde...')
})