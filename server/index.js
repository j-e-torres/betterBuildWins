const app = require('./app');
const db = require('./db');
const PORT = process.env.PORT || 4000;

db.syncAndSeed()
  .then(() =>
    app.listen(PORT, () => {
      console.log(`
            Listening on port ${PORT}
            http://localhost:${PORT}/

            Api:
            http://ddragon.leagueoflegends.com/cdn/9.10.1/data/en_US/champion.json

            http://ddragon.leagueoflegends.com/cdn/9.10.1/data/en_US/item.json

        `);
    })
  )
  .catch(err => console.error(err));
