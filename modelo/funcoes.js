/********************************************************************************************************
 * objetivo: puxar informações do array
 * autor: Gabriel Renato
 * Data: 18/03/2026
 * versão: 1.0
 * ******************************************************************************************************/

let lista = require('./contatos.js')
let contat = lista.contatos['whats-users']

var fotos

const getListaDeContatos = function() {
    let listacontatos = {
        "dados": []
    }

   contat.forEach(function(pessoas){
    listacontatos.dados.push(pessoas)
   })
    return listacontatos
}

const getdadosdeperfil = function(nome) {
    let listadeperfil = {
        nome: nome,
        nick: false,
        foto: false,
        numero: false,
        imagem: false,
        cor_de_fundo: false,
    }

    for (let usuario of contat){
        if (usuario.account.toLowerCase() === nome.toLowerCase()) {
            listadeperfil.nick = usuario.nickname
            listadeperfil.foto = usuario['profile-image']
            listadeperfil.numero = usuario.number
            listadeperfil.cor_de_fundo = usuario.background
            listadeperfil.imagem = usuario['profile-image']

            return listadeperfil
        }
    }

    return listadeperfil
}

const getdadosdeusuarios = function(nome) {
    let listadeperfil = {
        "nome": nome,
        "descricao": false,
        "foto": false,
        
    }

    for (let usuario of contat){
        const contato = usuario.contacts.find(a => a.name === nome)
        if (contato) {
            listadeperfil.descricao = contato.description
            listadeperfil.foto = contato.image
            

            return listadeperfil
        }
    }

    return listadeperfil
}

const getmensagens = function() {
    let mensagem = []

    contat.forEach(function(mensanger){
        mensanger.contacts.forEach(function(user){
            mensagem.push({
            contato: user.name,
            mensagens: user.messages
            })
        })
        
    })
    return mensagem
}

const conversaporusuario = function(user, contato){
    let listadeconversa = {
        nome: false,
        numero: false,
        conversa: []
    }

    
}

//console.log(getListaDeContatos())
console.log(getmensagens())