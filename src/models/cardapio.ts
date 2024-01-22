import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class Cardapio extends Model<InferAttributes<Cardapio>, InferCreationAttributes<Cardapio>> {
 declare id: number;
 declare id_produto: number;
 declare modo_preparo: string;
 declare info_alergico: string;
 declare ingredientes: string;
}

Cardapio.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_produto: {
   type: DataTypes.INTEGER,
   references: { model: "produto", key: "id" }
 },
 modo_preparo: {
   type: DataTypes.STRING,
 },
 info_alergico: {
   type: DataTypes.STRING,
 },
 ingredientes: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "cardapio",
  },
);

export default Cardapio;