import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeDetEspecificoArmamento extends Model<InferAttributes<NfeDetEspecificoArmamento>, InferCreationAttributes<NfeDetEspecificoArmamento>> {
 declare id: number;
 declare id_nfe_detalhe: number;
 declare tipo_arma: string;
 declare numero_serie_arma: string;
 declare numero_serie_cano: string;
 declare descricao: string;
}

NfeDetEspecificoArmamento.init({
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
 tipo_arma: {
   type: DataTypes.STRING,
 },
 numero_serie_arma: {
   type: DataTypes.STRING,
 },
 numero_serie_cano: {
   type: DataTypes.STRING,
 },
 descricao: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "nfe_det_especifico_armamento",
  },
);

export default NfeDetEspecificoArmamento;