import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeDetalheImpostoPis extends Model<InferAttributes<NfeDetalheImpostoPis>, InferCreationAttributes<NfeDetalheImpostoPis>> {
 declare id: number;
 declare id_nfe_detalhe: number;
 declare cst_pis: string;
 declare valor_base_calculo_pis: number;
 declare aliquota_pis_percentual: number;
 declare valor_pis: number;
 declare quantidade_vendida: number;
 declare aliquota_pis_reais: number;
}

NfeDetalheImpostoPis.init({
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
 cst_pis: {
   type: DataTypes.STRING,
 },
 valor_base_calculo_pis: {
   type: DataTypes.REAL,
 },
 aliquota_pis_percentual: {
   type: DataTypes.REAL,
 },
 valor_pis: {
   type: DataTypes.REAL,
 },
 quantidade_vendida: {
   type: DataTypes.REAL,
 },
 aliquota_pis_reais: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "nfe_detalhe_imposto_pis",
  },
);

export default NfeDetalheImpostoPis;