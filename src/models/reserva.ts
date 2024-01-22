import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class Reserva extends Model<InferAttributes<Reserva>, InferCreationAttributes<Reserva>> {
 declare id: number;
 declare id_cliente: number;
 declare nome_contato: string;
 declare telefone_contato: string;
 declare data_reserva: Date;
 declare hora_reserva: string;
 declare quantidade_pessoas: number;
 declare situacao: string;
}

Reserva.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_cliente: {
   type: DataTypes.INTEGER,
   references: { model: "cliente", key: "id" }
 },
 nome_contato: {
   type: DataTypes.STRING,
 },
 telefone_contato: {
   type: DataTypes.STRING,
 },
 data_reserva: {
   type: DataTypes.DATE,
 },
 hora_reserva: {
   type: DataTypes.STRING,
 },
 quantidade_pessoas: {
   type: DataTypes.INTEGER,
 },
 situacao: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "reserva",
  },
);

export default Reserva;