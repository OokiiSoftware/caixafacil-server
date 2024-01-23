import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeCanaFornecimentoDiario extends Model<InferAttributes<NfeCanaFornecimentoDiario>, InferCreationAttributes<NfeCanaFornecimentoDiario>> {
 declare id: number;
 declare id_nfe_cana: number;
 declare dia: string;
 declare quantidade: number;
 declare quantidade_total_mes: number;
 declare quantidade_total_anterior: number;
 declare quantidade_total_geral: number;
}

NfeCanaFornecimentoDiario.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_nfe_cana: {
   type: DataTypes.BIGINT,
   references: { model: "nfe_cana", key: "id" }
 },
 dia: {
   type: DataTypes.STRING,
 },
 quantidade: {
   type: DataTypes.REAL,
 },
 quantidade_total_mes: {
   type: DataTypes.REAL,
 },
 quantidade_total_anterior: {
   type: DataTypes.REAL,
 },
 quantidade_total_geral: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "nfe_cana_fornecimento_diario",
  },
);

export default NfeCanaFornecimentoDiario;