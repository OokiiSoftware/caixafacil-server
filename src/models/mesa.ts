import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class Mesa extends Model<InferAttributes<Mesa>, InferCreationAttributes<Mesa>> {
 declare id: number;
 declare numero: string;
 declare quantidade_cadeiras: number;
 declare quantidade_cadeiras_crianca: number;
 declare disponivel: string;
 declare observacao: string;
}

Mesa.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 numero: {
   type: DataTypes.STRING,
 },
 quantidade_cadeiras: {
   type: DataTypes.INTEGER,
 },
 quantidade_cadeiras_crianca: {
   type: DataTypes.INTEGER,
 },
 disponivel: {
   type: DataTypes.STRING,
 },
 observacao: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "mesa",
  },
);

export default Mesa;