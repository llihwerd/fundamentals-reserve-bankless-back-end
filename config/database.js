import mongoose from 'mongoose'

const db = mongoose.connection

mongoose.connect(process.env.DATABASE_URL, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then(() => {
  console.log("Successfully connected to MongoDB.")
}).catch((error) => {
  console.error("Connection error", error)
})

db.on('connected', function () {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})
