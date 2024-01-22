import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeReferenciada extends Model<InferAttributes<NfeReferenciada>, InferCreationAttributes<NfeReferenciada>> {
 declare id: number;
 declare id_nfe_cabecalho: number;
 declare chave_acesso: string;
}

NfeReferenciada.init({
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
 chave_acesso: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "nfe_referenciada",
  },
);

export default NfeReferenciada;