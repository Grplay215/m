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
app.get('/v1/senai/dados/perfil', function(request, response){
    let name = request.query.nome
    let user = zapFake.getdadosdeperfil(name)
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
app.get('/v1/senai/mensagem', function(request, response){
    let docAPI ={
        "api-description": "API para manipular dados de usuarios e contatos",
        "date": "2026-04-13",
        "development": "Gabriel Renato",
        "version": 1.0,
        "endpoints": [
            {   "rota1": "/v1/senai/lista/tudo",
                "description": "Retorna a lista de todos os dados de todos os usuarios e todos os contatos"
            },
            {   "rota2": "/v1/senai/dados/perfil?nome=",
                "description": "Retorna dados do perfil filtrando pelo nick"
            },
            {   "rota3": "/v1/senai/dados/do/contato?nome=",
                "description": "Retorna dados do contato filtrando pelo nome"
            },
            {   "rota4": "/v1/senai/mensagem/usuario?nome=",
                "description": "Retorna lista de mensagens filtrando pelo nome do usuario"
            },
            {   "rota5": "/v1/senai/mensagem?user= &contato=",
                "description": "Retorna as nemsagens filtrando pelo nome de usuario e pelo nome do contato"
            },
            {   "rota5": "",
                "description": "Retorna as cidades filtrando pela sigla do estado"
            },
        ]
    }
    response.json(docAPI)
    response.status(200)
})



app.listen(5050, function(){
    console.log('iniciando a API, aguarde...')
})