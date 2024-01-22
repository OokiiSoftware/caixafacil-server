import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class EmpresaDeliveryPedido extends Model<InferAttributes<EmpresaDeliveryPedido>, InferCreationAttributes<EmpresaDeliveryPedido>> {
 declare id: number;
 declare codigo_pedido_empresa: string;
 declare conteudo_json: string;
 declare observacao: string;
 declare data_solicitacao: Date;
 declare hora_solicitacao: string;
}

EmpresaDeliveryPedido.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 codigo_pedido_empresa: {
   type: DataTypes.STRING,
 },
 conteudo_json: {
   type: DataTypes.STRING,
 },
 observacao: {
   type: DataTypes.STRING,
 },
 data_solicitacao: {
   type: DataTypes.DATE,
 },
 hora_solicitacao: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "empresa_delivery_pedido",
  },
);

export default EmpresaDeliveryPedido;