import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class Delivery extends Model<InferAttributes<Delivery>, InferCreationAttributes<Delivery>> {
 declare id: number;
 declare id_comanda: number;
 declare id_taxa_entrega: number;
 declare id_colaborador: number;
 declare nome_cliente: string;
 declare telefone_principal: string;
 declare telefone_recado: string;
 declare celular: string;
 declare logradouro: string;
 declare numero: string;
 declare complemento: string;
 declare cep: string;
 declare bairro: string;
 declare cidade: string;
 declare uf: string;
 declare valor_frete: number;
 declare valor_recebido: number;
 declare valor_a_receber: number;
 declare valor_solicitado_troco: number;
 declare previsao_preparo: Date;
 declare inicio_preparo: Date;
 declare previsao_entrega: Date;
 declare saiu_para_entrega: Date;
 declare entregue: Date;
 declare previsao_retirada: Date;
 declare pronto_para_retirada: Date;
 declare retirou: Date;
}

Delivery.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_comanda: {
   type: DataTypes.INTEGER,
   references: { model: "comanda", key: "id" }
 },
 id_taxa_entrega: {
   type: DataTypes.INTEGER,
   references: { model: "taxa_entrega", key: "id" }
 },
 id_colaborador: {
   type: DataTypes.INTEGER,
   references: { model: "colaborador", key: "id" }
 },
 nome_cliente: {
   type: DataTypes.STRING,
 },
 telefone_principal: {
   type: DataTypes.STRING,
 },
 telefone_recado: {
   type: DataTypes.STRING,
 },
 celular: {
   type: DataTypes.STRING,
 },
 logradouro: {
   type: DataTypes.STRING,
 },
 numero: {
   type: DataTypes.STRING,
 },
 complemento: {
   type: DataTypes.STRING,
 },
 cep: {
   type: DataTypes.STRING,
 },
 bairro: {
   type: DataTypes.STRING,
 },
 cidade: {
   type: DataTypes.STRING,
 },
 uf: {
   type: DataTypes.STRING,
 },
 valor_frete: {
   type: DataTypes.REAL,
 },
 valor_recebido: {
   type: DataTypes.REAL,
 },
 valor_a_receber: {
   type: DataTypes.REAL,
 },
 valor_solicitado_troco: {
   type: DataTypes.REAL,
 },
 previsao_preparo: {
   type: DataTypes.DATE,
 },
 inicio_preparo: {
   type: DataTypes.DATE,
 },
 previsao_entrega: {
   type: DataTypes.DATE,
 },
 saiu_para_entrega: {
   type: DataTypes.DATE,
 },
 entregue: {
   type: DataTypes.DATE,
 },
 previsao_retirada: {
   type: DataTypes.DATE,
 },
 pronto_para_retirada: {
   type: DataTypes.DATE,
 },
 retirou: {
   type: DataTypes.DATE,
 },
},
  {
    sequelize,
    modelName: "delivery",
  },
);

export default Delivery;