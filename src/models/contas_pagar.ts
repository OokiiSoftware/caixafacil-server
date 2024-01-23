import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class ContasPagar extends Model<InferAttributes<ContasPagar>, InferCreationAttributes<ContasPagar>> {
 declare id: number;
 declare id_fornecedor: number;
 declare id_compra_pedido_cabecalho: number;
 declare data_lancamento: Date;
 declare data_vencimento: Date;
 declare data_pagamento: Date;
 declare valor_a_pagar: number;
 declare taxa_juro: number;
 declare taxa_multa: number;
 declare taxa_desconto: number;
 declare valor_juro: number;
 declare valor_multa: number;
 declare valor_desconto: number;
 declare valor_pago: number;
 declare numero_documento: string;
 declare historico: string;
 declare status_pagamento: string;
}

ContasPagar.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_fornecedor: {
   type: DataTypes.BIGINT,
   references: { model: "fornecedor", key: "id" }
 },
 id_compra_pedido_cabecalho: {
   type: DataTypes.BIGINT,
   references: { model: "compra_pedido_cabecalho", key: "id" }
 },
 data_lancamento: {
   type: DataTypes.DATE,
 },
 data_vencimento: {
   type: DataTypes.DATE,
 },
 data_pagamento: {
   type: DataTypes.DATE,
 },
 valor_a_pagar: {
   type: DataTypes.REAL,
 },
 taxa_juro: {
   type: DataTypes.REAL,
 },
 taxa_multa: {
   type: DataTypes.REAL,
 },
 taxa_desconto: {
   type: DataTypes.REAL,
 },
 valor_juro: {
   type: DataTypes.REAL,
 },
 valor_multa: {
   type: DataTypes.REAL,
 },
 valor_desconto: {
   type: DataTypes.REAL,
 },
 valor_pago: {
   type: DataTypes.REAL,
 },
 numero_documento: {
   type: DataTypes.STRING,
 },
 historico: {
   type: DataTypes.STRING,
 },
 status_pagamento: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "contas_pagar",
  },
);

export default ContasPagar;