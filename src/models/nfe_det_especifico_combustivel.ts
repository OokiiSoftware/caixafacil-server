import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeDetEspecificoCombustivel extends Model<InferAttributes<NfeDetEspecificoCombustivel>, InferCreationAttributes<NfeDetEspecificoCombustivel>> {
 declare id: number;
 declare id_nfe_detalhe: number;
 declare codigo_anp: number;
 declare descricao_anp: string;
 declare percentual_glp: number;
 declare percentual_gas_nacional: number;
 declare percentual_gas_importado: number;
 declare valor_partida: number;
 declare codif: string;
 declare quantidade_temp_ambiente: number;
 declare uf_consumo: string;
 declare cide_base_calculo: number;
 declare cide_aliquota: number;
 declare cide_valor: number;
 declare encerrante_bico: number;
 declare encerrante_bomba: number;
 declare encerrante_tanque: number;
 declare encerrante_valor_inicio: number;
 declare encerrante_valor_fim: number;
}

NfeDetEspecificoCombustivel.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_nfe_detalhe: {
   type: DataTypes.INTEGER,
   references: { model: "nfe_detalhe", key: "id" }
 },
 codigo_anp: {
   type: DataTypes.INTEGER,
 },
 descricao_anp: {
   type: DataTypes.STRING,
 },
 percentual_glp: {
   type: DataTypes.REAL,
 },
 percentual_gas_nacional: {
   type: DataTypes.REAL,
 },
 percentual_gas_importado: {
   type: DataTypes.REAL,
 },
 valor_partida: {
   type: DataTypes.REAL,
 },
 codif: {
   type: DataTypes.STRING,
 },
 quantidade_temp_ambiente: {
   type: DataTypes.REAL,
 },
 uf_consumo: {
   type: DataTypes.STRING,
 },
 cide_base_calculo: {
   type: DataTypes.REAL,
 },
 cide_aliquota: {
   type: DataTypes.REAL,
 },
 cide_valor: {
   type: DataTypes.REAL,
 },
 encerrante_bico: {
   type: DataTypes.INTEGER,
 },
 encerrante_bomba: {
   type: DataTypes.INTEGER,
 },
 encerrante_tanque: {
   type: DataTypes.INTEGER,
 },
 encerrante_valor_inicio: {
   type: DataTypes.REAL,
 },
 encerrante_valor_fim: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "nfe_det_especifico_combustivel",
  },
);

export default NfeDetEspecificoCombustivel;