import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from './UserModel.js'; 


const { DataTypes } = Sequelize;

const Invoice = db.define('invoices3', {
    nama_pelanggan: {
        type: DataTypes.STRING,
        allowNull:false
    },
    list_order: {
        type: DataTypes.STRING,
        allowNull:true
    },

    delivery: {
        type: DataTypes.ENUM('siang', 'sore', 'lainnya'),
        allowNull: true
    },
    total_tagihan: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    status_tagihan: {
        type: DataTypes.ENUM('BELUM LUNAS', 'LUNAS'),
        allowNull: true
    }
}, {
    freezeTableName: true
});

Invoice.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Invoice, { foreignKey: 'userId' });

export default Invoice;

(async () => {
    await db.sync();
})();