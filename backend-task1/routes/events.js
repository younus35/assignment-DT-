const express = require('express');
const router = express.Router();

const eventController = require('../controller/events');

router.post('/events', eventController.createEvent);

router.get('/events', (req, res) => {
    if (req.query.id) {
        // If the 'id' query parameter is present, call getEventById
        return eventController.getEventById(req, res);
    } else if (req.query.type === 'latest') {
        // If 'type=latest' is present, call getLatestEvents
        return eventController.getLatestEvent(req, res);
    } else {
        // Handle case where neither 'id' nor 'type=latest' is provided
        res.status(400).json({ message: 'Invalid query parameters' });
    }
});

router.put('/events/:id', eventController.updateEvent);

router.delete('/events/:id', eventController.deleteEvent);

module.exports = router;