

// ----------------------
//   IMPORTS & SETUP
// ----------------------
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const ConnectDB = require("./db");

// Express app
const app = express();
const port = process.env.PORT || 8888;

// ----------------------
//   MIDDLEWARE
// ----------------------
app.use(cors());                 // allow requests from React client
app.use(express.json());         // parse JSON bodies
app.use(express.urlencoded({ extended: true })); // (optional)

// ----------------------
//   CONNECT TO DB
// ----------------------
(async () => {
    try {
        await ConnectDB();
        console.log("MongoDB connected.");
    } catch (err) {
        console.error("DB connection failed:", err);
    }
})();



// ----------------------
//   SEEDING
// ----------------------
const { seedUsers } = require('./features/users/seedUsers');
const { seedPets } = require('./features/pets/seedPets');
const { seedSpecies } = require('./features/species/seedSpecies');
const { seedItemTypes } = require('./features/items/itemTypes/seedItemTypes');
const { seedItems } = require('./features/items/seedItems');
const { seedUserInventories } = require('./features/users/userInventories/seedUserInventories');
const { seedShops } = require('./features/shops/seedShops');
const { seedShopInventories } = require('./features/shops/shopInventories/seedShopInventories');

async function seedDB() {
    console.log("Seeding database...");

    try { await seedUsers(); console.log("Users seeded."); } catch (e) { console.error("User seeding failed:", e); }
    try { await seedPets(); console.log("Pets seeded."); } catch (e) { console.error("Pet seeding failed:", e); }
    try { await seedSpecies(); console.log("Species seeded."); } catch (e) { console.error("Species seeding failed:", e); }
    try { await seedItemTypes(); console.log("ItemTypes seeded."); } catch (e) { console.error("ItemTypes failed:", e); }
    try { await seedItems(); console.log("Items seeded."); } catch (e) { console.error("Items failed:", e); }
    try { await seedUserInventories(); console.log("User inventories seeded."); } catch (e) { console.error("User inventory failed:", e); }
    try { await seedShops(); console.log("Shops seeded."); } catch (e) { console.error("Shops failed:", e); }
    try { await seedShopInventories(); console.log("Shop inventory seeded."); } catch (e) { console.error("Shop inventory failed:", e); }

    console.log("Seeding complete.");
}

(async () => {
    await seedDB();
})();


// ----------------------
//   ROUTES
// ----------------------
const itemRoutes = require("./features/items/itemRoutes");
const itemTypeRoutes = require("./features/items/itemTypes/ItemTypeRoutes");
const userRoutes = require("./features/users/userRoutes");
const petRoutes = require("./features/pets/petRoutes");
const speciesRoutes = require("./features/species/speciesRoutes");
const shopRoutes = require("./features/shops/shopRoutes");

app.use("/items", itemRoutes);
app.use("/itemtypes", itemTypeRoutes); // cleaner URL
app.use("/users", userRoutes);
app.use("/pets", petRoutes);
app.use("/species", speciesRoutes);
app.use("/shops", shopRoutes);

// ----------------------
//   START SERVER
// ----------------------
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


