import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeTransporteVolume extends Model<InferAttributes<NfeTransporteVolume>, InferCreationAttributes<NfeTransporteVolume>> {
 declare id: number;
 declare id_nfe_transporte: number;
 declare quantidade: number;
 declare especie: string;
 declare marca: string;
 declare numeracao: string;
 declare peso_liquido: number;
 declare peso_bruto: number;
}

NfeTransporteVolume.init({
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
 quantidade: {
   type: DataTypes.INTEGER,
 },
 especie: {
   type: DataTypes.STRING,
 },
 marca: {
   type: DataTypes.STRING,
 },
 numeracao: {
   type: DataTypes.STRING,
 },
 peso_liquido: {
   type: DataTypes.REAL,
 },
 peso_bruto: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "nfe_transporte_volume",
  },
);

export default NfeTransporteVolume;