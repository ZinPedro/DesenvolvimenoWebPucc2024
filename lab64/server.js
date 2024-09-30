const express = require('express');
const path = require('path');
const http = require('http');

const hostname = '127.0.0.1';
const app = express();
const port = 3000;

// Configura o Express para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

//processa dados do formulario
app.use(express.urlencoded({ extended: true }));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página "Sobre"
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

//POST
app.post('/submit', (req, res) => {
    res.send(`Dados recebidos: ${JSON.stringify(req.body)}`);
});

//Upload
app.post('/upload', (req, res) => {
    let fileData = '';
    req.on('data', chunk => fileData += chunk.toString());
    req.on('end', () => res.send('Upload simulado com sucesso!'));
});

// Erro 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'erro.html'));
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
