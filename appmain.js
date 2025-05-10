const express = require("express");
const app = express();
const path = require('path');
const {engine} = require ("express-handlebars");
const bodyParser = require("body-parser");
const moment = require('moment')
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
app.use(express.static(path.join(__dirname,"public")));
//teste

app.get("/quiz", function(req,res){
	res.sendFile(__dirname+"/routes/quiz.html");
	res.render('quiz');
});

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
app.listen(8081);
console.log("Servidor rodando em http://localhost:8081")