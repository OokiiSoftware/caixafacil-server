import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class PdvTipoPagamento extends Model<InferAttributes<PdvTipoPagamento>, InferCreationAttributes<PdvTipoPagamento>> {
 declare id: number;
 declare codigo: string;
 declare descricao: string;
 declare tef: string;
 declare imprime_vinculado: string;
 declare permite_troco: string;
 declare tef_tipo_gp: string;
 declare gera_parcelas: string;
 declare codigo_pagamento_nfce: string;
}

PdvTipoPagamento.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 codigo: {
   type: DataTypes.STRING,
 },
 descricao: {
   type: DataTypes.STRING,
 },
 tef: {
   type: DataTypes.STRING,
 },
 imprime_vinculado: {
   type: DataTypes.STRING,
 },
 permite_troco: {
   type: DataTypes.STRING,
 },
 tef_tipo_gp: {
   type: DataTypes.STRING,
 },
 gera_parcelas: {
   type: DataTypes.STRING,
 },
 codigo_pagamento_nfce: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "pdv_tipo_pagamento",
  },
);

export default PdvTipoPagamento;