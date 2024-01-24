
const mongoose = require('mongoose')

const URI = 'mongodb+srv://rushi:keshrushi45@cluster0.f4hiwbi.mongodb.net/mern_practice?retryWrites=true&w=majority'

const connectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.log('connection successful to DB')
    } catch (error) {
        console.error('database connection failed')
        process.exit(0)
    }
}

module.exports = connectDb