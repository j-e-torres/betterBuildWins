const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL, {
    logging: false
});

const syncAndSeed = () => {
    return db.sync({ force: true })
}

module.exports = {
    db,
    syncAndSeed
}
