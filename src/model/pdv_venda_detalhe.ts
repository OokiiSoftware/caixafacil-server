import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class PdvVendaDetalhe extends Model<InferAttributes<PdvVendaDetalhe>, InferCreationAttributes<PdvVendaDetalhe>> {
 declare id: number;
 declare id_produto: number;
 declare id_pdv_venda_cabecalho: number;
 declare cfop: number;
 declare gtin: string;
 declare ccf: number;
 declare coo: number;
 declare serie_ecf: string;
 declare item: number;
 declare quantidade: number;
 declare valor_unitario: number;
 declare valor_total: number;
 declare valor_total_item: number;
 declare valor_base_icms: number;
 declare taxa_icms: number;
 declare valor_icms: number;
 declare taxa_desconto: number;
 declare valor_desconto: number;
 declare taxa_issqn: number;
 declare valor_issqn: number;
 declare taxa_pis: number;
 declare valor_pis: number;
 declare taxa_cofins: number;
 declare valor_cofins: number;
 declare taxa_acrescimo: number;
 declare valor_acrescimo: number;
 declare totalizador_parcial: string;
 declare cst: string;
 declare cancelado: string;
 declare movimenta_estoque: string;
 declare ecf_icms_st: string;
 declare valor_imposto_federal: number;
 declare valor_imposto_estadual: number;
 declare valor_imposto_municipal: number;
 declare hash_registro: string;
}

PdvVendaDetalhe.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_produto: {
   type: DataTypes.INTEGER,
   references: { model: "produto", key: "id" }
 },
 id_pdv_venda_cabecalho: {
   type: DataTypes.INTEGER,
   references: { model: "pdv_venda_cabecalho", key: "id" }
 },
 cfop: {
   type: DataTypes.INTEGER,
 },
 gtin: {
   type: DataTypes.STRING,
 },
 ccf: {
   type: DataTypes.INTEGER,
 },
 coo: {
   type: DataTypes.INTEGER,
 },
 serie_ecf: {
   type: DataTypes.STRING,
 },
 item: {
   type: DataTypes.INTEGER,
 },
 quantidade: {
   type: DataTypes.REAL,
 },
 valor_unitario: {
   type: DataTypes.REAL,
 },
 valor_total: {
   type: DataTypes.REAL,
 },
 valor_total_item: {
   type: DataTypes.REAL,
 },
 valor_base_icms: {
   type: DataTypes.REAL,
 },
 taxa_icms: {
   type: DataTypes.REAL,
 },
 valor_icms: {
   type: DataTypes.REAL,
 },
 taxa_desconto: {
   type: DataTypes.REAL,
 },
 valor_desconto: {
   type: DataTypes.REAL,
 },
 taxa_issqn: {
   type: DataTypes.REAL,
 },
 valor_issqn: {
   type: DataTypes.REAL,
 },
 taxa_pis: {
   type: DataTypes.REAL,
 },
 valor_pis: {
   type: DataTypes.REAL,
 },
 taxa_cofins: {
   type: DataTypes.REAL,
 },
 valor_cofins: {
   type: DataTypes.REAL,
 },
 taxa_acrescimo: {
   type: DataTypes.REAL,
 },
 valor_acrescimo: {
   type: DataTypes.REAL,
 },
 totalizador_parcial: {
   type: DataTypes.STRING,
 },
 cst: {
   type: DataTypes.STRING,
 },
 cancelado: {
   type: DataTypes.STRING,
 },
 movimenta_estoque: {
   type: DataTypes.STRING,
 },
 ecf_icms_st: {
   type: DataTypes.STRING,
 },
 valor_imposto_federal: {
   type: DataTypes.REAL,
 },
 valor_imposto_estadual: {
   type: DataTypes.REAL,
 },
 valor_imposto_municipal: {
   type: DataTypes.REAL,
 },
 hash_registro: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "pdv_venda_detalhe",
  },
);

export default PdvVendaDetalhe;