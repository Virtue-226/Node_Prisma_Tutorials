const express = require('express');
const app = express()

app.use(express.json())

app.use('/api/users', require('./routes/users'))
app.use('/api/posts', require('./routes/post'))

app.get('/', (req, res)=> {
    res.send("I am working now")
})










app.listen(5000, ()=> {
    console.log("listening on port" + "5000")
})