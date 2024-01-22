import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeProdRuralReferenciada extends Model<InferAttributes<NfeProdRuralReferenciada>, InferCreationAttributes<NfeProdRuralReferenciada>> {
 declare id: number;
 declare id_nfe_cabecalho: number;
 declare codigo_uf: number;
 declare ano_mes: string;
 declare cnpj: string;
 declare cpf: string;
 declare inscricao_estadual: string;
 declare modelo: string;
 declare serie: string;
 declare numero_nf: number;
}

NfeProdRuralReferenciada.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_nfe_cabecalho: {
   type: DataTypes.INTEGER,
   references: { model: "nfe_cabecalho", key: "id" }
 },
 codigo_uf: {
   type: DataTypes.INTEGER,
 },
 ano_mes: {
   type: DataTypes.STRING,
 },
 cnpj: {
   type: DataTypes.STRING,
 },
 cpf: {
   type: DataTypes.STRING,
 },
 inscricao_estadual: {
   type: DataTypes.STRING,
 },
 modelo: {
   type: DataTypes.STRING,
 },
 serie: {
   type: DataTypes.STRING,
 },
 numero_nf: {
   type: DataTypes.INTEGER,
 },
},
  {
    sequelize,
    modelName: "nfe_prod_rural_referenciada",
  },
);

export default NfeProdRuralReferenciada;