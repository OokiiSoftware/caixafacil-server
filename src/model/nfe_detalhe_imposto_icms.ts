import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeDetalheImpostoIcms extends Model<InferAttributes<NfeDetalheImpostoIcms>, InferCreationAttributes<NfeDetalheImpostoIcms>> {
 declare id: number;
 declare id_nfe_detalhe: number;
 declare origem_mercadoria: string;
 declare cst_icms: string;
 declare csosn: string;
 declare modalidade_bc_icms: string;
 declare percentual_reducao_bc_icms: number;
 declare valor_bc_icms: number;
 declare aliquota_icms: number;
 declare valor_icms_operacao: number;
 declare percentual_diferimento: number;
 declare valor_icms_diferido: number;
 declare valor_icms: number;
 declare base_calculo_fcp: number;
 declare percentual_fcp: number;
 declare valor_fcp: number;
 declare modalidade_bc_icms_st: string;
 declare percentual_mva_icms_st: number;
 declare percentual_reducao_bc_icms_st: number;
 declare valor_base_calculo_icms_st: number;
 declare aliquota_icms_st: number;
 declare valor_icms_st: number;
 declare base_calculo_fcp_st: number;
 declare percentual_fcp_st: number;
 declare valor_fcp_st: number;
 declare uf_st: string;
 declare percentual_bc_operacao_propria: number;
 declare valor_bc_icms_st_retido: number;
 declare aliquota_suportada_consumidor: number;
 declare valor_icms_substituto: number;
 declare valor_icms_st_retido: number;
 declare base_calculo_fcp_st_retido: number;
 declare percentual_fcp_st_retido: number;
 declare valor_fcp_st_retido: number;
 declare motivo_desoneracao_icms: string;
 declare valor_icms_desonerado: number;
 declare aliquota_credito_icms_sn: number;
 declare valor_credito_icms_sn: number;
 declare valor_bc_icms_st_destino: number;
 declare valor_icms_st_destino: number;
 declare percentual_reducao_bc_efetivo: number;
 declare valor_bc_efetivo: number;
 declare aliquota_icms_efetivo: number;
 declare valor_icms_efetivo: number;
}

NfeDetalheImpostoIcms.init({
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
 origem_mercadoria: {
   type: DataTypes.STRING,
 },
 cst_icms: {
   type: DataTypes.STRING,
 },
 csosn: {
   type: DataTypes.STRING,
 },
 modalidade_bc_icms: {
   type: DataTypes.STRING,
 },
 percentual_reducao_bc_icms: {
   type: DataTypes.REAL,
 },
 valor_bc_icms: {
   type: DataTypes.REAL,
 },
 aliquota_icms: {
   type: DataTypes.REAL,
 },
 valor_icms_operacao: {
   type: DataTypes.REAL,
 },
 percentual_diferimento: {
   type: DataTypes.REAL,
 },
 valor_icms_diferido: {
   type: DataTypes.REAL,
 },
 valor_icms: {
   type: DataTypes.REAL,
 },
 base_calculo_fcp: {
   type: DataTypes.REAL,
 },
 percentual_fcp: {
   type: DataTypes.REAL,
 },
 valor_fcp: {
   type: DataTypes.REAL,
 },
 modalidade_bc_icms_st: {
   type: DataTypes.STRING,
 },
 percentual_mva_icms_st: {
   type: DataTypes.REAL,
 },
 percentual_reducao_bc_icms_st: {
   type: DataTypes.REAL,
 },
 valor_base_calculo_icms_st: {
   type: DataTypes.REAL,
 },
 aliquota_icms_st: {
   type: DataTypes.REAL,
 },
 valor_icms_st: {
   type: DataTypes.REAL,
 },
 base_calculo_fcp_st: {
   type: DataTypes.REAL,
 },
 percentual_fcp_st: {
   type: DataTypes.REAL,
 },
 valor_fcp_st: {
   type: DataTypes.REAL,
 },
 uf_st: {
   type: DataTypes.STRING,
 },
 percentual_bc_operacao_propria: {
   type: DataTypes.REAL,
 },
 valor_bc_icms_st_retido: {
   type: DataTypes.REAL,
 },
 aliquota_suportada_consumidor: {
   type: DataTypes.REAL,
 },
 valor_icms_substituto: {
   type: DataTypes.REAL,
 },
 valor_icms_st_retido: {
   type: DataTypes.REAL,
 },
 base_calculo_fcp_st_retido: {
   type: DataTypes.REAL,
 },
 percentual_fcp_st_retido: {
   type: DataTypes.REAL,
 },
 valor_fcp_st_retido: {
   type: DataTypes.REAL,
 },
 motivo_desoneracao_icms: {
   type: DataTypes.STRING,
 },
 valor_icms_desonerado: {
   type: DataTypes.REAL,
 },
 aliquota_credito_icms_sn: {
   type: DataTypes.REAL,
 },
 valor_credito_icms_sn: {
   type: DataTypes.REAL,
 },
 valor_bc_icms_st_destino: {
   type: DataTypes.REAL,
 },
 valor_icms_st_destino: {
   type: DataTypes.REAL,
 },
 percentual_reducao_bc_efetivo: {
   type: DataTypes.REAL,
 },
 valor_bc_efetivo: {
   type: DataTypes.REAL,
 },
 aliquota_icms_efetivo: {
   type: DataTypes.REAL,
 },
 valor_icms_efetivo: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "nfe_detalhe_imposto_icms",
  },
);

export default NfeDetalheImpostoIcms;