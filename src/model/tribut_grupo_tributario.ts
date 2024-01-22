import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class TributGrupoTributario extends Model<InferAttributes<TributGrupoTributario>, InferCreationAttributes<TributGrupoTributario>> {
 declare id: number;
 declare descricao: string;
 declare origem_mercadoria: string;
 declare observacao: string;
}

TributGrupoTributario.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 descricao: {
   type: DataTypes.STRING,
 },
 origem_mercadoria: {
   type: DataTypes.STRING,
 },
 observacao: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "tribut_grupo_tributario",
  },
);

export default TributGrupoTributario;