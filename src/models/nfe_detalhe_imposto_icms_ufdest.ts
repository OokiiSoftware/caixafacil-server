import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeDetalheImpostoIcmsUfdest extends Model<InferAttributes<NfeDetalheImpostoIcmsUfdest>, InferCreationAttributes<NfeDetalheImpostoIcmsUfdest>> {
 declare id: number;
 declare id_nfe_detalhe: number;
 declare valor_bc_icms_uf_destino: number;
 declare valor_bc_fcp_uf_destino: number;
 declare percentual_fcp_uf_destino: number;
 declare aliquota_interna_uf_destino: number;
 declare aliquota_interesdatual_uf_envolvidas: number;
 declare percentual_provisorio_partilha_icms: number;
 declare valor_icms_fcp_uf_destino: number;
 declare valor_interestadual_uf_destino: number;
 declare valor_interestadual_uf_remetente: number;
}

NfeDetalheImpostoIcmsUfdest.init({
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
 valor_bc_icms_uf_destino: {
   type: DataTypes.REAL,
 },
 valor_bc_fcp_uf_destino: {
   type: DataTypes.REAL,
 },
 percentual_fcp_uf_destino: {
   type: DataTypes.REAL,
 },
 aliquota_interna_uf_destino: {
   type: DataTypes.REAL,
 },
 aliquota_interesdatual_uf_envolvidas: {
   type: DataTypes.REAL,
 },
 percentual_provisorio_partilha_icms: {
   type: DataTypes.REAL,
 },
 valor_icms_fcp_uf_destino: {
   type: DataTypes.REAL,
 },
 valor_interestadual_uf_destino: {
   type: DataTypes.REAL,
 },
 valor_interestadual_uf_remetente: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "nfe_detalhe_imposto_icms_ufdest",
  },
);

export default NfeDetalheImpostoIcmsUfdest;