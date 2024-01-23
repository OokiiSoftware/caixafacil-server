import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeEmitente extends Model<InferAttributes<NfeEmitente>, InferCreationAttributes<NfeEmitente>> {
 declare id: number;
 declare id_nfe_cabecalho: number;
 declare cnpj: string;
 declare cpf: string;
 declare nome: string;
 declare fantasia: string;
 declare logradouro: string;
 declare numero: string;
 declare complemento: string;
 declare bairro: string;
 declare codigo_municipio: number;
 declare nome_municipio: string;
 declare uf: string;
 declare cep: string;
 declare codigo_pais: number;
 declare nome_pais: string;
 declare telefone: string;
 declare inscricao_estadual: string;
 declare inscricao_estadual_st: string;
 declare inscricao_municipal: string;
 declare cnae: string;
 declare crt: string;
}

NfeEmitente.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_nfe_cabecalho: {
   type: DataTypes.BIGINT,
   references: { model: "nfe_cabecalho", key: "id" }
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
 fantasia: {
   type: DataTypes.STRING,
 },
 logradouro: {
   type: DataTypes.STRING,
 },
 numero: {
   type: DataTypes.STRING,
 },
 complemento: {
   type: DataTypes.STRING,
 },
 bairro: {
   type: DataTypes.STRING,
 },
 codigo_municipio: {
   type: DataTypes.INTEGER,
 },
 nome_municipio: {
   type: DataTypes.STRING,
 },
 uf: {
   type: DataTypes.STRING,
 },
 cep: {
   type: DataTypes.STRING,
 },
 codigo_pais: {
   type: DataTypes.INTEGER,
 },
 nome_pais: {
   type: DataTypes.STRING,
 },
 telefone: {
   type: DataTypes.STRING,
 },
 inscricao_estadual: {
   type: DataTypes.STRING,
 },
 inscricao_estadual_st: {
   type: DataTypes.STRING,
 },
 inscricao_municipal: {
   type: DataTypes.STRING,
 },
 cnae: {
   type: DataTypes.STRING,
 },
 crt: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "nfe_emitente",
  },
);

export default NfeEmitente;