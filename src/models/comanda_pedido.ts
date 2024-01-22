import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class ComandaPedido extends Model<InferAttributes<ComandaPedido>, InferCreationAttributes<ComandaPedido>> {
 declare id: number;
 declare id_comanda: number;
 declare id_cozinha: number;
 declare entrou_na_fila: Date;
 declare saiu_da_fila: Date;
 declare estimativa_minutos: number;
 declare posicao: number;
 declare prioridade: string;
 declare inicio_preparo: Date;
 declare fim_preparo: Date;
}

ComandaPedido.init({
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
 id_cozinha: {
   type: DataTypes.INTEGER,
   references: { model: "cozinha", key: "id" }
 },
 entrou_na_fila: {
   type: DataTypes.DATE,
 },
 saiu_da_fila: {
   type: DataTypes.DATE,
 },
 estimativa_minutos: {
   type: DataTypes.INTEGER,
 },
 posicao: {
   type: DataTypes.INTEGER,
 },
 prioridade: {
   type: DataTypes.STRING,
 },
 inicio_preparo: {
   type: DataTypes.DATE,
 },
 fim_preparo: {
   type: DataTypes.DATE,
 },
},
  {
    sequelize,
    modelName: "comanda_pedido",
  },
);

export default ComandaPedido;