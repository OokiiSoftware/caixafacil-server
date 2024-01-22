import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeDetalheImpostoCofins extends Model<InferAttributes<NfeDetalheImpostoCofins>, InferCreationAttributes<NfeDetalheImpostoCofins>> {
 declare id: number;
 declare id_nfe_detalhe: number;
 declare cst_cofins: string;
 declare base_calculo_cofins: number;
 declare aliquota_cofins_percentual: number;
 declare quantidade_vendida: number;
 declare aliquota_cofins_reais: number;
 declare valor_cofins: number;
}

NfeDetalheImpostoCofins.init({
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
 cst_cofins: {
   type: DataTypes.STRING,
 },
 base_calculo_cofins: {
   type: DataTypes.REAL,
 },
 aliquota_cofins_percentual: {
   type: DataTypes.REAL,
 },
 quantidade_vendida: {
   type: DataTypes.REAL,
 },
 aliquota_cofins_reais: {
   type: DataTypes.REAL,
 },
 valor_cofins: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "nfe_detalhe_imposto_cofins",
  },
);

export default NfeDetalheImpostoCofins;