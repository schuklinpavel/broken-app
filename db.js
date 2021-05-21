const Sequelize = require('sequelize');

const sequelize = new Sequelize('gamedb', 'postgres', 'ghastb0i', {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres',
});

sequelize.authenticate().then(
    () => {
        console.log('Connected to DB'); /* eslint-disable-line */
    },

    (err) => {
        console.log(`Error: ${err}`); /* eslint-disable-line */
    },
);

module.exports = sequelize;
