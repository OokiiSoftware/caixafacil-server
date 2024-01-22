import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class Cozinha extends Model<InferAttributes<Cozinha>, InferCreationAttributes<Cozinha>> {
 declare id: number;
 declare nome: string;
 declare impressora_nome: string;
 declare impressora_endereco: string;
}

Cozinha.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 nome: {
   type: DataTypes.STRING,
 },
 impressora_nome: {
   type: DataTypes.STRING,
 },
 impressora_endereco: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "cozinha",
  },
);

export default Cozinha;