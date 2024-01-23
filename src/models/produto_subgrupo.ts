import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class ProdutoSubgrupo extends Model<InferAttributes<ProdutoSubgrupo>, InferCreationAttributes<ProdutoSubgrupo>> {
 declare id: number;
 declare id_produto_grupo: number;
 declare nome: string;
 declare descricao: string;
}

ProdutoSubgrupo.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_produto_grupo: {
   type: DataTypes.BIGINT,
   references: { model: "produto_grupo", key: "id" }
 },
 nome: {
   type: DataTypes.STRING,
 },
 descricao: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "produto_subgrupo",
  },
);

export default ProdutoSubgrupo;