import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define('user1', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    no_wa: {
        type: DataTypes.STRING,  // Changed to STRING
        allowNull: true
    },
    tempat_kerja: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tagihan: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    saldo_deposit: {
        type: DataTypes.FLOAT,
        allowNull: true
    }
}, {
    freezeTableName: true
});

// Sinkronisasi dengan database
(async () => {
    try {
        await db.sync();
        console.log('Database synced successfully.');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
})();

export default User;
