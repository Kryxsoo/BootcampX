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

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
const values = [`%${cohortName}%`, limit];

const queryString =
`
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE '%${cohortName}%'
  LIMIT '%${limit}%';
  `
pool.query(queryString, values);

.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
}).catch(err => console.error('query error', err.stack));