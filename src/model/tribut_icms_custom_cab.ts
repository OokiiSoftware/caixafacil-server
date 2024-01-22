import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class TributIcmsCustomCab extends Model<InferAttributes<TributIcmsCustomCab>, InferCreationAttributes<TributIcmsCustomCab>> {
 declare id: number;
 declare descricao: string;
 declare origem_mercadoria: string;
}

TributIcmsCustomCab.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 descricao: {
   type: DataTypes.STRING,
 },
 origem_mercadoria: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "tribut_icms_custom_cab",
  },
);

export default TributIcmsCustomCab;