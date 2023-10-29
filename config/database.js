const knex = require('knex')
require('dotenv').config();
const knexfile = require('./knexfile')

// establish database connection

const db = knex(knexfile.development)


// async function create_users_table() {
//     const tableExists = await db.schema.hasTable('users');
//     if (!tableExists) {
//         return db.schema.createTable('users', (table) => {
//             table.increments('id').primary();
//             table.string('username');
//             table.string('email');
//             table.string('password');
//             table.string('profile_photo');
//             table.string('location');
//         })
//         .then(() => {
//             console.log('"users" table created');
//         })
//         .catch((error) => {
//             console.error('Error creating table:', error);
//         });
//     }
// };




// create_users_table();



module.exports = db;


