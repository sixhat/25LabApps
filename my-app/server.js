const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar EJS como mecanismo de templates (se necessário)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Servir arquivos estáticos (CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Rota principal
app.get("/", (req, res) => {
      res.render("index"); // Renderiza a view "index.ejs"
});

app.get("/message", (req, res) => {
      res.send("<p class='text-green-600'>HTMX carregou este conteúdo!</p>");
});

// Iniciar servidor
app.listen(PORT, () => {
      console.log(`Servidor a correr em http://localhost:${PORT}`);
});

