import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class PdvConfiguracaoBalanca extends Model<InferAttributes<PdvConfiguracaoBalanca>, InferCreationAttributes<PdvConfiguracaoBalanca>> {
 declare id: number;
 declare id_pdv_configuracao: number;
 declare modelo: number;
 declare identificador: string;
 declare hand_shake: number;
 declare parity: number;
 declare stop_bits: number;
 declare data_bits: number;
 declare baud_rate: number;
 declare porta: string;
 declare timeout: number;
 declare tipo_configuracao: string;
}

PdvConfiguracaoBalanca.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_pdv_configuracao: {
   type: DataTypes.BIGINT,
   references: { model: "pdv_configuracao", key: "id" }
 },
 modelo: {
   type: DataTypes.INTEGER,
 },
 identificador: {
   type: DataTypes.STRING,
 },
 hand_shake: {
   type: DataTypes.INTEGER,
 },
 parity: {
   type: DataTypes.INTEGER,
 },
 stop_bits: {
   type: DataTypes.INTEGER,
 },
 data_bits: {
   type: DataTypes.INTEGER,
 },
 baud_rate: {
   type: DataTypes.INTEGER,
 },
 porta: {
   type: DataTypes.STRING,
 },
 timeout: {
   type: DataTypes.INTEGER,
 },
 tipo_configuracao: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "pdv_configuracao_balanca",
  },
);

export default PdvConfiguracaoBalanca;