import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class LogImportacao extends Model<InferAttributes<LogImportacao>, InferCreationAttributes<LogImportacao>> {
 declare id: number;
 declare data_importacao: Date;
 declare hora_importacao: string;
 declare erro: string;
 declare registro: string;
}

LogImportacao.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 data_importacao: {
   type: DataTypes.DATE,
 },
 hora_importacao: {
   type: DataTypes.STRING,
 },
 erro: {
   type: DataTypes.STRING,
 },
 registro: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "log_importacao",
  },
);

export default LogImportacao;