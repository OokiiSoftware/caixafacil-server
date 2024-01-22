import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class EcfSintegra60a extends Model<InferAttributes<EcfSintegra60a>, InferCreationAttributes<EcfSintegra60a>> {
 declare id: number;
 declare id_ecf_sintegra_60m: number;
 declare situacao_tributaria: string;
 declare valor: number;
}

EcfSintegra60a.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_ecf_sintegra_60m: {
   type: DataTypes.INTEGER,
   references: { model: "ecf_sintegra_60m", key: "id" }
 },
 situacao_tributaria: {
   type: DataTypes.STRING,
 },
 valor: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "ecf_sintegra_60a",
  },
);

export default EcfSintegra60a;