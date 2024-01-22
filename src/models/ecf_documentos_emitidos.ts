import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class EcfDocumentosEmitidos extends Model<InferAttributes<EcfDocumentosEmitidos>, InferCreationAttributes<EcfDocumentosEmitidos>> {
 declare id: number;
 declare id_pdv_movimento: number;
 declare data_emissao: Date;
 declare hora_emissao: string;
 declare tipo: string;
 declare coo: number;
}

EcfDocumentosEmitidos.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_pdv_movimento: {
   type: DataTypes.INTEGER,
   references: { model: "pdv_movimento", key: "id" }
 },
 data_emissao: {
   type: DataTypes.DATE,
 },
 hora_emissao: {
   type: DataTypes.STRING,
 },
 tipo: {
   type: DataTypes.STRING,
 },
 coo: {
   type: DataTypes.INTEGER,
 },
},
  {
    sequelize,
    modelName: "ecf_documentos_emitidos",
  },
);

export default EcfDocumentosEmitidos;