import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeDetalheImpostoCofinsSt extends Model<InferAttributes<NfeDetalheImpostoCofinsSt>, InferCreationAttributes<NfeDetalheImpostoCofinsSt>> {
 declare id: number;
 declare id_nfe_detalhe: number;
 declare base_calculo_cofins_st: number;
 declare aliquota_cofins_st_percentual: number;
 declare quantidade_vendida_cofins_st: number;
 declare aliquota_cofins_st_reais: number;
 declare valor_cofins_st: number;
}

NfeDetalheImpostoCofinsSt.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_nfe_detalhe: {
   type: DataTypes.BIGINT,
   references: { model: "nfe_detalhe", key: "id" }
 },
 base_calculo_cofins_st: {
   type: DataTypes.REAL,
 },
 aliquota_cofins_st_percentual: {
   type: DataTypes.REAL,
 },
 quantidade_vendida_cofins_st: {
   type: DataTypes.REAL,
 },
 aliquota_cofins_st_reais: {
   type: DataTypes.REAL,
 },
 valor_cofins_st: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "nfe_detalhe_imposto_cofins_st",
  },
);

export default NfeDetalheImpostoCofinsSt;