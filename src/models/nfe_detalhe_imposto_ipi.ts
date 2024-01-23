import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeDetalheImpostoIpi extends Model<InferAttributes<NfeDetalheImpostoIpi>, InferCreationAttributes<NfeDetalheImpostoIpi>> {
 declare id: number;
 declare id_nfe_detalhe: number;
 declare cnpj_produtor: string;
 declare codigo_selo_ipi: string;
 declare quantidade_selo_ipi: number;
 declare enquadramento_legal_ipi: string;
 declare cst_ipi: string;
 declare valor_base_calculo_ipi: number;
 declare quantidade_unidade_tributavel: number;
 declare valor_unidade_tributavel: number;
 declare aliquota_ipi: number;
 declare valor_ipi: number;
}

NfeDetalheImpostoIpi.init({
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
 cnpj_produtor: {
   type: DataTypes.STRING,
 },
 codigo_selo_ipi: {
   type: DataTypes.STRING,
 },
 quantidade_selo_ipi: {
   type: DataTypes.INTEGER,
 },
 enquadramento_legal_ipi: {
   type: DataTypes.STRING,
 },
 cst_ipi: {
   type: DataTypes.STRING,
 },
 valor_base_calculo_ipi: {
   type: DataTypes.REAL,
 },
 quantidade_unidade_tributavel: {
   type: DataTypes.REAL,
 },
 valor_unidade_tributavel: {
   type: DataTypes.REAL,
 },
 aliquota_ipi: {
   type: DataTypes.REAL,
 },
 valor_ipi: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "nfe_detalhe_imposto_ipi",
  },
);

export default NfeDetalheImpostoIpi;