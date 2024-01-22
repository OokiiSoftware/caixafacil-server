import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class TributPis extends Model<InferAttributes<TributPis>, InferCreationAttributes<TributPis>> {
 declare id: number;
 declare id_tribut_configura_of_gt: number;
 declare cst_pis: string;
 declare efd_tabela_435: string;
 declare modalidade_base_calculo: string;
 declare porcento_base_calculo: number;
 declare aliquota_porcento: number;
 declare aliquota_unidade: number;
 declare valor_preco_maximo: number;
 declare valor_pauta_fiscal: number;
}

TributPis.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_tribut_configura_of_gt: {
   type: DataTypes.INTEGER,
   references: { model: "tribut_configura_of_gt", key: "id" }
 },
 cst_pis: {
   type: DataTypes.STRING,
 },
 efd_tabela_435: {
   type: DataTypes.STRING,
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
},
  {
    sequelize,
    modelName: "tribut_pis",
  },
);

export default TributPis;