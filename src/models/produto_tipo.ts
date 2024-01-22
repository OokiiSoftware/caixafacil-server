import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class ProdutoTipo extends Model<InferAttributes<ProdutoTipo>, InferCreationAttributes<ProdutoTipo>> {
 declare id: number;
 declare codigo: string;
 declare descricao: string;
}

ProdutoTipo.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 codigo: {
   type: DataTypes.STRING,
 },
 descricao: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "produto_tipo",
  },
);

export default ProdutoTipo;