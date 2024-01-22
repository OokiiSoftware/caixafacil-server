import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeDetalheImpostoIssqn extends Model<InferAttributes<NfeDetalheImpostoIssqn>, InferCreationAttributes<NfeDetalheImpostoIssqn>> {
 declare id: number;
 declare id_nfe_detalhe: number;
 declare base_calculo_issqn: number;
 declare aliquota_issqn: number;
 declare valor_issqn: number;
 declare municipio_issqn: number;
 declare item_lista_servicos: number;
 declare valor_deducao: number;
 declare valor_outras_retencoes: number;
 declare valor_desconto_incondicionado: number;
 declare valor_desconto_condicionado: number;
 declare valor_retencao_iss: number;
 declare indicador_exigibilidade_iss: string;
 declare codigo_servico: string;
 declare municipio_incidencia: number;
 declare pais_sevico_prestado: number;
 declare numero_processo: string;
 declare indicador_incentivo_fiscal: string;
}

NfeDetalheImpostoIssqn.init({
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
 base_calculo_issqn: {
   type: DataTypes.REAL,
 },
 aliquota_issqn: {
   type: DataTypes.REAL,
 },
 valor_issqn: {
   type: DataTypes.REAL,
 },
 municipio_issqn: {
   type: DataTypes.INTEGER,
 },
 item_lista_servicos: {
   type: DataTypes.INTEGER,
 },
 valor_deducao: {
   type: DataTypes.REAL,
 },
 valor_outras_retencoes: {
   type: DataTypes.REAL,
 },
 valor_desconto_incondicionado: {
   type: DataTypes.REAL,
 },
 valor_desconto_condicionado: {
   type: DataTypes.REAL,
 },
 valor_retencao_iss: {
   type: DataTypes.REAL,
 },
 indicador_exigibilidade_iss: {
   type: DataTypes.STRING,
 },
 codigo_servico: {
   type: DataTypes.STRING,
 },
 municipio_incidencia: {
   type: DataTypes.INTEGER,
 },
 pais_sevico_prestado: {
   type: DataTypes.INTEGER,
 },
 numero_processo: {
   type: DataTypes.STRING,
 },
 indicador_incentivo_fiscal: {
   type: DataTypes.STRING,
 },
},
  {
    sequelize,
    modelName: "nfe_detalhe_imposto_issqn",
  },
);

export default NfeDetalheImpostoIssqn;