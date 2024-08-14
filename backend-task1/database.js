const { MongoClient } = require('mongodb');

require('dotenv').config();

const client = new MongoClient(process.env.MONGODB_URI);

let db;

async function connectDB() {
    try {
        await client.connect();
        db = client.db('eventDB');
        console.log('Connected to database');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

function getDB(){
    if(!db){
        throw new Error('Database not connected');
    }
    return db;
}

module.exports = {connectDB, getDB};