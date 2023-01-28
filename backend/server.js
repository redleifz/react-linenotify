import sendlinenotifyRouter from './routes/sendLineNotifyRoutes.js'
import express from 'express'
import bodyParser from "body-parser"
import cors from 'cors'

const app = express()
const port = 5000

const corsOptions = {
  origin: 'https://www.jongjate.com',
  credentials: true,
};
app.use(cors(corsOptions));

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use('/',sendlinenotifyRouter);


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

// module.exports = app

module.exports = app;