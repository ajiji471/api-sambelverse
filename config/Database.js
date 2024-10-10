import { Sequelize } from "sequelize";

const db = new Sequelize('db_menu', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

db.authenticate()
    .then(() => {
        console.log('Koneksi berhasil.');
    })
    .catch(err => {
        console.error('Tidak dapat terkoneksi:', err);
    });

export default db;
