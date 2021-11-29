const { Sequelize } = require ('sequelize');
// const{ user, database, password } = require ('../config/config.js');


const seq = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
    dialect: 'postgres',
    host: process.env.PGHOST,
    define: {
      timestamps: false
    },
    logging: false
});


seq.authenticate()
.then(() => seq.sync())
.catch((error) => console.log(error));

// seq.authenticate()
// .then(() => console.log('connected!'))
// .catch((error) => console.log(error));

module.exports = seq;