import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class EcfR03 extends Model<InferAttributes<EcfR03>, InferCreationAttributes<EcfR03>> {
 declare id: number;
 declare id_ecf_r02: number;
 declare serie_ecf: string;
 declare totalizador_parcial: string;
 declare valor_acumulado: number;
 declare crz: number;
 declare hash_registro: string;
}

EcfR03.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_ecf_r02: {
   type: DataTypes.BIGINT,
   references: { model: "ecf_r02", key: "id" }
 },
 serie_ecf: {
   type: DataTypes.STRING,
 },
 totalizador_parcial: {
   type: DataTypes.STRING,
 },
 valor_acumulado: {
   type: DataTypes.REAL,
 },
 crz: {
   type: DataTypes.INTEGER,
 },
 hash_registro: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "ecf_r03",
  },
);

export default EcfR03;