import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class CardapioPerguntaPadrao extends Model<InferAttributes<CardapioPerguntaPadrao>, InferCreationAttributes<CardapioPerguntaPadrao>> {
 declare id: number;
 declare id_cardapio: number;
 declare pergunta: string;
}

CardapioPerguntaPadrao.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_cardapio: {
   type: DataTypes.INTEGER,
   references: { model: "cardapio", key: "id" }
 },
 pergunta: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "cardapio_pergunta_padrao",
  },
);

export default CardapioPerguntaPadrao;