const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL, {
  logging: false
})

const User = db.define('user', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

const syncAndSeed = () => {
  return db.sync({ force: true })
}

module.exports = {
  db,
  syncAndSeed
}
