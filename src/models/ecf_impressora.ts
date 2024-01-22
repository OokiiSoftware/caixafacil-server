import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class EcfImpressora extends Model<InferAttributes<EcfImpressora>, InferCreationAttributes<EcfImpressora>> {
 declare id: number;
 declare numero: number;
 declare codigo: string;
 declare serie: string;
 declare identificacao: string;
 declare mc: string;
 declare md: string;
 declare vr: string;
 declare tipo: string;
 declare marca: string;
 declare modelo: string;
 declare modelo_acbr: string;
 declare modelo_documento_fiscal: string;
 declare versao: string;
 declare le: string;
 declare lef: string;
 declare mfd: string;
 declare lacre_na_mfd: string;
 declare docto: string;
 declare data_instalacao_sb: Date;
 declare hora_instalacao_sb: string;
}

EcfImpressora.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 numero: {
   type: DataTypes.INTEGER,
 },
 codigo: {
   type: DataTypes.STRING,
 },
 serie: {
   type: DataTypes.STRING,
 },
 identificacao: {
   type: DataTypes.STRING,
 },
 mc: {
   type: DataTypes.STRING,
 },
 md: {
   type: DataTypes.STRING,
 },
 vr: {
   type: DataTypes.STRING,
 },
 tipo: {
   type: DataTypes.STRING,
 },
 marca: {
   type: DataTypes.STRING,
 },
 modelo: {
   type: DataTypes.STRING,
 },
 modelo_acbr: {
   type: DataTypes.STRING,
 },
 modelo_documento_fiscal: {
   type: DataTypes.STRING,
 },
 versao: {
   type: DataTypes.STRING,
 },
 le: {
   type: DataTypes.STRING,
 },
 lef: {
   type: DataTypes.STRING,
 },
 mfd: {
   type: DataTypes.STRING,
 },
 lacre_na_mfd: {
   type: DataTypes.STRING,
 },
 docto: {
   type: DataTypes.STRING,
 },
 data_instalacao_sb: {
   type: DataTypes.DATE,
 },
 hora_instalacao_sb: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "ecf_impressora",
  },
);

export default EcfImpressora;