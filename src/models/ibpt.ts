import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class Ibpt extends Model<InferAttributes<Ibpt>, InferCreationAttributes<Ibpt>> {
 declare id: number;
 declare ncm: string;
 declare ex: string;
 declare tipo: string;
 declare descricao: string;
 declare nacional_federal: number;
 declare importados_federal: number;
 declare estadual: number;
 declare municipal: number;
 declare vigencia_inicio: Date;
 declare vigencia_fim: Date;
 declare chave: string;
 declare versao: string;
 declare fonte: string;
}

Ibpt.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 ncm: {
   type: DataTypes.STRING,
 },
 ex: {
   type: DataTypes.STRING,
 },
 tipo: {
   type: DataTypes.STRING,
 },
 descricao: {
   type: DataTypes.STRING,
 },
 nacional_federal: {
   type: DataTypes.REAL,
 },
 importados_federal: {
   type: DataTypes.REAL,
 },
 estadual: {
   type: DataTypes.REAL,
 },
 municipal: {
   type: DataTypes.REAL,
 },
 vigencia_inicio: {
   type: DataTypes.DATE,
 },
 vigencia_fim: {
   type: DataTypes.DATE,
 },
 chave: {
   type: DataTypes.STRING,
 },
 versao: {
   type: DataTypes.STRING,
 },
 fonte: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "ibpt",
  },
);

export default Ibpt;