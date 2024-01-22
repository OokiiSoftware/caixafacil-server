import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class ProdutoUnidade extends Model<InferAttributes<ProdutoUnidade>, InferCreationAttributes<ProdutoUnidade>> {
 declare id: number;
 declare sigla: string;
 declare descricao: string;
 declare pode_fracionar: string;
}

ProdutoUnidade.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 sigla: {
   type: DataTypes.STRING,
 },
 descricao: {
   type: DataTypes.STRING,
 },
 pode_fracionar: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "produto_unidade",
  },
);

export default ProdutoUnidade;