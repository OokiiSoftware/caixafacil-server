import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeDetEspecificoVeiculo extends Model<InferAttributes<NfeDetEspecificoVeiculo>, InferCreationAttributes<NfeDetEspecificoVeiculo>> {
 declare id: number;
 declare id_nfe_detalhe: number;
 declare tipo_operacao: string;
 declare chassi: string;
 declare cor: string;
 declare descricao_cor: string;
 declare potencia_motor: string;
 declare cilindradas: string;
 declare peso_liquido: string;
 declare peso_bruto: string;
 declare numero_serie: string;
 declare tipo_combustivel: string;
 declare numero_motor: string;
 declare capacidade_maxima_tracao: string;
 declare distancia_eixos: string;
 declare ano_modelo: string;
 declare ano_fabricacao: string;
 declare tipo_pintura: string;
 declare tipo_veiculo: string;
 declare especie_veiculo: string;
 declare condicao_vin: string;
 declare condicao_veiculo: string;
 declare codigo_marca_modelo: string;
 declare codigo_cor_denatran: string;
 declare lotacao_maxima: number;
 declare restricao: string;
}

NfeDetEspecificoVeiculo.init({
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
 tipo_operacao: {
   type: DataTypes.STRING,
 },
 chassi: {
   type: DataTypes.STRING,
 },
 cor: {
   type: DataTypes.STRING,
 },
 descricao_cor: {
   type: DataTypes.STRING,
 },
 potencia_motor: {
   type: DataTypes.STRING,
 },
 cilindradas: {
   type: DataTypes.STRING,
 },
 peso_liquido: {
   type: DataTypes.STRING,
 },
 peso_bruto: {
   type: DataTypes.STRING,
 },
 numero_serie: {
   type: DataTypes.STRING,
 },
 tipo_combustivel: {
   type: DataTypes.STRING,
 },
 numero_motor: {
   type: DataTypes.STRING,
 },
 capacidade_maxima_tracao: {
   type: DataTypes.STRING,
 },
 distancia_eixos: {
   type: DataTypes.STRING,
 },
 ano_modelo: {
   type: DataTypes.STRING,
 },
 ano_fabricacao: {
   type: DataTypes.STRING,
 },
 tipo_pintura: {
   type: DataTypes.STRING,
 },
 tipo_veiculo: {
   type: DataTypes.STRING,
 },
 especie_veiculo: {
   type: DataTypes.STRING,
 },
 condicao_vin: {
   type: DataTypes.STRING,
 },
 condicao_veiculo: {
   type: DataTypes.STRING,
 },
 codigo_marca_modelo: {
   type: DataTypes.STRING,
 },
 codigo_cor_denatran: {
   type: DataTypes.STRING,
 },
 lotacao_maxima: {
   type: DataTypes.INTEGER,
 },
 restricao: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "nfe_det_especifico_veiculo",
  },
);

export default NfeDetEspecificoVeiculo;