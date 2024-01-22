import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class EcfRelatorioGerencial extends Model<InferAttributes<EcfRelatorioGerencial>, InferCreationAttributes<EcfRelatorioGerencial>> {
 declare id: number;
 declare id_pdv_configuracao: number;
 declare x: number;
 declare meios_pagamento: number;
 declare dav_emitidos: number;
 declare identificacao_paf: number;
 declare parametros_configuracao: number;
 declare outros: number;
}

EcfRelatorioGerencial.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_pdv_configuracao: {
   type: DataTypes.INTEGER,
   references: { model: "pdv_configuracao", key: "id" }
 },
 x: {
   type: DataTypes.INTEGER,
 },
 meios_pagamento: {
   type: DataTypes.INTEGER,
 },
 dav_emitidos: {
   type: DataTypes.INTEGER,
 },
 identificacao_paf: {
   type: DataTypes.INTEGER,
 },
 parametros_configuracao: {
   type: DataTypes.INTEGER,
 },
 outros: {
   type: DataTypes.INTEGER,
 },
},
  {
    sequelize,
    modelName: "ecf_relatorio_gerencial",
  },
);

export default EcfRelatorioGerencial;