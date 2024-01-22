import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class ProdutoGrupo extends Model<InferAttributes<ProdutoGrupo>, InferCreationAttributes<ProdutoGrupo>> {
 declare id: number;
 declare nome: string;
 declare descricao: string;
}

ProdutoGrupo.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
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
    modelName: "produto_grupo",
  },
);

export default ProdutoGrupo;