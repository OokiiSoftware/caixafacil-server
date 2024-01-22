import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeNumeroInutilizado extends Model<InferAttributes<NfeNumeroInutilizado>, InferCreationAttributes<NfeNumeroInutilizado>> {
 declare id: number;
 declare serie: string;
 declare numero: number;
 declare data_inutilizacao: Date;
 declare observacao: string;
}

NfeNumeroInutilizado.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 serie: {
   type: DataTypes.STRING,
 },
 numero: {
   type: DataTypes.INTEGER,
 },
 data_inutilizacao: {
   type: DataTypes.DATE,
 },
 observacao: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "nfe_numero_inutilizado",
  },
);

export default NfeNumeroInutilizado;