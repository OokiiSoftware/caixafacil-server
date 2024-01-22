import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class EcfR01 extends Model<InferAttributes<EcfR01>, InferCreationAttributes<EcfR01>> {
 declare id: number;
 declare serie_ecf: string;
 declare cnpj_empresa: string;
 declare cnpj_sh: string;
 declare inscricao_estadual_sh: string;
 declare inscricao_municipal_sh: string;
 declare denominacao_sh: string;
 declare nome_paf_ecf: string;
 declare versao_paf_ecf: string;
 declare md5_paf_ecf: string;
 declare data_inicial: Date;
 declare data_final: Date;
 declare versao_er: string;
 declare numero_laudo_paf: string;
 declare razao_social_sh: string;
 declare endereco_sh: string;
 declare numero_sh: string;
 declare complemento_sh: string;
 declare bairro_sh: string;
 declare cidade_sh: string;
 declare cep_sh: string;
 declare uf_sh: string;
 declare telefone_sh: string;
 declare contato_sh: string;
 declare principal_executavel: string;
 declare hash_registro: string;
}

EcfR01.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 serie_ecf: {
   type: DataTypes.STRING,
 },
 cnpj_empresa: {
   type: DataTypes.STRING,
 },
 cnpj_sh: {
   type: DataTypes.STRING,
 },
 inscricao_estadual_sh: {
   type: DataTypes.STRING,
 },
 inscricao_municipal_sh: {
   type: DataTypes.STRING,
 },
 denominacao_sh: {
   type: DataTypes.STRING,
 },
 nome_paf_ecf: {
   type: DataTypes.STRING,
 },
 versao_paf_ecf: {
   type: DataTypes.STRING,
 },
 md5_paf_ecf: {
   type: DataTypes.STRING,
 },
 data_inicial: {
   type: DataTypes.DATE,
 },
 data_final: {
   type: DataTypes.DATE,
 },
 versao_er: {
   type: DataTypes.STRING,
 },
 numero_laudo_paf: {
   type: DataTypes.STRING,
 },
 razao_social_sh: {
   type: DataTypes.STRING,
 },
 endereco_sh: {
   type: DataTypes.STRING,
 },
 numero_sh: {
   type: DataTypes.STRING,
 },
 complemento_sh: {
   type: DataTypes.STRING,
 },
 bairro_sh: {
   type: DataTypes.STRING,
 },
 cidade_sh: {
   type: DataTypes.STRING,
 },
 cep_sh: {
   type: DataTypes.STRING,
 },
 uf_sh: {
   type: DataTypes.STRING,
 },
 telefone_sh: {
   type: DataTypes.STRING,
 },
 contato_sh: {
   type: DataTypes.STRING,
 },
 principal_executavel: {
   type: DataTypes.STRING,
 },
 hash_registro: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "ecf_r01",
  },
);

export default EcfR01;