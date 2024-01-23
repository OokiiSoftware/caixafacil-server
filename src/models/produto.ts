import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class Produto extends Model<InferAttributes<Produto>, InferCreationAttributes<Produto>> {
 declare id: number;
 declare id_produto_unidade: number;
 declare id_tribut_grupo_tributario: number;
 declare id_produto_tipo: number;
 declare id_produto_subgrupo: number;
 declare gtin: string;
 declare codigo_interno: string;
 declare nome: string;
 declare descricao: string;
 declare descricao_pdv: string;
 declare valor_compra: number;
 declare valor_venda: number;
 declare quantidade_estoque: number;
 declare estoque_minimo: number;
 declare estoque_maximo: number;
 declare codigo_ncm: string;
 declare iat: string;
 declare ippt: string;
 declare tipo_item_sped: string;
 declare taxa_ipi: number;
 declare taxa_issqn: number;
 declare taxa_pis: number;
 declare taxa_cofins: number;
 declare taxa_icms: number;
 declare cst: string;
 declare csosn: string;
 declare totalizador_parcial: string;
 declare ecf_icms_st: string;
 declare codigo_balanca: number;
 declare paf_p_st: string;
 declare hash_registro: string;
 declare valor_custo: number;
 declare situacao: string;
 declare codigo_cest: string;
}

Produto.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_produto_unidade: {
   type: DataTypes.BIGINT,
   references: { model: "produto_unidade", key: "id" }
 },
 id_tribut_grupo_tributario: {
   type: DataTypes.BIGINT,
   references: { model: "tribut_grupo_tributario", key: "id" }
 },
 id_produto_tipo: {
   type: DataTypes.BIGINT,
   references: { model: "produto_tipo", key: "id" }
 },
 id_produto_subgrupo: {
   type: DataTypes.BIGINT,
   references: { model: "produto_subgrupo", key: "id" }
 },
 gtin: {
   type: DataTypes.STRING,
 },
 codigo_interno: {
   type: DataTypes.STRING,
 },
 nome: {
   type: DataTypes.STRING,
 },
 descricao: {
   type: DataTypes.STRING,
 },
 descricao_pdv: {
   type: DataTypes.STRING,
 },
 valor_compra: {
   type: DataTypes.REAL,
 },
 valor_venda: {
   type: DataTypes.REAL,
 },
 quantidade_estoque: {
   type: DataTypes.REAL,
 },
 estoque_minimo: {
   type: DataTypes.REAL,
 },
 estoque_maximo: {
   type: DataTypes.REAL,
 },
 codigo_ncm: {
   type: DataTypes.STRING,
 },
 iat: {
   type: DataTypes.STRING,
 },
 ippt: {
   type: DataTypes.STRING,
 },
 tipo_item_sped: {
   type: DataTypes.STRING,
 },
 taxa_ipi: {
   type: DataTypes.REAL,
 },
 taxa_issqn: {
   type: DataTypes.REAL,
 },
 taxa_pis: {
   type: DataTypes.REAL,
 },
 taxa_cofins: {
   type: DataTypes.REAL,
 },
 taxa_icms: {
   type: DataTypes.REAL,
 },
 cst: {
   type: DataTypes.STRING,
 },
 csosn: {
   type: DataTypes.STRING,
 },
 totalizador_parcial: {
   type: DataTypes.STRING,
 },
 ecf_icms_st: {
   type: DataTypes.STRING,
 },
 codigo_balanca: {
   type: DataTypes.INTEGER,
 },
 paf_p_st: {
   type: DataTypes.STRING,
 },
 hash_registro: {
   type: DataTypes.STRING,
 },
 valor_custo: {
   type: DataTypes.REAL,
 },
 situacao: {
   type: DataTypes.STRING,
 },
 codigo_cest: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "produto",
  },
);

export default Produto;