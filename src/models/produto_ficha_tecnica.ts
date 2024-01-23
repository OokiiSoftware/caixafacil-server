import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class ProdutoFichaTecnica extends Model<InferAttributes<ProdutoFichaTecnica>, InferCreationAttributes<ProdutoFichaTecnica>> {
 declare id: number;
 declare id_produto: number;
 declare descricao: string;
//  declare id_produto_filho: number;
 declare quantidade: number;
 declare valor_custo: number;
 declare percentual_custo: number;
}

ProdutoFichaTecnica.init({
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
 descricao: {
   type: DataTypes.STRING,
 },
 /* id_produto_filho: {
   type: DataTypes.BIGINT,
   references: { model: "produto_filho", key: "id" }
 }, */
 quantidade: {
   type: DataTypes.REAL,
 },
 valor_custo: {
   type: DataTypes.REAL,
 },
 percentual_custo: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "produto_ficha_tecnica",
  },
);

export default ProdutoFichaTecnica;