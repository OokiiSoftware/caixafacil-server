import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeNumero extends Model<InferAttributes<NfeNumero>, InferCreationAttributes<NfeNumero>> {
 declare id: number;
 declare modelo: string;
 declare serie: string;
 declare numero: number;
}

NfeNumero.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 modelo: {
   type: DataTypes.STRING,
 },
 serie: {
   type: DataTypes.STRING,
 },
 numero: {
   type: DataTypes.INTEGER,
 },
},
  {
    sequelize,
    modelName: "nfe_numero",
  },
);

export default NfeNumero;