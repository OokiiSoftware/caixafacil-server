import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class Colaborador extends Model<InferAttributes<Colaborador>, InferCreationAttributes<Colaborador>> {
 declare id: number;
 declare nome: string;
 declare cpf: string;
 declare telefone: string;
 declare celular: string;
 declare email: string;
 declare comissao_vista: number;
 declare comissao_prazo: number;
 declare nivel_autorizacao: string;
 declare entregador_veiculo: string;
}

Colaborador.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 nome: {
   type: DataTypes.STRING,
 },
 cpf: {
   type: DataTypes.STRING,
 },
 telefone: {
   type: DataTypes.STRING,
 },
 celular: {
   type: DataTypes.STRING,
 },
 email: {
   type: DataTypes.STRING,
 },
 comissao_vista: {
   type: DataTypes.REAL,
 },
 comissao_prazo: {
   type: DataTypes.REAL,
 },
 nivel_autorizacao: {
   type: DataTypes.STRING,
 },
 entregador_veiculo: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "colaborador",
  },
);

export default Colaborador;