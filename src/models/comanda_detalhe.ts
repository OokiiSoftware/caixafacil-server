import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class ComandaDetalhe extends Model<InferAttributes<ComandaDetalhe>, InferCreationAttributes<ComandaDetalhe>> {
 declare id: number;
 declare id_comanda: number;
 declare id_produto: number;
 declare quantidade: number;
 declare valor_unitario: number;
 declare valor_total: number;
 declare valor_total_complemento: number;
 declare observacao: string;
 declare gerou_pedido_cozinha: string;
}

ComandaDetalhe.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_comanda: {
   type: DataTypes.INTEGER,
   references: { model: "comanda", key: "id" }
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
 valor_total: {
   type: DataTypes.REAL,
 },
 valor_total_complemento: {
   type: DataTypes.REAL,
 },
 observacao: {
   type: DataTypes.STRING,
 },
 gerou_pedido_cozinha: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "comanda_detalhe",
  },
);

export default ComandaDetalhe;