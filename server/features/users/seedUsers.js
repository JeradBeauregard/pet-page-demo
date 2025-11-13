
const mongoose = require('mongoose');
const User = require('./userModel');
const  ConnectDB  = require('../../db');

async function seedUsers(){

try{
    await ConnectDB;
    await User.deleteMany({});

    const users = [
  {
    username: "solkeeper",
    email: "solkeeper@solterra.com",
    passwordHash: "temp123",
    solshards: 100,
    pets: []
  },
  {
    username: "echochild",
    email: "echochild@solterra.com",
    passwordHash: "temp123",
    solshards: 75,
    pets: []
  },
  {
    username: "glimmerfox",
    email: "glimmerfox@solterra.com",
    passwordHash: "temp123",
    solshards: 60,
    pets: []
  },
  {
    username: "shadeweaver",
    email: "shadeweaver@solterra.com",
    passwordHash: "temp123",
    solshards: 90,
    pets: []
  },
  {
    username: "lumenmoth",
    email: "lumenmoth@solterra.com",
    passwordHash: "temp123",
    solshards: 40,
    pets: []
  },
  {
    username: "runeseeker",
    email: "runeseeker@solterra.com",
    passwordHash: "temp123",
    solshards: 55,
    pets: []
  },
  {
    username: "dawnroot",
    email: "dawnroot@solterra.com",
    passwordHash: "temp123",
    solshards: 30,
    pets: []
  },
  {
    username: "veilwatcher",
    email: "veilwatcher@solterra.com",
    passwordHash: "temp123",
    solshards: 80,
    pets: []
  },
  {
    username: "myceliax",
    email: "myceliax@solterra.com",
    passwordHash: "temp123",
    solshards: 20,
    pets: []
  },
  {
    username: "whisperpine",
    email: "whisperpine@solterra.com",
    passwordHash: "temp123",
    solshards: 65,
    pets: []
  }
];

await User.insertMany(users);
console.log('users seeded. seedUsers.js');


}catch (err) {
console.error('seeding failed. seedUsers.js', err);
process.exit(1);
}
}

module.exports = { seedUsers }