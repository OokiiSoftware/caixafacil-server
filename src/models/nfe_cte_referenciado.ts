import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeCteReferenciado extends Model<InferAttributes<NfeCteReferenciado>, InferCreationAttributes<NfeCteReferenciado>> {
 declare id: number;
 declare id_nfe_cabecalho: number;
 declare chave_acesso: string;
}

NfeCteReferenciado.init({
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
    modelName: "nfe_cte_referenciado",
  },
);

export default NfeCteReferenciado;