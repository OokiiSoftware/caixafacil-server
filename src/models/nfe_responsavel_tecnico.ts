import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeResponsavelTecnico extends Model<InferAttributes<NfeResponsavelTecnico>, InferCreationAttributes<NfeResponsavelTecnico>> {
 declare id: number;
 declare id_nfe_cabecalho: number;
 declare cnpj: string;
 declare contato: string;
 declare email: string;
 declare telefone: string;
 declare identificador_csrt: string;
 declare hash_csrt: string;
}

NfeResponsavelTecnico.init({
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
 cnpj: {
   type: DataTypes.STRING,
 },
 contato: {
   type: DataTypes.STRING,
 },
 email: {
   type: DataTypes.STRING,
 },
 telefone: {
   type: DataTypes.STRING,
 },
 identificador_csrt: {
   type: DataTypes.STRING,
 },
 hash_csrt: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "nfe_responsavel_tecnico",
  },
);

export default NfeResponsavelTecnico;