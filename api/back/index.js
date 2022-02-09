process.stdout.write('\x1B[2J\x1B[0f')
require('dotenv').config()

const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

;(async function () {
  try {
    await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/', {
      dbName: process.env.MONGO_DB || 'proyecto2'
    })
    console.log('💾 Connected to DB')
  } catch (err) {
    throw new Error(`Error connecting to DB: ${err}`)
  }

  try {
    const app = express()
      .use(cors())
      .use(morgan('dev'))
      .use(express.json())
      .use('/api', require('./routes/index'))

    const PORT = process.env.PORT || 8080
    app.listen(PORT, (err) => {
      if (err) {
        throw new Error(err)
      }
      console.info('>'.repeat(40))
      console.info('🧑‍🍳  Cuisine Server Live')
      console.info(`📡  PORT: http://localhost:${PORT}`)
      console.info('>'.repeat(40) + '\n')
    })
  } catch (err) {
    throw new Error(err)
  }
})()
