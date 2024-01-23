import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeImportacaoDetalhe extends Model<InferAttributes<NfeImportacaoDetalhe>, InferCreationAttributes<NfeImportacaoDetalhe>> {
 declare id: number;
 declare id_nfe_declaracao_importacao: number;
 declare numero_adicao: number;
 declare numero_sequencial: number;
 declare codigo_fabricante_estrangeiro: string;
 declare valor_desconto: number;
 declare drawback: number;
}

NfeImportacaoDetalhe.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_nfe_declaracao_importacao: {
   type: DataTypes.BIGINT,
   references: { model: "nfe_declaracao_importacao", key: "id" }
 },
 numero_adicao: {
   type: DataTypes.INTEGER,
 },
 numero_sequencial: {
   type: DataTypes.INTEGER,
 },
 codigo_fabricante_estrangeiro: {
   type: DataTypes.STRING,
 },
 valor_desconto: {
   type: DataTypes.REAL,
 },
 drawback: {
   type: DataTypes.INTEGER,
 },
},
  {
    sequelize,
    modelName: "nfe_importacao_detalhe",
  },
);

export default NfeImportacaoDetalhe;