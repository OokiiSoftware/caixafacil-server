import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class EcfLogTotais extends Model<InferAttributes<EcfLogTotais>, InferCreationAttributes<EcfLogTotais>> {
 declare id: number;
 declare tipo_pagamento: number;
 declare produto: number;
 declare r01: number;
 declare r02: number;
 declare r03: number;
 declare r04: number;
 declare r05: number;
 declare r06: number;
 declare r07: number;
}

EcfLogTotais.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 tipo_pagamento: {
   type: DataTypes.INTEGER,
 },
 produto: {
   type: DataTypes.INTEGER,
 },
 r01: {
   type: DataTypes.INTEGER,
 },
 r02: {
   type: DataTypes.INTEGER,
 },
 r03: {
   type: DataTypes.INTEGER,
 },
 r04: {
   type: DataTypes.INTEGER,
 },
 r05: {
   type: DataTypes.INTEGER,
 },
 r06: {
   type: DataTypes.INTEGER,
 },
 r07: {
   type: DataTypes.INTEGER,
 },
},
  {
    sequelize,
    modelName: "ecf_log_totais",
  },
);

export default EcfLogTotais;