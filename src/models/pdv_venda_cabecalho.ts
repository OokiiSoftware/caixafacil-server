import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class PdvVendaCabecalho extends Model<InferAttributes<PdvVendaCabecalho>, InferCreationAttributes<PdvVendaCabecalho>> {
 declare id: number;
 declare id_cliente: number;
 declare id_colaborador: number;
 declare id_pdv_movimento: number;
//  declare id_ecf_dav: number; // TODO
//  declare id_ecf_pre_venda_cabecalho: number;
 declare serie_ecf: string;
 declare cfop: number;
 declare coo: number;
 declare ccf: number;
 declare data_venda: Date;
 declare hora_venda: string;
 declare valor_venda: number;
 declare taxa_desconto: number;
 declare valor_desconto: number;
 declare taxa_acrescimo: number;
 declare valor_acrescimo: number;
 declare valor_final: number;
 declare valor_recebido: number;
 declare valor_troco: number;
 declare valor_cancelado: number;
 declare valor_total_produtos: number;
 declare valor_total_documento: number;
 declare valor_base_icms: number;
 declare valor_icms: number;
 declare valor_icms_outras: number;
 declare valor_issqn: number;
 declare valor_pis: number;
 declare valor_cofins: number;
 declare valor_acrescimo_itens: number;
 declare valor_desconto_itens: number;
 declare status_venda: string;
 declare nome_cliente: string;
 declare cpf_cnpj_cliente: string;
 declare cupom_cancelado: string;
 declare hash_registro: string;
 declare tipo_operacao: string;
}

PdvVendaCabecalho.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_cliente: {
   type: DataTypes.BIGINT,
   references: { model: "cliente", key: "id" }
 },
 id_colaborador: {
   type: DataTypes.BIGINT,
   references: { model: "colaborador", key: "id" }
 },
 id_pdv_movimento: {
   type: DataTypes.BIGINT,
   references: { model: "pdv_movimento", key: "id" }
 },
 /* id_ecf_dav: {
   type: DataTypes.BIGINT,
   references: { model: "ecf_dav", key: "id" }
 }, */
 /* id_ecf_pre_venda_cabecalho: {
   type: DataTypes.BIGINT,
   references: { model: "ecf_pre_venda_cabecalho", key: "id" }
 }, */
 serie_ecf: {
   type: DataTypes.STRING,
 },
 cfop: {
   type: DataTypes.INTEGER,
 },
 coo: {
   type: DataTypes.INTEGER,
 },
 ccf: {
   type: DataTypes.INTEGER,
 },
 data_venda: {
   type: DataTypes.DATE,
 },
 hora_venda: {
   type: DataTypes.STRING,
 },
 valor_venda: {
   type: DataTypes.REAL,
 },
 taxa_desconto: {
   type: DataTypes.REAL,
 },
 valor_desconto: {
   type: DataTypes.REAL,
 },
 taxa_acrescimo: {
   type: DataTypes.REAL,
 },
 valor_acrescimo: {
   type: DataTypes.REAL,
 },
 valor_final: {
   type: DataTypes.REAL,
 },
 valor_recebido: {
   type: DataTypes.REAL,
 },
 valor_troco: {
   type: DataTypes.REAL,
 },
 valor_cancelado: {
   type: DataTypes.REAL,
 },
 valor_total_produtos: {
   type: DataTypes.REAL,
 },
 valor_total_documento: {
   type: DataTypes.REAL,
 },
 valor_base_icms: {
   type: DataTypes.REAL,
 },
 valor_icms: {
   type: DataTypes.REAL,
 },
 valor_icms_outras: {
   type: DataTypes.REAL,
 },
 valor_issqn: {
   type: DataTypes.REAL,
 },
 valor_pis: {
   type: DataTypes.REAL,
 },
 valor_cofins: {
   type: DataTypes.REAL,
 },
 valor_acrescimo_itens: {
   type: DataTypes.REAL,
 },
 valor_desconto_itens: {
   type: DataTypes.REAL,
 },
 status_venda: {
   type: DataTypes.STRING,
 },
 nome_cliente: {
   type: DataTypes.STRING,
 },
 cpf_cnpj_cliente: {
   type: DataTypes.STRING,
 },
 cupom_cancelado: {
   type: DataTypes.STRING,
 },
 hash_registro: {
   type: DataTypes.STRING,
 },
 tipo_operacao: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "pdv_venda_cabecalho",
  },
);

export default PdvVendaCabecalho;