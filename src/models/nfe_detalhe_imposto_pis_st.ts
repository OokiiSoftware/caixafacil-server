import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeDetalheImpostoPisSt extends Model<InferAttributes<NfeDetalheImpostoPisSt>, InferCreationAttributes<NfeDetalheImpostoPisSt>> {
 declare id: number;
 declare id_nfe_detalhe: number;
 declare valor_base_calculo_pis_st: number;
 declare aliquota_pis_st_percentual: number;
 declare quantidade_vendida_pis_st: number;
 declare aliquota_pis_st_reais: number;
 declare valor_pis_st: number;
}

NfeDetalheImpostoPisSt.init({
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
 valor_base_calculo_pis_st: {
   type: DataTypes.REAL,
 },
 aliquota_pis_st_percentual: {
   type: DataTypes.REAL,
 },
 quantidade_vendida_pis_st: {
   type: DataTypes.REAL,
 },
 aliquota_pis_st_reais: {
   type: DataTypes.REAL,
 },
 valor_pis_st: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "nfe_detalhe_imposto_pis_st",
  },
);

export default NfeDetalheImpostoPisSt;