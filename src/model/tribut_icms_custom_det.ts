import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class TributIcmsCustomDet extends Model<InferAttributes<TributIcmsCustomDet>, InferCreationAttributes<TributIcmsCustomDet>> {
 declare id: number;
 declare id_tribut_icms_custom_cab: number;
 declare uf_destino: string;
 declare cfop: number;
 declare csosn: string;
 declare cst: string;
 declare modalidade_bc: string;
 declare aliquota: number;
 declare valor_pauta: number;
 declare valor_preco_maximo: number;
 declare mva: number;
 declare porcento_bc: number;
 declare modalidade_bc_st: string;
 declare aliquota_interna_st: number;
 declare aliquota_interestadual_st: number;
 declare porcento_bc_st: number;
 declare aliquota_icms_st: number;
 declare valor_pauta_st: number;
 declare valor_preco_maximo_st: number;
}

TributIcmsCustomDet.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_tribut_icms_custom_cab: {
   type: DataTypes.INTEGER,
   references: { model: "tribut_icms_custom_cab", key: "id" }
 },
 uf_destino: {
   type: DataTypes.STRING,
 },
 cfop: {
   type: DataTypes.INTEGER,
 },
 csosn: {
   type: DataTypes.STRING,
 },
 cst: {
   type: DataTypes.STRING,
 },
 modalidade_bc: {
   type: DataTypes.STRING,
 },
 aliquota: {
   type: DataTypes.REAL,
 },
 valor_pauta: {
   type: DataTypes.REAL,
 },
 valor_preco_maximo: {
   type: DataTypes.REAL,
 },
 mva: {
   type: DataTypes.REAL,
 },
 porcento_bc: {
   type: DataTypes.REAL,
 },
 modalidade_bc_st: {
   type: DataTypes.STRING,
 },
 aliquota_interna_st: {
   type: DataTypes.REAL,
 },
 aliquota_interestadual_st: {
   type: DataTypes.REAL,
 },
 porcento_bc_st: {
   type: DataTypes.REAL,
 },
 aliquota_icms_st: {
   type: DataTypes.REAL,
 },
 valor_pauta_st: {
   type: DataTypes.REAL,
 },
 valor_preco_maximo_st: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "tribut_icms_custom_det",
  },
);

export default TributIcmsCustomDet;