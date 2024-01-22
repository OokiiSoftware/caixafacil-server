import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class EntregadorRotaDetalhe extends Model<InferAttributes<EntregadorRotaDetalhe>, InferCreationAttributes<EntregadorRotaDetalhe>> {
 declare id: number;
 declare id_entregador_rota: number;
 declare id_delivery: number;
 declare posicao_na_fila: number;
 declare latitude: number;
 declare longitude: number;
}

EntregadorRotaDetalhe.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_entregador_rota: {
   type: DataTypes.INTEGER,
   references: { model: "entregador_rota", key: "id" }
 },
 id_delivery: {
   type: DataTypes.INTEGER,
   references: { model: "delivery", key: "id" }
 },
 posicao_na_fila: {
   type: DataTypes.INTEGER,
 },
 latitude: {
   type: DataTypes.INTEGER,
 },
 longitude: {
   type: DataTypes.INTEGER,
 },
},
  {
    sequelize,
    modelName: "entregador_rota_detalhe",
  },
);

export default EntregadorRotaDetalhe;