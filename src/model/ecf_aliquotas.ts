import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class EcfAliquotas extends Model<InferAttributes<EcfAliquotas>, InferCreationAttributes<EcfAliquotas>> {
 declare id: number;
 declare totalizador_parcial: string;
 declare ecf_icms_st: string;
 declare paf_p_st: string;
}

EcfAliquotas.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 totalizador_parcial: {
   type: DataTypes.STRING,
 },
 ecf_icms_st: {
   type: DataTypes.STRING,
 },
 paf_p_st: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "ecf_aliquotas",
  },
);

export default EcfAliquotas;