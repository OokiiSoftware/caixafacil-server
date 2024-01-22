import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeNfReferenciada extends Model<InferAttributes<NfeNfReferenciada>, InferCreationAttributes<NfeNfReferenciada>> {
 declare id: number;
 declare id_nfe_cabecalho: number;
 declare codigo_uf: number;
 declare ano_mes: string;
 declare cnpj: string;
 declare modelo: string;
 declare serie: string;
 declare numero_nf: number;
}

NfeNfReferenciada.init({
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
 codigo_uf: {
   type: DataTypes.INTEGER,
 },
 ano_mes: {
   type: DataTypes.STRING,
 },
 cnpj: {
   type: DataTypes.STRING,
 },
 modelo: {
   type: DataTypes.STRING,
 },
 serie: {
   type: DataTypes.STRING,
 },
 numero_nf: {
   type: DataTypes.INTEGER,
 },
},
  {
    sequelize,
    modelName: "nfe_nf_referenciada",
  },
);

export default NfeNfReferenciada;