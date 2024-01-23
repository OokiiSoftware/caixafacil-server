import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class TributConfiguraOfGt extends Model<InferAttributes<TributConfiguraOfGt>, InferCreationAttributes<TributConfiguraOfGt>> {
 declare id: number;
 declare id_tribut_grupo_tributario: number;
 declare id_tribut_operacao_fiscal: number;
}

TributConfiguraOfGt.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_tribut_grupo_tributario: {
   type: DataTypes.BIGINT,
   references: { model: "tribut_grupo_tributario", key: "id" }
 },
 id_tribut_operacao_fiscal: {
   type: DataTypes.BIGINT,
   references: { model: "tribut_operacao_fiscal", key: "id" }
 },
},
  {
    sequelize,
    modelName: "tribut_configura_of_gt",
  },
);

export default TributConfiguraOfGt;