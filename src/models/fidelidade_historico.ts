import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class FidelidadeHistorico extends Model<InferAttributes<FidelidadeHistorico>, InferCreationAttributes<FidelidadeHistorico>> {
 declare id: number;
 declare id_cliente: number;
 declare id_fidelidade_utilizado: number;
 declare data_consumo: Date;
 declare hora_consumo: string;
 declare valor_consumo: number;
}

FidelidadeHistorico.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_cliente: {
   type: DataTypes.INTEGER,
   references: { model: "cliente", key: "id" }
 },
 id_fidelidade_utilizado: {
   type: DataTypes.INTEGER,
   references: { model: "fidelidade_utilizado", key: "id" }
 },
 data_consumo: {
   type: DataTypes.DATE,
 },
 hora_consumo: {
   type: DataTypes.STRING,
 },
 valor_consumo: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "fidelidade_historico",
  },
);

export default FidelidadeHistorico;