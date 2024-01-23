import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class EcfRecebimentoNaoFiscal extends Model<InferAttributes<EcfRecebimentoNaoFiscal>, InferCreationAttributes<EcfRecebimentoNaoFiscal>> {
 declare id: number;
 declare id_pdv_movimento: number;
 declare data_recebimento: Date;
 declare descricao: string;
 declare valor: number;
}

EcfRecebimentoNaoFiscal.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_pdv_movimento: {
   type: DataTypes.BIGINT,
   references: { model: "pdv_movimento", key: "id" }
 },
 data_recebimento: {
   type: DataTypes.DATE,
 },
 descricao: {
   type: DataTypes.STRING,
 },
 valor: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "ecf_recebimento_nao_fiscal",
  },
);

export default EcfRecebimentoNaoFiscal;