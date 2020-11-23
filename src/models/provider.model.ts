import { Model, Sequelize, DataTypes} from 'sequelize';
import { database } from '../database';

export class Provider extends Model{
    public id!: number;
    public name!: string;
    public email!: string;
    public phone!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Provider.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true 
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }


},{
    tableName: 'providers',
    sequelize: database //Es como decimos conectarnos a la base de datos que esta en archivo database.ts
})