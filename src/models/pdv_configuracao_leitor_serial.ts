import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class PdvConfiguracaoLeitorSerial extends Model<InferAttributes<PdvConfiguracaoLeitorSerial>, InferCreationAttributes<PdvConfiguracaoLeitorSerial>> {
 declare id: number;
 declare id_pdv_configuracao: number;
 declare usa: string;
 declare porta: string;
 declare baud: number;
 declare hand_shake: number;
 declare parity: number;
 declare stop_bits: number;
 declare data_bits: number;
 declare intervalo: number;
 declare usar_fila: string;
 declare hard_flow: string;
 declare soft_flow: string;
 declare sufixo: string;
 declare excluir_sufixo: string;
}

PdvConfiguracaoLeitorSerial.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_pdv_configuracao: {
   type: DataTypes.INTEGER,
   references: { model: "pdv_configuracao", key: "id" }
 },
 usa: {
   type: DataTypes.STRING,
 },
 porta: {
   type: DataTypes.STRING,
 },
 baud: {
   type: DataTypes.INTEGER,
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
 intervalo: {
   type: DataTypes.INTEGER,
 },
 usar_fila: {
   type: DataTypes.STRING,
 },
 hard_flow: {
   type: DataTypes.STRING,
 },
 soft_flow: {
   type: DataTypes.STRING,
 },
 sufixo: {
   type: DataTypes.STRING,
 },
 excluir_sufixo: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "pdv_configuracao_leitor_serial",
  },
);

export default PdvConfiguracaoLeitorSerial;