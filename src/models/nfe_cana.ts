import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeCana extends Model<InferAttributes<NfeCana>, InferCreationAttributes<NfeCana>> {
 declare id: number;
 declare id_nfe_cabecalho: number;
 declare safra: string;
 declare mes_ano_referencia: string;
}

NfeCana.init({
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
 safra: {
   type: DataTypes.STRING,
 },
 mes_ano_referencia: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "nfe_cana",
  },
);

export default NfeCana;