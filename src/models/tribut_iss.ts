import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class TributIss extends Model<InferAttributes<TributIss>, InferCreationAttributes<TributIss>> {
 declare id: number;
 declare id_tribut_operacao_fiscal: number;
 declare modalidade_base_calculo: string;
 declare porcento_base_calculo: number;
 declare aliquota_porcento: number;
 declare aliquota_unidade: number;
 declare valor_preco_maximo: number;
 declare valor_pauta_fiscal: number;
 declare item_lista_servico: number;
 declare codigo_tributacao: string;
}

TributIss.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_tribut_operacao_fiscal: {
   type: DataTypes.INTEGER,
   references: { model: "tribut_operacao_fiscal", key: "id" }
 },
 modalidade_base_calculo: {
   type: DataTypes.STRING,
 },
 porcento_base_calculo: {
   type: DataTypes.REAL,
 },
 aliquota_porcento: {
   type: DataTypes.REAL,
 },
 aliquota_unidade: {
   type: DataTypes.REAL,
 },
 valor_preco_maximo: {
   type: DataTypes.REAL,
 },
 valor_pauta_fiscal: {
   type: DataTypes.REAL,
 },
 item_lista_servico: {
   type: DataTypes.INTEGER,
 },
 codigo_tributacao: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "tribut_iss",
  },
);

export default TributIss;