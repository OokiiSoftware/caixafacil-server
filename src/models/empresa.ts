import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class Empresa extends Model<InferAttributes<Empresa>, InferCreationAttributes<Empresa>> {
  declare id: number;
  declare razao_social: string;
  declare nome_fantasia: string;
  declare cnpj: string;
  declare inscricao_estadual: string;
  declare inscricao_municipal: string;
  declare tipo_regime: string;
  declare crt: string;
  declare data_constituicao: Date;
  declare tipo: string;
  declare email: string;
  declare aliquota_pis: number;
  declare aliquota_cofins: number;
  declare logradouro: string;
  declare numero: string;
  declare complemento: string;
  declare cep: string;
  declare bairro: string;
  declare cidade: string;
  declare uf: string;
  declare fone: string;
  declare contato: string;
  declare codigo_ibge_cidade: number;
  declare codigo_ibge_uf: number;
  declare logotipo: Blob;
  declare registrado: boolean;
  declare natureza_juridica: string;
  declare email_pagamento: string;
  declare simei: boolean;
  declare data_registro: Date;
  declare hora_registro: string;
}

Empresa.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 razao_social: {
   type: DataTypes.STRING,
 },
 nome_fantasia: {
   type: DataTypes.STRING,
 },
 cnpj: {
   type: DataTypes.STRING,
 },
 inscricao_estadual: {
   type: DataTypes.STRING,
 },
 inscricao_municipal: {
   type: DataTypes.STRING,
 },
 tipo_regime: {
   type: DataTypes.STRING,
 },
 crt: {
   type: DataTypes.STRING,
 },
 data_constituicao: {
   type: DataTypes.DATE,
 },
 tipo: {
   type: DataTypes.STRING,
 },
 email: {
   type: DataTypes.STRING,
 },
 aliquota_pis: {
   type: DataTypes.REAL,
 },
 aliquota_cofins: {
   type: DataTypes.REAL,
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
 cep: {
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
 fone: {
   type: DataTypes.STRING,
 },
 contato: {
   type: DataTypes.STRING,
 },
 codigo_ibge_cidade: {
   type: DataTypes.INTEGER,
 },
 codigo_ibge_uf: {
   type: DataTypes.INTEGER,
 },
 logotipo: {
   type: DataTypes.BLOB,
 },
 registrado: {
   type: DataTypes.BOOLEAN,
 },
 natureza_juridica: {
   type: DataTypes.STRING,
 },
 email_pagamento: {
   type: DataTypes.STRING,
 },
 simei: {
   type: DataTypes.BOOLEAN,
 },
 data_registro: {
   type: DataTypes.DATE,
 },
 hora_registro: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "empresa",
  },
);

export default Empresa;