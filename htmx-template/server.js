const express = require("express")
const app = express()

app.use(express.static(__dirname + '/public'));


app.get("/api/clicked", (req, res, next) => {
    const seed = Math.floor(Math.random() * 1000);
    res.send(`<img src='https://picsum.photos/200?random=${seed}' alt='Image ${seed}'><p>Card ${seed}</p>`);
})

app.listen(3000, () => {
    console.log("Servidor a correr em http://127.0.0.1:3000")
})
