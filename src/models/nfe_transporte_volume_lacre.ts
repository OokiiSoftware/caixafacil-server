import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeTransporteVolumeLacre extends Model<InferAttributes<NfeTransporteVolumeLacre>, InferCreationAttributes<NfeTransporteVolumeLacre>> {
 declare id: number;
 declare id_nfe_transporte_volume: number;
 declare numero: string;
}

NfeTransporteVolumeLacre.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_nfe_transporte_volume: {
   type: DataTypes.INTEGER,
   references: { model: "nfe_transporte_volume", key: "id" }
 },
 numero: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "nfe_transporte_volume_lacre",
  },
);

export default NfeTransporteVolumeLacre;