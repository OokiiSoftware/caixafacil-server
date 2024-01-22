import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeDetalheImpostoIi extends Model<InferAttributes<NfeDetalheImpostoIi>, InferCreationAttributes<NfeDetalheImpostoIi>> {
 declare id: number;
 declare id_nfe_detalhe: number;
 declare valor_bc_ii: number;
 declare valor_despesas_aduaneiras: number;
 declare valor_imposto_importacao: number;
 declare valor_iof: number;
}

NfeDetalheImpostoIi.init({
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
 valor_bc_ii: {
   type: DataTypes.REAL,
 },
 valor_despesas_aduaneiras: {
   type: DataTypes.REAL,
 },
 valor_imposto_importacao: {
   type: DataTypes.REAL,
 },
 valor_iof: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "nfe_detalhe_imposto_ii",
  },
);

export default NfeDetalheImpostoIi;