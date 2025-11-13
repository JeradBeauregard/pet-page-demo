

// --- EXPRESS SET UP
const  ConnectDB  = require('./db');
const express = require("express"); // imports express modules
const path = require("path"); // imports node.js pathing modules
//set up Express object and port
const app = express(); // creates express application, allows us to use http requests within app
const port = process.env.PORT || "8888"; // sets up default port for localhost, if a service uses its own itll use that instead

//set up server listening
app.listen(port, () => { // listens for server 
console.log(`Listening on http://localhost:${port}`); // when server runs callback function console.log executes
});

// ---- PUG ROUTING

app.set("views", path.join(__dirname, "views")); //Specifies the views folder where Pug template files are stored.
                                                  //Express will look in this folder when rendering templates.
app.set("view engine", "pug"); // Sets Pug as the template engine.
                                //This allows Express to automatically convert .pug files into HTML when using res.render().

//__dirname: This is a built-in Node.js variable that gives the absolute path of the current directory (where your script is running).


app.use(express.static(path.join(__dirname, "public")));

//-- CONNECT TO DB and Seed

const { seedUsers } = require('./features/users/seedUsers');
const { seedPets } = require('./features/pets/seedPets');
const { seedSpecies } = require('./features/species/seedSpecies');
const { seedItemTypes } = require('./features/items/itemTypes/seedItemTypes');
const { seedItems } = require('./features/items/seedItems');
const { seedUserInventories } = require('./features/users/userInventories/seedUserInventories');
const { seedShops } = require('./features/shops/seedShops');
const { seedShopInventories } = require('./features/shops/shopInventories/seedShopInventories');

async function seedDB(){
    await ConnectDB();
    try{
       await seedUsers();
       console.log('user seeding complete. index.js');
    }catch (err) {
        console.error('users failed to seed. seedDB() index.js', err);
    }
    try{
        await seedPets();
        console.log('pet seeding complete. index.js')
    }catch (err) {
        console.error('pets failed to seed. index.js', err);
    }
    try{
        await seedSpecies();
        console.log('species seeding complete. index.js');
    }catch (err){
        console.error('species failed to seed. index.js', err);
    }
    try{
        await seedItemTypes();
        console.log('Item Types seeding complete. index.js');
    }catch (err){
        console.error('Item Types failed to seed. index.js', err);
    }
    try{
        await seedItems();
        console.log('Item seeding complete. index.js');
    }catch (err){
        console.error('Item seeding failed. index.js', err);
    }
    try{
        await seedUserInventories();
        console.log('user inventories seeding complete. index.js');
    }catch (err){
        console.error('user inventories seeding failed. index.js', err);
    }
    try{
        await seedShops();
        console.log('shop seeding complete. index.js');
    }catch (err){
        console.error('shop seeding failed. index.js', err);
    }
    try{
        await seedShopInventories();
        console.log('shop inventory seeding complete. index.js');
    }catch (err){
        console.error('shop inventory seeding failed. index.js', err);
    }

}
(async ()=>{
try{
    await seedDB()
}catch (err) {
    console.error('seedDB failed.', err);
}})();




//--- ROUTES

const itemRoutes = require("./features/items/itemRoutes");
app.use("/items", itemRoutes);

const itemTypeRoutes = require("./features/items/itemTypes/ItemTypeRoutes");
app.use("/items/itemtypes", itemTypeRoutes);

const userRoutes = require("./features/users/userRoutes");
app.use("/users", userRoutes);

const petRoutes = require("./features/pets/petRoutes");
app.use("/pets", petRoutes);

const speciesRoutes = require("./features/species/speciesRoutes");
app.use("/species", speciesRoutes);

const shopRoutes = require("./features/shops/shopRoutes");
app.use("/shops", shopRoutes);



//req: The request object, containing data from the client (like form inputs, headers, etc.).
//res: The response object, used to send a response back to the client.

// the response is to render the index pug file with the title of "Home", This data is passed to the pug file






// now whenver we use the connection function it will return data from the specified database