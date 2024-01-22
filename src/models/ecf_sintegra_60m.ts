import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class EcfSintegra60m extends Model<InferAttributes<EcfSintegra60m>, InferCreationAttributes<EcfSintegra60m>> {
 declare id: number;
 declare data_emissao: Date;
 declare numero_serie_ecf: string;
 declare numero_equipamento: number;
 declare modelo_documento_fiscal: string;
 declare coo_inicial: number;
 declare coo_final: number;
 declare crz: number;
 declare cro: number;
 declare valor_venda_bruta: number;
 declare valor_grande_total: number;
}

EcfSintegra60m.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 data_emissao: {
   type: DataTypes.DATE,
 },
 numero_serie_ecf: {
   type: DataTypes.STRING,
 },
 numero_equipamento: {
   type: DataTypes.INTEGER,
 },
 modelo_documento_fiscal: {
   type: DataTypes.STRING,
 },
 coo_inicial: {
   type: DataTypes.INTEGER,
 },
 coo_final: {
   type: DataTypes.INTEGER,
 },
 crz: {
   type: DataTypes.INTEGER,
 },
 cro: {
   type: DataTypes.INTEGER,
 },
 valor_venda_bruta: {
   type: DataTypes.REAL,
 },
 valor_grande_total: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "ecf_sintegra_60m",
  },
);

export default EcfSintegra60m;