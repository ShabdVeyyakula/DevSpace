
const accountSid = 'AC3cc7bf158c1ec6cd819bd79f85ca2f32'
const authToken = '37088b69ccb5bd75796ec3a107c4ad30'
const client = require('twilio')(accountSid, authToken)


client.messages.create({
    to: '+15103780762',
    from: '+12093964767',
    body: 'Hello kush this is a twilio message'
    
})

.then((message) => console.log(message.sid));
