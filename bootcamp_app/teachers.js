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
const values = [`%${cohortName}%`];

const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${cohortName || 'JUL02'}'
ORDER BY teacher;
`
pool.query(queryString, values);
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
});