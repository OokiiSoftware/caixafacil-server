import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class PdvCaixa extends Model<InferAttributes<PdvCaixa>, InferCreationAttributes<PdvCaixa>> {
 declare id: number;
 declare nome: string;
 declare data_cadastro: Date;
}

PdvCaixa.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 nome: {
   type: DataTypes.STRING,
 },
 data_cadastro: {
   type: DataTypes.DATE,
 },
},
  {
    sequelize,
    modelName: "pdv_caixa",
  },
);

export default PdvCaixa;