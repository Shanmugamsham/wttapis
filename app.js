const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const express = require("express");
const routes=require("./routes/routes")
const cors=require("cors")
const app = express();
const database=require("./database/cosmos")
require('dotenv').config()
const port = process.env.port

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "WTT API",
      version: "1.0.0",
      description: "API documentation for WTT endpoints",
      contact: {
        name: "API Support",
        email: "support@example.com"
      },
      servers: ["https://wttapi.onrender.com"]
    },
  },
  apis: ["./routes/*.js", "./components/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);



app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json()); 
app.use("/api",routes)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });