const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors')

const app = express();


// allow cross-origin requests
app.use(cors());

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});