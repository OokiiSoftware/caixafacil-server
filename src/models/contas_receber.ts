import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class ContasReceber extends Model<InferAttributes<ContasReceber>, InferCreationAttributes<ContasReceber>> {
 declare id: number;
 declare id_cliente: number;
 declare id_pdv_venda_cabecalho: number;
 declare data_lancamento: Date;
 declare data_vencimento: Date;
 declare data_recebimento: Date;
 declare valor_a_receber: number;
 declare taxa_juro: number;
 declare taxa_multa: number;
 declare taxa_desconto: number;
 declare valor_juro: number;
 declare valor_multa: number;
 declare valor_desconto: number;
 declare valor_recebido: number;
 declare numero_documento: string;
 declare historico: string;
 declare status_recebimento: string;
}

ContasReceber.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_cliente: {
   type: DataTypes.BIGINT,
   references: { model: "cliente", key: "id" }
 },
 id_pdv_venda_cabecalho: {
   type: DataTypes.BIGINT,
   references: { model: "pdv_venda_cabecalho", key: "id" }
 },
 data_lancamento: {
   type: DataTypes.DATE,
 },
 data_vencimento: {
   type: DataTypes.DATE,
 },
 data_recebimento: {
   type: DataTypes.DATE,
 },
 valor_a_receber: {
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
 valor_recebido: {
   type: DataTypes.REAL,
 },
 numero_documento: {
   type: DataTypes.STRING,
 },
 historico: {
   type: DataTypes.STRING,
 },
 status_recebimento: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "contas_receber",
  },
);

export default ContasReceber;