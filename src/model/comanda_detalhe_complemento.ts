import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class ComandaDetalheComplemento extends Model<InferAttributes<ComandaDetalheComplemento>, InferCreationAttributes<ComandaDetalheComplemento>> {
 declare id: number;
 declare id_comanda_detalhe: number;
 declare id_produto: number;
 declare nome_produto: string;
 declare quantidade: number;
 declare valor_unitario: number;
 declare valor_total: number;
}

ComandaDetalheComplemento.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_comanda_detalhe: {
   type: DataTypes.INTEGER,
   references: { model: "comanda_detalhe", key: "id" }
 },
 id_produto: {
   type: DataTypes.INTEGER,
   references: { model: "produto", key: "id" }
 },
 nome_produto: {
   type: DataTypes.STRING,
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
},
  {
    sequelize,
    modelName: "comanda_detalhe_complemento",
  },
);

export default ComandaDetalheComplemento;