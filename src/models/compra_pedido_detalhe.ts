import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class CompraPedidoDetalhe extends Model<InferAttributes<CompraPedidoDetalhe>, InferCreationAttributes<CompraPedidoDetalhe>> {
 declare id: number;
 declare id_compra_pedido_cabecalho: number;
 declare id_produto: number;
 declare quantidade: number;
 declare valor_unitario: number;
 declare valor_subtotal: number;
 declare taxa_desconto: number;
 declare valor_desconto: number;
 declare valor_total: number;
 declare cst: string;
 declare csosn: string;
 declare cfop: number;
}

CompraPedidoDetalhe.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_compra_pedido_cabecalho: {
   type: DataTypes.INTEGER,
   references: { model: "compra_pedido_cabecalho", key: "id" }
 },
 id_produto: {
   type: DataTypes.INTEGER,
   references: { model: "produto", key: "id" }
 },
 quantidade: {
   type: DataTypes.REAL,
 },
 valor_unitario: {
   type: DataTypes.REAL,
 },
 valor_subtotal: {
   type: DataTypes.REAL,
 },
 taxa_desconto: {
   type: DataTypes.REAL,
 },
 valor_desconto: {
   type: DataTypes.REAL,
 },
 valor_total: {
   type: DataTypes.REAL,
 },
 cst: {
   type: DataTypes.STRING,
 },
 csosn: {
   type: DataTypes.STRING,
 },
 cfop: {
   type: DataTypes.INTEGER,
 },
},
  {
    sequelize,
    modelName: "compra_pedido_detalhe",
  },
);

export default CompraPedidoDetalhe;