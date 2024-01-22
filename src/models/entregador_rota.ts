import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class EntregadorRota extends Model<InferAttributes<EntregadorRota>, InferCreationAttributes<EntregadorRota>> {
 declare id: number;
 declare id_colaborador: number;
 declare data_rota: Date;
 declare hora_saida: string;
 declare estimativa_minutos: number;
 declare hora_previsto_retorno: string;
}

EntregadorRota.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_colaborador: {
   type: DataTypes.INTEGER,
   references: { model: "colaborador", key: "id" }
 },
 data_rota: {
   type: DataTypes.DATE,
 },
 hora_saida: {
   type: DataTypes.STRING,
 },
 estimativa_minutos: {
   type: DataTypes.INTEGER,
 },
 hora_previsto_retorno: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "entregador_rota",
  },
);

export default EntregadorRota;