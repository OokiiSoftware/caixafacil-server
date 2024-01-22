import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class TributOperacaoFiscal extends Model<InferAttributes<TributOperacaoFiscal>, InferCreationAttributes<TributOperacaoFiscal>> {
 declare id: number;
 declare descricao: string;
 declare descricao_na_nf: string;
 declare cfop: number;
 declare observacao: string;
}

TributOperacaoFiscal.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 descricao: {
   type: DataTypes.STRING,
 },
 descricao_na_nf: {
   type: DataTypes.STRING,
 },
 cfop: {
   type: DataTypes.INTEGER,
 },
 observacao: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "tribut_operacao_fiscal",
  },
);

export default TributOperacaoFiscal;