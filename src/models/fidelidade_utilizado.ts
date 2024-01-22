import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class FidelidadeUtilizado extends Model<InferAttributes<FidelidadeUtilizado>, InferCreationAttributes<FidelidadeUtilizado>> {
 declare id: number;
 declare data_utilizacao: Date;
 declare hora_utilizacao: string;
 declare valor_utilizado: number;
}

FidelidadeUtilizado.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 data_utilizacao: {
   type: DataTypes.DATE,
 },
 hora_utilizacao: {
   type: DataTypes.STRING,
 },
 valor_utilizado: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "fidelidade_utilizado",
  },
);

export default FidelidadeUtilizado;