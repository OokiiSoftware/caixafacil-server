import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class TaxaEntrega extends Model<InferAttributes<TaxaEntrega>, InferCreationAttributes<TaxaEntrega>> {
 declare id: number;
 declare nome: string;
 declare valor: number;
 declare estimativa_minutos: number;
}

TaxaEntrega.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 nome: {
   type: DataTypes.STRING,
 },
 valor: {
   type: DataTypes.REAL,
 },
 estimativa_minutos: {
   type: DataTypes.INTEGER,
 },
},
  {
    sequelize,
    modelName: "taxa_entrega",
  },
);

export default TaxaEntrega;