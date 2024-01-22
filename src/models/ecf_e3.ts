import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class EcfE3 extends Model<InferAttributes<EcfE3>, InferCreationAttributes<EcfE3>> {
 declare id: number;
 declare serie_ecf: string;
 declare mf_adicional: string;
 declare tipo_ecf: string;
 declare marca_ecf: string;
 declare modelo_ecf: string;
 declare data_estoque: Date;
 declare hora_estoque: string;
 declare hash_registro: string;
}

EcfE3.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 serie_ecf: {
   type: DataTypes.STRING,
 },
 mf_adicional: {
   type: DataTypes.STRING,
 },
 tipo_ecf: {
   type: DataTypes.STRING,
 },
 marca_ecf: {
   type: DataTypes.STRING,
 },
 modelo_ecf: {
   type: DataTypes.STRING,
 },
 data_estoque: {
   type: DataTypes.DATE,
 },
 hora_estoque: {
   type: DataTypes.STRING,
 },
 hash_registro: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "ecf_e3",
  },
);

export default EcfE3;