
const express = require('express')
const cors = require('cors')
const app = express()
const authRoute = require('./router/auth-router')
const contactRoute = require('./router/contact-router')
const connectDb = require('./utils/db')

const corsOptions = {
    origin: "https://rushi-tech.netlify.app",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}

app.use(cors(corsOptions))


app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/form', contactRoute)

const PORT = 8000


connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`port listening at ${PORT}`)
    })
})

