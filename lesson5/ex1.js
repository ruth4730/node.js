const express = require('express');
const app = express();
let count=0;
app.get('/', (req, res) => {
    res.send(count++);
  })
app.put('/put', (req, res) => {
    res.send("welcome to my website! you activate the method PUT at address: '/put'")
})
app.post('/post', (req, res) => {
    res.send("welcome to my website! you activate the method POST at address: '/post'")
})
app.delete('/delete', (req, res) => {
    res.send("welcome to my website! you activate the method DELETE at address: '/delete'")
})
app.patch('/patch', (req, res) => {
    res.send("welcome to my website! you activate the method PATCH at address: '/patch'")
})
app.listen(5050);