import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class EcfR07 extends Model<InferAttributes<EcfR07>, InferCreationAttributes<EcfR07>> {
 declare id: number;
 declare id_ecf_r06: number;
 declare ccf: number;
 declare meio_pagamento: string;
 declare valor_pagamento: number;
 declare estorno: string;
 declare valor_estorno: number;
 declare hash_registro: string;
}

EcfR07.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_ecf_r06: {
   type: DataTypes.BIGINT,
   references: { model: "ecf_r06", key: "id" }
 },
 ccf: {
   type: DataTypes.INTEGER,
 },
 meio_pagamento: {
   type: DataTypes.STRING,
 },
 valor_pagamento: {
   type: DataTypes.REAL,
 },
 estorno: {
   type: DataTypes.STRING,
 },
 valor_estorno: {
   type: DataTypes.REAL,
 },
 hash_registro: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "ecf_r07",
  },
);

export default EcfR07;