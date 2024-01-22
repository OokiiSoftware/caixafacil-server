import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeAcessoXml extends Model<InferAttributes<NfeAcessoXml>, InferCreationAttributes<NfeAcessoXml>> {
 declare id: number;
 declare id_nfe_cabecalho: number;
 declare cnpj: string;
 declare cpf: string;
}

NfeAcessoXml.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_nfe_cabecalho: {
   type: DataTypes.INTEGER,
   references: { model: "nfe_cabecalho", key: "id" }
 },
 cnpj: {
   type: DataTypes.STRING,
 },
 cpf: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "nfe_acesso_xml",
  },
);

export default NfeAcessoXml;