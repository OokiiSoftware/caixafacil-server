import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeTransporte extends Model<InferAttributes<NfeTransporte>, InferCreationAttributes<NfeTransporte>> {
 declare id: number;
 declare id_nfe_cabecalho: number;
 declare modalidade_frete: string;
 declare cnpj: string;
 declare cpf: string;
 declare nome: string;
 declare inscricao_estadual: string;
 declare endereco: string;
 declare nome_municipio: string;
 declare uf: string;
 declare valor_servico: number;
 declare valor_bc_retencao_icms: number;
 declare aliquota_retencao_icms: number;
 declare valor_icms_retido: number;
 declare cfop: number;
 declare municipio: number;
 declare placa_veiculo: string;
 declare uf_veiculo: string;
 declare rntc_veiculo: string;
}

NfeTransporte.init({
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
 modalidade_frete: {
   type: DataTypes.STRING,
 },
 cnpj: {
   type: DataTypes.STRING,
 },
 cpf: {
   type: DataTypes.STRING,
 },
 nome: {
   type: DataTypes.STRING,
 },
 inscricao_estadual: {
   type: DataTypes.STRING,
 },
 endereco: {
   type: DataTypes.STRING,
 },
 nome_municipio: {
   type: DataTypes.STRING,
 },
 uf: {
   type: DataTypes.STRING,
 },
 valor_servico: {
   type: DataTypes.REAL,
 },
 valor_bc_retencao_icms: {
   type: DataTypes.REAL,
 },
 aliquota_retencao_icms: {
   type: DataTypes.REAL,
 },
 valor_icms_retido: {
   type: DataTypes.REAL,
 },
 cfop: {
   type: DataTypes.INTEGER,
 },
 municipio: {
   type: DataTypes.INTEGER,
 },
 placa_veiculo: {
   type: DataTypes.STRING,
 },
 uf_veiculo: {
   type: DataTypes.STRING,
 },
 rntc_veiculo: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "nfe_transporte",
  },
);

export default NfeTransporte;