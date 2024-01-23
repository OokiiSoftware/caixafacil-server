import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class ProdutoImagem extends Model<InferAttributes<ProdutoImagem>, InferCreationAttributes<ProdutoImagem>> {
 declare id: number;
 declare id_produto: number;
 declare imagem: Blob;
}

ProdutoImagem.init({
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
 imagem: {
   type: DataTypes.BLOB,
 },
},
  {
    sequelize,
    modelName: "produto_imagem",
  },
);

export default ProdutoImagem;