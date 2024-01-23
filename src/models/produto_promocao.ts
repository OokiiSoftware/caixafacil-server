import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class ProdutoPromocao extends Model<InferAttributes<ProdutoPromocao>, InferCreationAttributes<ProdutoPromocao>> {
 declare id: number;
 declare id_produto: number;
 declare data_inicio: Date;
 declare data_fim: Date;
 declare quantidade_em_promocao: number;
 declare quantidade_maxima_cliente: number;
 declare valor: number;
}

ProdutoPromocao.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_produto: {
   type: DataTypes.BIGINT,
   references: { model: "produto", key: "id" }
 },
 data_inicio: {
   type: DataTypes.DATE,
 },
 data_fim: {
   type: DataTypes.DATE,
 },
 quantidade_em_promocao: {
   type: DataTypes.REAL,
 },
 quantidade_maxima_cliente: {
   type: DataTypes.REAL,
 },
 valor: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "produto_promocao",
  },
);

export default ProdutoPromocao;