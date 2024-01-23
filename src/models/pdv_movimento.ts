import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class PdvMovimento extends Model<InferAttributes<PdvMovimento>, InferCreationAttributes<PdvMovimento>> {
 declare id: number;
 declare id_ecf_impressora: number;
 declare id_pdv_operador: number;
 declare id_pdv_caixa: number;
//  declare id_gerente_supervisor: number; // TODO 
 declare data_abertura: Date;
 declare hora_abertura: string;
 declare data_fechamento: Date;
 declare hora_fechamento: string;
 declare total_suprimento: number;
 declare total_sangria: number;
 declare total_nao_fiscal: number;
 declare total_venda: number;
 declare total_desconto: number;
 declare total_acrescimo: number;
 declare total_final: number;
 declare total_recebido: number;
 declare total_troco: number;
 declare total_cancelado: number;
 declare status_movimento: string;
}

PdvMovimento.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_ecf_impressora: {
   type: DataTypes.BIGINT,
   references: { model: "ecf_impressora", key: "id" }
 },
 id_pdv_operador: {
   type: DataTypes.BIGINT,
   references: { model: "pdv_operador", key: "id" }
 },
 id_pdv_caixa: {
   type: DataTypes.BIGINT,
   references: { model: "pdv_caixa", key: "id" }
 },
 /* id_gerente_supervisor: {
   type: DataTypes.BIGINT,
   references: { model: "gerente_supervisor", key: "id" }
 }, */
 data_abertura: {
   type: DataTypes.DATE,
 },
 hora_abertura: {
   type: DataTypes.STRING,
 },
 data_fechamento: {
   type: DataTypes.DATE,
 },
 hora_fechamento: {
   type: DataTypes.STRING,
 },
 total_suprimento: {
   type: DataTypes.REAL,
 },
 total_sangria: {
   type: DataTypes.REAL,
 },
 total_nao_fiscal: {
   type: DataTypes.REAL,
 },
 total_venda: {
   type: DataTypes.REAL,
 },
 total_desconto: {
   type: DataTypes.REAL,
 },
 total_acrescimo: {
   type: DataTypes.REAL,
 },
 total_final: {
   type: DataTypes.REAL,
 },
 total_recebido: {
   type: DataTypes.REAL,
 },
 total_troco: {
   type: DataTypes.REAL,
 },
 total_cancelado: {
   type: DataTypes.REAL,
 },
 status_movimento: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "pdv_movimento",
  },
);

export default PdvMovimento;