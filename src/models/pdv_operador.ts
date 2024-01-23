import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class PdvOperador extends Model<InferAttributes<PdvOperador>, InferCreationAttributes<PdvOperador>> {
 declare id: number;
 declare id_colaborador: number;
 declare login: string;
 declare senha: string;
}

PdvOperador.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_colaborador: {
   type: DataTypes.BIGINT,
   references: { model: "colaborador", key: "id" }
 },
 login: {
   type: DataTypes.STRING,
 },
 senha: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "pdv_operador",
  },
);

export default PdvOperador;