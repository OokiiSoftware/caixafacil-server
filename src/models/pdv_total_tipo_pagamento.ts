import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class PdvTotalTipoPagamento extends Model<InferAttributes<PdvTotalTipoPagamento>, InferCreationAttributes<PdvTotalTipoPagamento>> {
 declare id: number;
 declare id_pdv_venda_cabecalho: number;
 declare id_pdv_tipo_pagamento: number;
 declare data_venda: Date;
 declare hora_venda: string;
 declare serie_ecf: string;
 declare coo: number;
 declare ccf: number;
 declare gnf: number;
 declare valor: number;
 declare nsu: string;
 declare estorno: string;
 declare rede: string;
 declare cartao_dc: string;
 declare hash_registro: string;
}

PdvTotalTipoPagamento.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_pdv_venda_cabecalho: {
   type: DataTypes.BIGINT,
   references: { model: "pdv_venda_cabecalho", key: "id" }
 },
 id_pdv_tipo_pagamento: {
   type: DataTypes.BIGINT,
   references: { model: "pdv_tipo_pagamento", key: "id" }
 },
 data_venda: {
   type: DataTypes.DATE,
 },
 hora_venda: {
   type: DataTypes.STRING,
 },
 serie_ecf: {
   type: DataTypes.STRING,
 },
 coo: {
   type: DataTypes.INTEGER,
 },
 ccf: {
   type: DataTypes.INTEGER,
 },
 gnf: {
   type: DataTypes.INTEGER,
 },
 valor: {
   type: DataTypes.REAL,
 },
 nsu: {
   type: DataTypes.STRING,
 },
 estorno: {
   type: DataTypes.STRING,
 },
 rede: {
   type: DataTypes.STRING,
 },
 cartao_dc: {
   type: DataTypes.STRING,
 },
 hash_registro: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "pdv_total_tipo_pagamento",
  },
);

export default PdvTotalTipoPagamento;