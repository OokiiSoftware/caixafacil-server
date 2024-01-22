import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeExportacao extends Model<InferAttributes<NfeExportacao>, InferCreationAttributes<NfeExportacao>> {
 declare id: number;
 declare id_nfe_detalhe: number;
 declare drawback: number;
 declare numero_registro: number;
 declare chave_acesso: string;
 declare quantidade: number;
}

NfeExportacao.init({
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
 drawback: {
   type: DataTypes.INTEGER,
 },
 numero_registro: {
   type: DataTypes.INTEGER,
 },
 chave_acesso: {
   type: DataTypes.STRING,
 },
 quantidade: {
   type: DataTypes.REAL,
 },
},
  {
    sequelize,
    modelName: "nfe_exportacao",
  },
);

export default NfeExportacao;