const express = require('express');
const path = require('path');
const http = require('http');

const hostname = '127.0.0.1';
const app = express();
const port = 3000;

// Configura o Express para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página "Sobre"
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Erro 404
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'erro.html'));
});

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submit') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end(`Dados recebidos: ${body}`);
        });
    } else if (req.method === 'POST' && req.url === '/upload') {
        let fileData = '';
        req.on('data', chunk => {
            fileData += chunk.toString();
        });
        req.on('end', () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end('Upload simulado com sucesso!');
        });
    }else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Rota não encontrada');
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});