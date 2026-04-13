/********************************************************************************************************
 * objetivo: puxar informações do array
 * autor: Gabriel Renato
 * Data: 18/03/2026
 * versão: 1.0
 * ******************************************************************************************************/

let lista = require('./contatos.js')
let contat = lista.contatos['whats-users']



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
        criacao_e_encerramento: false,
    }

    for (let usuario of contat){
        if (usuario.account.toLowerCase() === nome.toLowerCase()) {
            listadeperfil.nick = usuario.nickname
            listadeperfil.foto = usuario['profile-image']
            listadeperfil.numero = usuario.number
            listadeperfil.cor_de_fundo = usuario.background
            listadeperfil.imagem = usuario['profile-image']
            listadeperfil.criacao_e_encerramento = usuario['created-since']

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

const getmensagens = function(nome) {
    let mensagem = {
        usuario: nome,
        conversa: []
    }

    for (let mensanger of contat){
        if (nome === mensanger.nickname) {
            mensanger.contacts.forEach(dados =>{
                mensagem.conversa.push({
                    name: dados.name,
                    descricao: dados.description,
                    imagem: dados.image,
                    conversas: dados.messages
                })
            })
            return mensagem
        }
        
    }
    return mensagem
}

const getconversaporusuario = function(user, contato){
    let listadeconversa = {
        usuario: user,
        contact_nome: false,
        numero: false,
        conversa: []
    }

    for(let usermencer of contat){
       
            if (user === usermencer.nickname) {
                const mensagens = usermencer.contacts.find(c=> c.name === contato)

                if(mensagens){
            listadeconversa.contact_nome = mensagens.name
            listadeconversa.numero = usermencer.number
            listadeconversa.conversa = mensagens.messages
                }
        }
        
    }
    return listadeconversa
    
}

//console.log(getListaDeContatos())
//console.log(getconversaporusuario("Ricky", "Ana Maria"))
//console.log(getdadosdeusuarios('Mark Johnson'))

module.exports={
    getListaDeContatos,
    getdadosdeperfil,
    getdadosdeusuarios,
    getmensagens,
    getconversaporusuario
}