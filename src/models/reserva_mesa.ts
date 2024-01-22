import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class ReservaMesa extends Model<InferAttributes<ReservaMesa>, InferCreationAttributes<ReservaMesa>> {
 declare id: number;
 declare id_mesa: number;
 declare id_reserva: number;
}

ReservaMesa.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_mesa: {
   type: DataTypes.INTEGER,
   references: { model: "mesa", key: "id" }
 },
 id_reserva: {
   type: DataTypes.INTEGER,
   references: { model: "reserva", key: "id" }
 },
},
  {
    sequelize,
    modelName: "reserva_mesa",
  },
);

export default ReservaMesa;