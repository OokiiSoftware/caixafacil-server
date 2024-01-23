import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class EcfR02 extends Model<InferAttributes<EcfR02>, InferCreationAttributes<EcfR02>> {
 declare id: number;
 declare id_pdv_operador: number;
 declare id_ecf_impressora: number;
//  declare id_ecf_caixa: number; // TODO
 declare serie_ecf: string;
 declare crz: number;
 declare coo: number;
 declare cro: number;
 declare data_movimento: Date;
 declare data_emissao: Date;
 declare hora_emissao: string;
 declare venda_bruta: number;
 declare grande_total: number;
 declare hash_registro: string;
}

EcfR02.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_pdv_operador: {
   type: DataTypes.BIGINT,
   references: { model: "pdv_operador", key: "id" }
 },
 id_ecf_impressora: {
   type: DataTypes.BIGINT,
   references: { model: "ecf_impressora", key: "id" }
 },
 /* id_ecf_caixa: {
   type: DataTypes.BIGINT,
   references: { model: "ecf_caixa", key: "id" }
 }, */
 serie_ecf: {
   type: DataTypes.STRING,
 },
 crz: {
   type: DataTypes.INTEGER,
 },
 coo: {
   type: DataTypes.INTEGER,
 },
 cro: {
   type: DataTypes.INTEGER,
 },
 data_movimento: {
   type: DataTypes.DATE,
 },
 data_emissao: {
   type: DataTypes.DATE,
 },
 hora_emissao: {
   type: DataTypes.STRING,
 },
 venda_bruta: {
   type: DataTypes.REAL,
 },
 grande_total: {
   type: DataTypes.REAL,
 },
 hash_registro: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "ecf_r02",
  },
);

export default EcfR02;