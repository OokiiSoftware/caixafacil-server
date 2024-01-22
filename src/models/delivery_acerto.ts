import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class DeliveryAcerto extends Model<InferAttributes<DeliveryAcerto>, InferCreationAttributes<DeliveryAcerto>> {
 declare id: number;
 declare data_acerto: Date;
 declare hora_acerto: string;
 declare valor_recebido: number;
 declare valor_pago_entregador: number;
 declare observacao: string;
}

DeliveryAcerto.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 data_acerto: {
   type: DataTypes.DATE,
 },
 hora_acerto: {
   type: DataTypes.STRING,
 },
 valor_recebido: {
   type: DataTypes.REAL,
 },
 valor_pago_entregador: {
   type: DataTypes.REAL,
 },
 observacao: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "delivery_acerto",
  },
);

export default DeliveryAcerto;