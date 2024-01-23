import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class PdvFechamento extends Model<InferAttributes<PdvFechamento>, InferCreationAttributes<PdvFechamento>> {
 declare id: number;
 declare id_pdv_movimento: number;
 declare id_pdv_tipo_pagamento: number;
 declare valor: number;
}

PdvFechamento.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_pdv_movimento: {
   type: DataTypes.BIGINT,
   references: { model: "pdv_movimento", key: "id" }
 },
 id_pdv_tipo_pagamento: {
   type: DataTypes.BIGINT,
   references: { model: "pdv_tipo_pagamento", key: "id" }
 },
 valor: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "pdv_fechamento",
  },
);

export default PdvFechamento;