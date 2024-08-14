const { ObjectId } = require('mongodb');
const { getDB } = require('../database');

exports.createEvent = async (req, res, next) =>{
try{
    const { name, tagline, schedule, description, moderator, category, sub_category, rigor_rank } = req.body;
    const event = {
        name,
        tagline,
        schedule: new Date(schedule),
        description,
        files: { image: req.body.files?.image || null },
        moderator,
        category,
        sub_category,
        rigor_rank,
        attendees: [] // as there are no user id now so it will be empty 
    };
    const db = getDB();
    const result = await db.collection('events').insertOne(event);
    res.status(201).json({_id:result.insertedId})
   }catch(error){
    console.log(error);
   }
}

exports.getEventById = async (req, res, next) =>{
try{   
    const { id } = req.query;
   const db = getDB();
   const event = await db.collection('events').findOne({_id:new ObjectId(id) });
   if (!event) return res.status(404).json({ message: 'Event not found' });
   res.json(event);
  }catch(error){
    console.log(error);
   } 
}

exports.getLatestEvent = async (req, res, next) =>{
try{
    const { limit = 5, page = 1 } = req.query;
    const db = getDB();
    const events = await db.collection('events')
        .find()
        .sort({ schedule: -1 })
        .skip((page - 1) * limit)
        .limit(parseInt(limit))
        .toArray();
    res.json(events);
   }catch(error){
    console.log(error);
   }
}

exports.updateEvent = async(req, res, next) =>{
try{
    const { id } = req.params;
    const update = req.body;

    if (update.schedule) {
        update.schedule = new Date(update.schedule);
    }

    const db = getDB();
    const result = await db.collection('events').updateOne({ _id: new ObjectId(id) }, { $set: update });
    if (result.matchedCount === 0) return res.status(404).json({ message: 'Event not found' });
    res.json({ message: 'Event updated' });
  }catch(error){
    console.log(error);
  }
}

exports.deleteEvent = async(req, res, next)=>{
try{
    const { id } = req.params;
    const db = getDB();
    const result = await db.collection('events').deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) return res.status(404).json({ message: 'Event not found' });
    res.json({ message: 'Event deleted' });
   }catch(error){
    console.log(error);
  }
}