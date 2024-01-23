import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeInformacaoPagamento extends Model<InferAttributes<NfeInformacaoPagamento>, InferCreationAttributes<NfeInformacaoPagamento>> {
 declare id: number;
 declare id_nfe_cabecalho: number;
 declare indicador_pagamento: string;
 declare meio_pagamento: string;
 declare valor: number;
 declare tipo_integracao: string;
 declare cnpj_operadora_cartao: string;
 declare bandeira: string;
 declare numero_autorizacao: string;
 declare troco: number;
}

NfeInformacaoPagamento.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_nfe_cabecalho: {
   type: DataTypes.BIGINT,
   references: { model: "nfe_cabecalho", key: "id" }
 },
 indicador_pagamento: {
   type: DataTypes.STRING,
 },
 meio_pagamento: {
   type: DataTypes.STRING,
 },
 valor: {
   type: DataTypes.REAL,
 },
 tipo_integracao: {
   type: DataTypes.STRING,
 },
 cnpj_operadora_cartao: {
   type: DataTypes.STRING,
 },
 bandeira: {
   type: DataTypes.STRING,
 },
 numero_autorizacao: {
   type: DataTypes.STRING,
 },
 troco: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "nfe_informacao_pagamento",
  },
);

export default NfeInformacaoPagamento;