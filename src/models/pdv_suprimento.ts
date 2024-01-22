import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class PdvSuprimento extends Model<InferAttributes<PdvSuprimento>, InferCreationAttributes<PdvSuprimento>> {
 declare id: number;
 declare id_pdv_movimento: number;
 declare data_suprimento: Date;
 declare hora_suprimento: string;
 declare valor: number;
 declare observacao: string;
}

PdvSuprimento.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_pdv_movimento: {
   type: DataTypes.INTEGER,
   references: { model: "pdv_movimento", key: "id" }
 },
 data_suprimento: {
   type: DataTypes.DATE,
 },
 hora_suprimento: {
   type: DataTypes.STRING,
 },
 valor: {
   type: DataTypes.REAL,
 },
 observacao: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "pdv_suprimento",
  },
);

export default PdvSuprimento;