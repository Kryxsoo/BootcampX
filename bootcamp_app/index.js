const pg = require('pg');

// const Client = pg.Client; // single connection to the database
// const Pool = pg.Pool; // many clients; managed (5 connections by default)

const Client = pg.Client;

const config = {
    host: 'kashin.db.elephantsql.com',
    port: 5432, //Default port
    name: 'snofqfld',
    user: 'snofqfld',
    password: '1KQOwF77k6DDgSh2COpRpFDDjh8Hf0eY'
};

//postgres://snofqfld:1KQOwF77k6DDgSh2COpRpFDDjh8Hf0eY@kashin.db.elephantsql.com/snofqfld

const client = new Client(config);

client.connect();