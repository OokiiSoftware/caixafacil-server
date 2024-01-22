import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class ComandaObservacaoPadrao extends Model<InferAttributes<ComandaObservacaoPadrao>, InferCreationAttributes<ComandaObservacaoPadrao>> {
 declare id: number;
 declare codigo: string;
 declare descricao: string;
}

ComandaObservacaoPadrao.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 codigo: {
   type: DataTypes.STRING,
 },
 descricao: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "comanda_observacao_padrao",
  },
);

export default ComandaObservacaoPadrao;