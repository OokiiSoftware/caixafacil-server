import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeProcessoReferenciado extends Model<InferAttributes<NfeProcessoReferenciado>, InferCreationAttributes<NfeProcessoReferenciado>> {
 declare id: number;
 declare id_nfe_cabecalho: number;
 declare identificador: string;
 declare origem: string;
}

NfeProcessoReferenciado.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_nfe_cabecalho: {
   type: DataTypes.BIGINT,
   references: { model: "nfe_cabecalho", key: "id" }
 },
 identificador: {
   type: DataTypes.STRING,
 },
 origem: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "nfe_processo_referenciado",
  },
);

export default NfeProcessoReferenciado;