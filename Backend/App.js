import express from "express"
const app = express()
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import adminRouter from "./src/routes/admins/routes.js"
import userRouter from "./src/routes/users/routes.js"
import session from "express-session"
import authAdmin from "./src/auth/admin.auth.js"
import swaggerjsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
dotenv.config()
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({extended: true, limit:"50mb"}))
app.use(cors())
app.use(session({
    secret: 'TESA', 
    resave: false, 
    saveUninitialized: true, 
    cookie: { 
      maxAge: 1000 * 60 * 60 * 1, 
      secure: false, 
    }
}))

// connecting mongoose
mongoose.connect(process.env.MONGO_STRING)
.then((result) => {
    console.log('connected to Mongodb');
}).catch((err) => {
    console.error(err);
});


const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Tesa Website API',
        version: '1.0.0',
        description: 'API documentation',
      },
      servers: [
        {
          url: 'http://localhost:4000',
        },
      ],
    },
    apis: ['./src/routes/admins/*.js','./src/routes/users/*.js'],
  };

  const specs = swaggerjsdoc(options)
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

  

import executiveModel from "./src/models/executive.model.js"
import advertModel from "./src/models/adverts.model.js"
import eventModel from "./src/models/event.model.js"
import sponsorModel from "./src/models/sponsor.model.js"

app.use("/admin", adminRouter)
app.use("/users", userRouter)

app.listen(4000, (req,res) => {
    console.log("server running on port 4000")
})