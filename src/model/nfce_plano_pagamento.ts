import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfcePlanoPagamento extends Model<InferAttributes<NfcePlanoPagamento>, InferCreationAttributes<NfcePlanoPagamento>> {
 declare id: number;
 declare data_solicitacao: Date;
 declare data_pagamento: Date;
 declare tipo_plano: string;
 declare valor: number;
 declare status_pagamento: string;
 declare codigo_transacao: string;
 declare metodo_pagamento: string;
 declare codigo_tipo_pagamento: string;
 declare data_plano_expira: Date;
 declare hash_registro: string;
}

NfcePlanoPagamento.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 data_solicitacao: {
   type: DataTypes.DATE,
 },
 data_pagamento: {
   type: DataTypes.DATE,
 },
 tipo_plano: {
   type: DataTypes.STRING,
 },
 valor: {
   type: DataTypes.REAL,
 },
 status_pagamento: {
   type: DataTypes.STRING,
 },
 codigo_transacao: {
   type: DataTypes.STRING,
 },
 metodo_pagamento: {
   type: DataTypes.STRING,
 },
 codigo_tipo_pagamento: {
   type: DataTypes.STRING,
 },
 data_plano_expira: {
   type: DataTypes.DATE,
 },
 hash_registro: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "nfce_plano_pagamento",
  },
);

export default NfcePlanoPagamento;