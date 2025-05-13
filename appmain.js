const express = require("express");
const app = express();
const path = require('path');
const {engine} = require ("express-handlebars");
const bodyParser = require("body-parser");
const moment = require('moment')

const Pontuacao = require ("./models/Pontuacao");
const Cadastro =require ("./models/Cadastro");
const Pagamento = require ("./models/Pagamento");

app.engine('handlebars', engine({
	defaultLayout: 'main',
	helpers:{
		formatDate:(date) =>{
			return moment(date).format('DD/MM/YYYY')
		}
	}
}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname+'/public')));
//teste



app.get("/pontuacao", function(req,res){
	Pontuacao.findAll({order: [['id', 'Asc']]}).then(function(pontuacoes){
		res.render('pontuacao',{pontuacoes: pontuacoes});
	})
});

app.get("/cad-pontuacao", function(req, res){
	res.render("cad_pontuacao");
});

app.post("/add-pontuacao", function(req, res){
	Pontuacao.create({
		ponto: req.body.ponto
	}).then(function(){
		res.redirect('/pontuacao')
		//res.send("cadastrado com sucesso")
	}).catch(function(erro){
		res.send("Erro ao realizar o cadastramento da Pontuacao!" + erro)
	})
});


app.get('/del-pontuacao/:id', function(req, res){
	Pontuacao.destroy({
		where: {'id' : req.params.id}
	}).then(function(){
		res.redirect('/pontuacao')
		//res.send("Pontuacao excluída com sucesso!")
	}).catch(function(erro){
		res.send("Erro ao realizar a exclusão da pontuacao")
	})

});

///cadastro

app.get("/cadastro", function(req,res){
	Cadastro.findAll({order: [['id', 'Asc']]}).then(function(cadastros){
		res.render('cadastro',{cadastros: cadastros});
	})
});

app.get("/cad-cadastro", function(req, res){
	res.render("cad_cadastro");
});

app.post("/add-cadastro", function(req, res){
	Cadastro.create({
		nome: req.body.nome,
		email: req.body.email,
		fone: req.body.fone,
		senha:req.body.senha,

	}).then(function(){
		res.redirect('/cadastro')
		//res.send("cadastrado com sucesso")
	}).catch(function(erro){
		res.send("Erro ao realizar o cadastramento!" + erro)
	})
});

app.get('/del-cadastro/:id', function(req, res){
	Cadastro.destroy({
		where: {'id' : req.params.id}
	}).then(function(){
		res.redirect('/cadastro')
		//res.send("Pagamento excluído com sucesso!")
	}).catch(function(erro){
		res.send("Erro ao realizar a exclusão do cadastro")
	})

});

app.get('/put-cadastro/:id', function(req, res){
	Cadastro.update({
		where: {'id' : req.params.id}
	}).then(function(){
		res.redirect('/cadastro')
		//res.send("Cadastro atualizado com sucesso!")
	}).catch(function(erro){
		res.send("Erro ao realizar a atualização do cadastro")
	})

});


//modelo -------------

app.get("/pagamento", function(req, res){
	Pagamento.findAll({order: [['id', 'Asc']]}).then(function(pagamentos){
		res.render('pagamento', {pagamentos: pagamentos});
	})	
});
app.get("/cad-pagamento", function(req, res){
	res.render("cad_pagamento");
});
app.post("/add-pagamento", function(req, res){
	Pagamento.create({
		nome: req.body.nome,
		valor: req.body.valor
	}).then(function(){
		res.redirect('/pagamento')
		//res.send("Pagamento cadastrado com sucesso")
	}).catch(function(erro){
		res.send("Erro ao realizar o cadastramento do pagamento!" + erro)
	})
});
app.get('/del-pagamento/:id', function(req, res){
	Pagamento.destroy({
		where: {'id': req.params.id}
	}).then(function(){
		res.redirect('/pagamento')
		//res.send("Pagamento excluído com sucesso!")
	}).catch(function(erro){
		res.send("Erro ao realizar a exclusão do Pagamento")
	})
})
app.listen(8085);
console.log("Servidor rodando em http://localhost:8085");