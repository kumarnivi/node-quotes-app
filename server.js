const express = require('express');
const bodyParser= require('body-parser');
const app = express();

const {MongoClient} = require('mongodb');

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = 'mongodb+srv://KumarNivi:root029@cluster0.rfhv2ah.mongodb.net/?retryWrites=true&w=majority';
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect((console.log('database connected')));
 
        // // Make the appropriate DB calls
        // await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
});

app.post('/quotes', (req, res) => {
    res.send(req.body)
  console.log(req.body)
})

// run the server
app.listen(8000, function() {
    console.log('listening on 3000')
  });


