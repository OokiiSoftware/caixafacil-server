import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeDetalhe extends Model<InferAttributes<NfeDetalhe>, InferCreationAttributes<NfeDetalhe>> {
 declare id: number;
 declare id_nfe_cabecalho: number;
 declare numero_item: number;
 declare codigo_produto: string;
 declare gtin: string;
 declare nome_produto: string;
 declare ncm: string;
 declare nve: string;
 declare cest: string;
 declare indicador_escala_relevante: string;
 declare cnpj_fabricante: string;
 declare codigo_beneficio_fiscal: string;
 declare ex_tipi: number;
 declare cfop: number;
 declare unidade_comercial: string;
 declare quantidade_comercial: number;
 declare numero_pedido_compra: string;
 declare item_pedido_compra: number;
 declare numero_fci: string;
 declare numero_recopi: string;
 declare valor_unitario_comercial: number;
 declare valor_bruto_produto: number;
 declare gtin_unidade_tributavel: string;
 declare unidade_tributavel: string;
 declare quantidade_tributavel: number;
 declare valor_unitario_tributavel: number;
 declare valor_frete: number;
 declare valor_seguro: number;
 declare valor_desconto: number;
 declare valor_outras_despesas: number;
 declare entra_total: string;
 declare valor_total_tributos: number;
 declare percentual_devolvido: number;
 declare valor_ipi_devolvido: number;
 declare informacoes_adicionais: string;
 declare valor_subtotal: number;
 declare valor_total: number;
}

NfeDetalhe.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_nfe_cabecalho: {
   type: DataTypes.INTEGER,
   references: { model: "nfe_cabecalho", key: "id" }
 },
 numero_item: {
   type: DataTypes.INTEGER,
 },
 codigo_produto: {
   type: DataTypes.STRING,
 },
 gtin: {
   type: DataTypes.STRING,
 },
 nome_produto: {
   type: DataTypes.STRING,
 },
 ncm: {
   type: DataTypes.STRING,
 },
 nve: {
   type: DataTypes.STRING,
 },
 cest: {
   type: DataTypes.STRING,
 },
 indicador_escala_relevante: {
   type: DataTypes.STRING,
 },
 cnpj_fabricante: {
   type: DataTypes.STRING,
 },
 codigo_beneficio_fiscal: {
   type: DataTypes.STRING,
 },
 ex_tipi: {
   type: DataTypes.INTEGER,
 },
 cfop: {
   type: DataTypes.INTEGER,
 },
 unidade_comercial: {
   type: DataTypes.STRING,
 },
 quantidade_comercial: {
   type: DataTypes.REAL,
 },
 numero_pedido_compra: {
   type: DataTypes.STRING,
 },
 item_pedido_compra: {
   type: DataTypes.INTEGER,
 },
 numero_fci: {
   type: DataTypes.STRING,
 },
 numero_recopi: {
   type: DataTypes.STRING,
 },
 valor_unitario_comercial: {
   type: DataTypes.REAL,
 },
 valor_bruto_produto: {
   type: DataTypes.REAL,
 },
 gtin_unidade_tributavel: {
   type: DataTypes.STRING,
 },
 unidade_tributavel: {
   type: DataTypes.STRING,
 },
 quantidade_tributavel: {
   type: DataTypes.REAL,
 },
 valor_unitario_tributavel: {
   type: DataTypes.REAL,
 },
 valor_frete: {
   type: DataTypes.REAL,
 },
 valor_seguro: {
   type: DataTypes.REAL,
 },
 valor_desconto: {
   type: DataTypes.REAL,
 },
 valor_outras_despesas: {
   type: DataTypes.REAL,
 },
 entra_total: {
   type: DataTypes.STRING,
 },
 valor_total_tributos: {
   type: DataTypes.REAL,
 },
 percentual_devolvido: {
   type: DataTypes.REAL,
 },
 valor_ipi_devolvido: {
   type: DataTypes.REAL,
 },
 informacoes_adicionais: {
   type: DataTypes.STRING,
 },
 valor_subtotal: {
   type: DataTypes.REAL,
 },
 valor_total: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "nfe_detalhe",
  },
);

export default NfeDetalhe;