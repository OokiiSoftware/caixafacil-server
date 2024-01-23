import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeDeclaracaoImportacao extends Model<InferAttributes<NfeDeclaracaoImportacao>, InferCreationAttributes<NfeDeclaracaoImportacao>> {
 declare id: number;
 declare id_nfe_detalhe: number;
 declare numero_documento: string;
 declare data_registro: Date;
 declare local_desembaraco: string;
 declare uf_desembaraco: string;
 declare data_desembaraco: Date;
 declare via_transporte: string;
 declare valor_afrmm: number;
 declare forma_intermediacao: string;
 declare cnpj: string;
 declare uf_terceiro: string;
 declare codigo_exportador: string;
}

NfeDeclaracaoImportacao.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_nfe_detalhe: {
   type: DataTypes.BIGINT,
   references: { model: "nfe_detalhe", key: "id" }
 },
 numero_documento: {
   type: DataTypes.STRING,
 },
 data_registro: {
   type: DataTypes.DATE,
 },
 local_desembaraco: {
   type: DataTypes.STRING,
 },
 uf_desembaraco: {
   type: DataTypes.STRING,
 },
 data_desembaraco: {
   type: DataTypes.DATE,
 },
 via_transporte: {
   type: DataTypes.STRING,
 },
 valor_afrmm: {
   type: DataTypes.REAL,
 },
 forma_intermediacao: {
   type: DataTypes.STRING,
 },
 cnpj: {
   type: DataTypes.STRING,
 },
 uf_terceiro: {
   type: DataTypes.STRING,
 },
 codigo_exportador: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "nfe_declaracao_importacao",
  },
);

export default NfeDeclaracaoImportacao;