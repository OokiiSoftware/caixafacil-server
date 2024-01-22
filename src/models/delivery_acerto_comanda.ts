import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class DeliveryAcertoComanda extends Model<InferAttributes<DeliveryAcertoComanda>, InferCreationAttributes<DeliveryAcertoComanda>> {
 declare id: number;
 declare id_delivery_acerto: number;
 declare id_delivery: number;
}

DeliveryAcertoComanda.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_delivery_acerto: {
   type: DataTypes.INTEGER,
   references: { model: "delivery_acerto", key: "id" }
 },
 id_delivery: {
   type: DataTypes.INTEGER,
   references: { model: "delivery", key: "id" }
 },
},
  {
    sequelize,
    modelName: "delivery_acerto_comanda",
  },
);

export default DeliveryAcertoComanda;