import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class EmpresaSegmento extends Model<InferAttributes<EmpresaSegmento>, InferCreationAttributes<EmpresaSegmento>> {
 declare id: number;
 declare codigo: string;
 declare denominacao: string;
 declare divisoes: string;
}

EmpresaSegmento.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 codigo: {
   type: DataTypes.STRING,
 },
 denominacao: {
   type: DataTypes.STRING,
 },
 divisoes: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "empresa_segmento",
  },
);

export default EmpresaSegmento;