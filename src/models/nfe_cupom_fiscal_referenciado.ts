import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeCupomFiscalReferenciado extends Model<InferAttributes<NfeCupomFiscalReferenciado>, InferCreationAttributes<NfeCupomFiscalReferenciado>> {
 declare id: number;
 declare id_nfe_cabecalho: number;
 declare modelo_documento_fiscal: string;
 declare numero_ordem_ecf: number;
 declare coo: number;
 declare data_emissao_cupom: Date;
 declare numero_caixa: number;
 declare numero_serie_ecf: string;
}

NfeCupomFiscalReferenciado.init({
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
 modelo_documento_fiscal: {
   type: DataTypes.STRING,
 },
 numero_ordem_ecf: {
   type: DataTypes.INTEGER,
 },
 coo: {
   type: DataTypes.INTEGER,
 },
 data_emissao_cupom: {
   type: DataTypes.DATE,
 },
 numero_caixa: {
   type: DataTypes.INTEGER,
 },
 numero_serie_ecf: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "nfe_cupom_fiscal_referenciado",
  },
);

export default NfeCupomFiscalReferenciado;