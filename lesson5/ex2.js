const express = require('express')
const path = require('path');
const app = express()
app.get('/cards', (req, res) => {
    res.status(200).send("welcome to cards page")
})
app.get('/checks', (req, res) => {
    res.status(200).json({ message: 'welcome to checks page' });
})
app.get('/sales', (req, res) => {
    res.status(200).send("<h1>welcome to sales page</h1>");
})
app.get('/page', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'i11.jpg'));
})
app.use((req, res) => {
    res.status(404).send('שגיאה 404 - הדף לא נמצא');
  });  
app.listen(3000)