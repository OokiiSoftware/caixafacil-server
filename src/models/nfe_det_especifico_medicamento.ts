import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeDetEspecificoMedicamento extends Model<InferAttributes<NfeDetEspecificoMedicamento>, InferCreationAttributes<NfeDetEspecificoMedicamento>> {
 declare id: number;
 declare id_nfe_detalhe: number;
 declare codigo_anvisa: string;
 declare motivo_isencao: string;
 declare preco_maximo_consumidor: number;
}

NfeDetEspecificoMedicamento.init({
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
 codigo_anvisa: {
   type: DataTypes.STRING,
 },
 motivo_isencao: {
   type: DataTypes.STRING,
 },
 preco_maximo_consumidor: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "nfe_det_especifico_medicamento",
  },
);

export default NfeDetEspecificoMedicamento;