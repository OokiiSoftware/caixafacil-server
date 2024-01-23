import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeDestinatario extends Model<InferAttributes<NfeDestinatario>, InferCreationAttributes<NfeDestinatario>> {
 declare id: number;
 declare id_nfe_cabecalho: number;
 declare cnpj: string;
 declare cpf: string;
 declare estrangeiro_identificacao: string;
 declare nome: string;
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
 declare indicador_ie: string;
 declare inscricao_estadual: string;
 declare suframa: number;
 declare inscricao_municipal: string;
 declare email: string;
}

NfeDestinatario.init({
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
 estrangeiro_identificacao: {
   type: DataTypes.STRING,
 },
 nome: {
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
 indicador_ie: {
   type: DataTypes.STRING,
 },
 inscricao_estadual: {
   type: DataTypes.STRING,
 },
 suframa: {
   type: DataTypes.INTEGER,
 },
 inscricao_municipal: {
   type: DataTypes.STRING,
 },
 email: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "nfe_destinatario",
  },
);

export default NfeDestinatario;