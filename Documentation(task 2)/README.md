## DOCUMENTATION

**Object Model For Nudge**  
{  
  "_id": "ObjectId",            // Unique identifier for the nudge (MongoDB ObjectId)  
  "event_id": "ObjectId",        // Reference to the event this nudge is associated with (MongoDB ObjectId)  
  "title": "string",             // Title of the nudge    
  "image": "string",             // Image file   
  "schedule": "date",            // Date and time when the nudge should be sent  
  "timing": {  
    "from": "string",            // Start time for the nudge (format: hh:mm)  
    "to": "string"               // End time for the nudge (format: hh:mm)  
  },  
  "description": "string",       // Description of the nudge  
  "icon": "string",              // Icon for the minimized nudge view  
  "invitation": "string"         // One-line invitation message  
}  
  
**API DOCUMENTATION**  
Base url : http://localhost:3000/apiendpoint
  
>there was nothing about reading, updating and deleting nudge but i am adding as an extra.  
  
API ENDPOINT:  
 1.Create Nudge  
   * Endpoint: '/nudge'  
   * Method: POST  
   * Description: Create a new nudge for an event  
   * Payload: same as the object model above except the _id  
   * Response: Id of the created nudge or an error  
 2.Get Nudge  
   * Endpoint: '/nudge/:id'  
   * Method: GET  
   * Description: Retrieve details of a specific nudge by its ID.  
   * Payload:  
   * Response: same as the object model above or an error    
 3.Update Nudge    
   * Endpoint: '/nudge/:id'  
   * Method: PUT  
   * Description: Update an existing nudge by its ID.  
   * Payload: (Same as the Create Nudge payload)   
   * Response: message as nudge updated successfully or an error    
 4.Delete Nudge  
   * Endpoint: '/nudge/:id'  
   * Method: DELETE  
   * Description: Delete a nudge by its ID.    
   * Payload:     
   * Response: message as nudge deleted successfully or an error  
  
# CRUD FUNCTIONALITIES
  
* **Create**: Use the POST /nudges endpoint to create a new nudge associated with an event.   
* **Read**: Use the GET /nudges/:id to retrieve a specific nudge  
* **Update**: Use the PUT /nudges/:id endpoint to update an existing nudge.  
* **Delete**: Use the DELETE /nudges/:id endpoint to delete a nudge.  
 



