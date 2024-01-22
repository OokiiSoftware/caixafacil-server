import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class EcfR06 extends Model<InferAttributes<EcfR06>, InferCreationAttributes<EcfR06>> {
 declare id: number;
 declare id_pdv_operador: number;
 declare id_ecf_impressora: number;
 declare id_ecf_caixa: number;
 declare serie_ecf: string;
 declare coo: number;
 declare gnf: number;
 declare grg: number;
 declare cdc: number;
 declare denominacao: string;
 declare data_emissao: Date;
 declare hora_emissao: string;
 declare hash_registro: string;
}

EcfR06.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_pdv_operador: {
   type: DataTypes.INTEGER,
   references: { model: "pdv_operador", key: "id" }
 },
 id_ecf_impressora: {
   type: DataTypes.INTEGER,
   references: { model: "ecf_impressora", key: "id" }
 },
 id_ecf_caixa: {
   type: DataTypes.INTEGER,
   references: { model: "ecf_caixa", key: "id" }
 },
 serie_ecf: {
   type: DataTypes.STRING,
 },
 coo: {
   type: DataTypes.INTEGER,
 },
 gnf: {
   type: DataTypes.INTEGER,
 },
 grg: {
   type: DataTypes.INTEGER,
 },
 cdc: {
   type: DataTypes.INTEGER,
 },
 denominacao: {
   type: DataTypes.STRING,
 },
 data_emissao: {
   type: DataTypes.DATE,
 },
 hora_emissao: {
   type: DataTypes.STRING,
 },
 hash_registro: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "ecf_r06",
  },
);

export default EcfR06;