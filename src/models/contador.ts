import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class Contador extends Model<InferAttributes<Contador>, InferCreationAttributes<Contador>> {
 declare id: number;
 declare cpf: string;
 declare cnpj: string;
 declare nome: string;
 declare email: string;
 declare inscricao_crc: string;
 declare telefone: string;
 declare celular: string;
 declare logradouro: string;
 declare numero: string;
 declare complemento: string;
 declare bairro: string;
 declare cidade: string;
 declare uf: string;
 declare cep: string;
 declare codigo_ibge_cidade: number;
 declare codigo_ibge_uf: number;
}

Contador.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 cpf: {
   type: DataTypes.STRING,
 },
 cnpj: {
   type: DataTypes.STRING,
 },
 nome: {
   type: DataTypes.STRING,
 },
 email: {
   type: DataTypes.STRING,
 },
 inscricao_crc: {
   type: DataTypes.STRING,
 },
 telefone: {
   type: DataTypes.STRING,
 },
 celular: {
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
 cidade: {
   type: DataTypes.STRING,
 },
 uf: {
   type: DataTypes.STRING,
 },
 cep: {
   type: DataTypes.STRING,
 },
 codigo_ibge_cidade: {
   type: DataTypes.INTEGER,
 },
 codigo_ibge_uf: {
   type: DataTypes.INTEGER,
 },
},
  {
    sequelize,
    modelName: "contador",
  },
);

export default Contador;