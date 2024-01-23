import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class CompraPedidoCabecalho extends Model<InferAttributes<CompraPedidoCabecalho>, InferCreationAttributes<CompraPedidoCabecalho>> {
 declare id: number;
 declare id_colaborador: number;
 declare id_fornecedor: number;
 declare data_pedido: Date;
 declare data_previsao_entrega: Date;
 declare data_previsao_pagamento: Date;
 declare local_entrega: string;
 declare local_cobranca: string;
 declare contato: string;
 declare valor_subtotal: number;
 declare taxa_desconto: number;
 declare valor_desconto: number;
 declare valor_total: number;
 declare forma_pagamento: string;
 declare gera_financeiro: string;
 declare quantidade_parcelas: number;
 declare dia_primeiro_vencimento: Date;
 declare intervalo_entre_parcelas: number;
 declare dia_fixo_parcela: string;
 declare data_recebimento_itens: Date;
 declare hora_recebimento_itens: string;
 declare atualizou_estoque: string;
 declare numero_documento_entrada: string;
}

CompraPedidoCabecalho.init({
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
 id_fornecedor: {
   type: DataTypes.BIGINT,
   references: { model: "fornecedor", key: "id" }
 },
 data_pedido: {
   type: DataTypes.DATE,
 },
 data_previsao_entrega: {
   type: DataTypes.DATE,
 },
 data_previsao_pagamento: {
   type: DataTypes.DATE,
 },
 local_entrega: {
   type: DataTypes.STRING,
 },
 local_cobranca: {
   type: DataTypes.STRING,
 },
 contato: {
   type: DataTypes.STRING,
 },
 valor_subtotal: {
   type: DataTypes.REAL,
 },
 taxa_desconto: {
   type: DataTypes.REAL,
 },
 valor_desconto: {
   type: DataTypes.REAL,
 },
 valor_total: {
   type: DataTypes.REAL,
 },
 forma_pagamento: {
   type: DataTypes.STRING,
 },
 gera_financeiro: {
   type: DataTypes.STRING,
 },
 quantidade_parcelas: {
   type: DataTypes.INTEGER,
 },
 dia_primeiro_vencimento: {
   type: DataTypes.DATE,
 },
 intervalo_entre_parcelas: {
   type: DataTypes.INTEGER,
 },
 dia_fixo_parcela: {
   type: DataTypes.STRING,
 },
 data_recebimento_itens: {
   type: DataTypes.DATE,
 },
 hora_recebimento_itens: {
   type: DataTypes.STRING,
 },
 atualizou_estoque: {
   type: DataTypes.STRING,
 },
 numero_documento_entrada: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "compra_pedido_cabecalho",
  },
);

export default CompraPedidoCabecalho;