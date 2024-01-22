import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class EmpresaCnae extends Model<InferAttributes<EmpresaCnae>, InferCreationAttributes<EmpresaCnae>> {
 declare id: number;
 declare codigo: string;
 declare principal: string;
 declare descricao: string;
}

EmpresaCnae.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 codigo: {
   type: DataTypes.STRING,
 },
 principal: {
   type: DataTypes.STRING,
 },
 descricao: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "empresa_cnae",
  },
);

export default EmpresaCnae;