import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class ClienteFiado extends Model<InferAttributes<ClienteFiado>, InferCreationAttributes<ClienteFiado>> {
 declare id: number;
 declare id_cliente: number;
 declare id_pdv_venda_cabecalho: number;
 declare valor_pendente: number;
 declare data_pagamento: Date;
 declare data_lancamento: Date;
}

ClienteFiado.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_cliente: {
   type: DataTypes.BIGINT,
   references: { model: "cliente", key: "id" }
 },
 id_pdv_venda_cabecalho: {
   type: DataTypes.BIGINT,
   references: { model: "pdv_venda_cabecalho", key: "id" }
 },
 valor_pendente: {
   type: DataTypes.REAL,
 },
 data_pagamento: {
   type: DataTypes.DATE,
 },
 data_lancamento: {
   type: DataTypes.DATE,
 },
},
  {
    sequelize,
    modelName: "cliente_fiado",
  },
);

export default ClienteFiado;