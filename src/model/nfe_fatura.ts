import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeFatura extends Model<InferAttributes<NfeFatura>, InferCreationAttributes<NfeFatura>> {
 declare id: number;
 declare id_nfe_cabecalho: number;
 declare numero: string;
 declare valor_original: number;
 declare valor_desconto: number;
 declare valor_liquido: number;
}

NfeFatura.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_nfe_cabecalho: {
   type: DataTypes.INTEGER,
   references: { model: "nfe_cabecalho", key: "id" }
 },
 numero: {
   type: DataTypes.STRING,
 },
 valor_original: {
   type: DataTypes.REAL,
 },
 valor_desconto: {
   type: DataTypes.REAL,
 },
 valor_liquido: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "nfe_fatura",
  },
);

export default NfeFatura;