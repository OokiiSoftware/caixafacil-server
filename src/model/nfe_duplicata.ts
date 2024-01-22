import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeDuplicata extends Model<InferAttributes<NfeDuplicata>, InferCreationAttributes<NfeDuplicata>> {
 declare id: number;
 declare id_nfe_fatura: number;
 declare numero: string;
 declare data_vencimento: Date;
 declare valor: number;
}

NfeDuplicata.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_nfe_fatura: {
   type: DataTypes.INTEGER,
   references: { model: "nfe_fatura", key: "id" }
 },
 numero: {
   type: DataTypes.STRING,
 },
 data_vencimento: {
   type: DataTypes.DATE,
 },
 valor: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "nfe_duplicata",
  },
);

export default NfeDuplicata;