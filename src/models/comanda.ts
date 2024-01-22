import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class Comanda extends Model<InferAttributes<Comanda>, InferCreationAttributes<Comanda>> {
 declare id: number;
 declare id_colaborador: number;
 declare id_mesa: number;
 declare id_cliente: number;
 declare id_empresa_delivery_pedido: number;
 declare numero: number;
 declare data_chegada: Date;
 declare hora_chegada: string;
 declare data_saida: Date;
 declare hora_saida: string;
 declare valor_subtotal: number;
 declare valor_desconto: number;
 declare valor_total: number;
 declare tipo: string;
 declare quantidade_pessoas: number;
 declare valor_por_pessoa: number;
 declare situacao: string;
 declare codigo_compartilhado: number;
}

Comanda.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_colaborador: {
   type: DataTypes.INTEGER,
   references: { model: "colaborador", key: "id" }
 },
 id_mesa: {
   type: DataTypes.INTEGER,
   references: { model: "mesa", key: "id" }
 },
 id_cliente: {
   type: DataTypes.INTEGER,
   references: { model: "cliente", key: "id" }
 },
 id_empresa_delivery_pedido: {
   type: DataTypes.INTEGER,
   references: { model: "empresa_delivery_pedido", key: "id" }
 },
 numero: {
   type: DataTypes.INTEGER,
 },
 data_chegada: {
   type: DataTypes.DATE,
 },
 hora_chegada: {
   type: DataTypes.STRING,
 },
 data_saida: {
   type: DataTypes.DATE,
 },
 hora_saida: {
   type: DataTypes.STRING,
 },
 valor_subtotal: {
   type: DataTypes.REAL,
 },
 valor_desconto: {
   type: DataTypes.REAL,
 },
 valor_total: {
   type: DataTypes.REAL,
 },
 tipo: {
   type: DataTypes.STRING,
 },
 quantidade_pessoas: {
   type: DataTypes.INTEGER,
 },
 valor_por_pessoa: {
   type: DataTypes.REAL,
 },
 situacao: {
   type: DataTypes.STRING,
 },
 codigo_compartilhado: {
   type: DataTypes.INTEGER,
 },
},
  {
    sequelize,
    modelName: "comanda",
  },
);

export default Comanda;