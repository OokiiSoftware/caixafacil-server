import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class PdvSangria extends Model<InferAttributes<PdvSangria>, InferCreationAttributes<PdvSangria>> {
 declare id: number;
 declare id_pdv_movimento: number;
 declare data_sangria: Date;
 declare hora_sangria: string;
 declare valor: number;
 declare observacao: string;
}

PdvSangria.init({
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
 data_sangria: {
   type: DataTypes.DATE,
 },
 hora_sangria: {
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
    modelName: "pdv_sangria",
  },
);

export default PdvSangria;