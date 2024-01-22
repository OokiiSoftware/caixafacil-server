import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class CardapioRespostaPadrao extends Model<InferAttributes<CardapioRespostaPadrao>, InferCreationAttributes<CardapioRespostaPadrao>> {
 declare id: number;
 declare id_cardapio_pergunta_padrao: number;
 declare resposta: string;
}

CardapioRespostaPadrao.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_cardapio_pergunta_padrao: {
   type: DataTypes.INTEGER,
   references: { model: "cardapio_pergunta_padrao", key: "id" }
 },
 resposta: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "cardapio_resposta_padrao",
  },
);

export default CardapioRespostaPadrao;