import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeCanaDeducoesSafra extends Model<InferAttributes<NfeCanaDeducoesSafra>, InferCreationAttributes<NfeCanaDeducoesSafra>> {
 declare id: number;
 declare id_nfe_cana: number;
 declare decricao: string;
 declare valor_deducao: number;
 declare valor_fornecimento: number;
 declare valor_total_deducao: number;
 declare valor_liquido_fornecimento: number;
}

NfeCanaDeducoesSafra.init({
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
 decricao: {
   type: DataTypes.STRING,
 },
 valor_deducao: {
   type: DataTypes.REAL,
 },
 valor_fornecimento: {
   type: DataTypes.REAL,
 },
 valor_total_deducao: {
   type: DataTypes.REAL,
 },
 valor_liquido_fornecimento: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "nfe_cana_deducoes_safra",
  },
);

export default NfeCanaDeducoesSafra;