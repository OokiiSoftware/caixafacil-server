import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeTransporteReboque extends Model<InferAttributes<NfeTransporteReboque>, InferCreationAttributes<NfeTransporteReboque>> {
 declare id: number;
 declare id_nfe_transporte: number;
 declare placa: string;
 declare uf: string;
 declare rntc: string;
 declare vagao: string;
 declare balsa: string;
}

NfeTransporteReboque.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_nfe_transporte: {
   type: DataTypes.INTEGER,
   references: { model: "nfe_transporte", key: "id" }
 },
 placa: {
   type: DataTypes.STRING,
 },
 uf: {
   type: DataTypes.STRING,
 },
 rntc: {
   type: DataTypes.STRING,
 },
 vagao: {
   type: DataTypes.STRING,
 },
 balsa: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "nfe_transporte_reboque",
  },
);

export default NfeTransporteReboque;