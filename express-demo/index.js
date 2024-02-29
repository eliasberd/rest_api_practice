const express = require('express');
const app = express();

app.get('/', (req,res) =>{ //format process (app.get), endpoint('/'), action ((res,res) => {}))
    res.send('hello world')
});

const flavors = [
    {
        id: 1,
        flavor: 'Chocolate'
    },
    {
        id: 2,
        flavor: 'Strawberry'
    },
    {
        id: 3,
        flavor: 'Dark chocolate'
    },
    {
        id: 4,
        flavor: 'Macha'
    }
]

app.get('/api/flavors', (req, res)=>{
    res.send(flavors);
});

app.get('/api/flavors/:id', (req,res) => {
    const flavor = flavors.find(c => c.id === parseInt(req.params.id));
    if(!flavor) res.status(404).send('Flavor not found'); //status(404) = error , status(200) = okay
    res.send(flavor);
});

app.get('/api/post/:year/:month', (req,res) =>{
    res.send(req.params);// req.params if attributes(such as year or month)

});

app.get('/api/post/:id', (req,res) => {
    res.send(req.params.id);
});


const port = process.env.PORT || 3000; //changing port, changing env
app.listen(port, ()=>console.log(`Listening on port ${port}`)); //not single quotation (') but dis one (`)


