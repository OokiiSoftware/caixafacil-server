import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class Cfop extends Model<InferAttributes<Cfop>, InferCreationAttributes<Cfop>> {
 declare id: number;
 declare codigo: number;
 declare descricao: string;
 declare aplicacao: string;
}

Cfop.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 codigo: {
   type: DataTypes.INTEGER,
 },
 descricao: {
   type: DataTypes.STRING,
 },
 aplicacao: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "cfop",
  },
);

export default Cfop;