import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeItemRastreado extends Model<InferAttributes<NfeItemRastreado>, InferCreationAttributes<NfeItemRastreado>> {
 declare id: number;
 declare id_nfe_detalhe: number;
 declare numero_lote: string;
 declare quantidade_itens: number;
 declare data_fabricacao: Date;
 declare data_validade: Date;
 declare codigo_agregacao: string;
}

NfeItemRastreado.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_nfe_detalhe: {
   type: DataTypes.INTEGER,
   references: { model: "nfe_detalhe", key: "id" }
 },
 numero_lote: {
   type: DataTypes.STRING,
 },
 quantidade_itens: {
   type: DataTypes.REAL,
 },
 data_fabricacao: {
   type: DataTypes.DATE,
 },
 data_validade: {
   type: DataTypes.DATE,
 },
 codigo_agregacao: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "nfe_item_rastreado",
  },
);

export default NfeItemRastreado;