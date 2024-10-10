import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Menu = db.define('menu', {
    nama_menu: {
        type: DataTypes.STRING,
        allowNull: false
    },
    harga: {
        type: DataTypes.DECIMAL(10, 2),  
        allowNull: false
    },
    rating: {
        type: DataTypes.DECIMAL(3, 2),  
        allowNull: true
    },
    gambar: {  
        type: DataTypes.STRING,  
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default Menu;


(async () => {
    await db.sync();
})();
