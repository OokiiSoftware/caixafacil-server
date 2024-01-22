import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeCabecalho extends Model<InferAttributes<NfeCabecalho>, InferCreationAttributes<NfeCabecalho>> {
 declare id: number;
 declare id_tribut_operacao_fiscal: number;
 declare uf_emitente: number;
 declare codigo_numerico: string;
 declare natureza_operacao: string;
 declare codigo_modelo: string;
 declare serie: string;
 declare numero: string;
 declare data_hora_emissao: Date;
 declare data_hora_entrada_saida: Date;
 declare tipo_operacao: string;
 declare local_destino: string;
 declare codigo_municipio: number;
 declare formato_impressao_danfe: string;
 declare tipo_emissao: string;
 declare chave_acesso: string;
 declare digito_chave_acesso: string;
 declare ambiente: string;
 declare finalidade_emissao: string;
 declare consumidor_operacao: string;
 declare consumidor_presenca: string;
 declare processo_emissao: string;
 declare versao_processo_emissao: string;
 declare data_entrada_contingencia: Date;
 declare justificativa_contingencia: string;
 declare base_calculo_icms: number;
 declare valor_icms: number;
 declare valor_icms_desonerado: number;
 declare total_icms_fcp_uf_destino: number;
 declare total_icms_interestadual_uf_destino: number;
 declare total_icms_interestadual_uf_remetente: number;
 declare valor_total_fcp: number;
 declare base_calculo_icms_st: number;
 declare valor_icms_st: number;
 declare valor_total_fcp_st: number;
 declare valor_total_fcp_st_retido: number;
 declare valor_total_produtos: number;
 declare valor_frete: number;
 declare valor_seguro: number;
 declare valor_desconto: number;
 declare valor_imposto_importacao: number;
 declare valor_ipi: number;
 declare valor_ipi_devolvido: number;
 declare valor_pis: number;
 declare valor_cofins: number;
 declare valor_despesas_acessorias: number;
 declare valor_total: number;
 declare valor_total_tributos: number;
 declare valor_servicos: number;
 declare base_calculo_issqn: number;
 declare valor_issqn: number;
 declare valor_pis_issqn: number;
 declare valor_cofins_issqn: number;
 declare data_prestacao_servico: Date;
 declare valor_deducao_issqn: number;
 declare outras_retencoes_issqn: number;
 declare desconto_incondicionado_issqn: number;
 declare desconto_condicionado_issqn: number;
 declare total_retencao_issqn: number;
 declare regime_especial_tributacao: string;
 declare valor_retido_pis: number;
 declare valor_retido_cofins: number;
 declare valor_retido_csll: number;
 declare base_calculo_irrf: number;
 declare valor_retido_irrf: number;
 declare base_calculo_previdencia: number;
 declare valor_retido_previdencia: number;
 declare informacoes_add_fisco: string;
 declare informacoes_add_contribuinte: string;
 declare comex_uf_embarque: string;
 declare comex_local_embarque: string;
 declare comex_local_despacho: string;
 declare compra_nota_empenho: string;
 declare compra_pedido: string;
 declare compra_contrato: string;
 declare qrcode: string;
 declare url_chave: string;
 declare status_nota: string;
 declare id_pdv_venda_cabecalho: number;
}

NfeCabecalho.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_tribut_operacao_fiscal: {
   type: DataTypes.INTEGER,
   references: { model: "tribut_operacao_fiscal", key: "id" }
 },
 uf_emitente: {
   type: DataTypes.INTEGER,
 },
 codigo_numerico: {
   type: DataTypes.STRING,
 },
 natureza_operacao: {
   type: DataTypes.STRING,
 },
 codigo_modelo: {
   type: DataTypes.STRING,
 },
 serie: {
   type: DataTypes.STRING,
 },
 numero: {
   type: DataTypes.STRING,
 },
 data_hora_emissao: {
   type: DataTypes.DATE,
 },
 data_hora_entrada_saida: {
   type: DataTypes.DATE,
 },
 tipo_operacao: {
   type: DataTypes.STRING,
 },
 local_destino: {
   type: DataTypes.STRING,
 },
 codigo_municipio: {
   type: DataTypes.INTEGER,
 },
 formato_impressao_danfe: {
   type: DataTypes.STRING,
 },
 tipo_emissao: {
   type: DataTypes.STRING,
 },
 chave_acesso: {
   type: DataTypes.STRING,
 },
 digito_chave_acesso: {
   type: DataTypes.STRING,
 },
 ambiente: {
   type: DataTypes.STRING,
 },
 finalidade_emissao: {
   type: DataTypes.STRING,
 },
 consumidor_operacao: {
   type: DataTypes.STRING,
 },
 consumidor_presenca: {
   type: DataTypes.STRING,
 },
 processo_emissao: {
   type: DataTypes.STRING,
 },
 versao_processo_emissao: {
   type: DataTypes.STRING,
 },
 data_entrada_contingencia: {
   type: DataTypes.DATE,
 },
 justificativa_contingencia: {
   type: DataTypes.STRING,
 },
 base_calculo_icms: {
   type: DataTypes.REAL,
 },
 valor_icms: {
   type: DataTypes.REAL,
 },
 valor_icms_desonerado: {
   type: DataTypes.REAL,
 },
 total_icms_fcp_uf_destino: {
   type: DataTypes.REAL,
 },
 total_icms_interestadual_uf_destino: {
   type: DataTypes.REAL,
 },
 total_icms_interestadual_uf_remetente: {
   type: DataTypes.REAL,
 },
 valor_total_fcp: {
   type: DataTypes.REAL,
 },
 base_calculo_icms_st: {
   type: DataTypes.REAL,
 },
 valor_icms_st: {
   type: DataTypes.REAL,
 },
 valor_total_fcp_st: {
   type: DataTypes.REAL,
 },
 valor_total_fcp_st_retido: {
   type: DataTypes.REAL,
 },
 valor_total_produtos: {
   type: DataTypes.REAL,
 },
 valor_frete: {
   type: DataTypes.REAL,
 },
 valor_seguro: {
   type: DataTypes.REAL,
 },
 valor_desconto: {
   type: DataTypes.REAL,
 },
 valor_imposto_importacao: {
   type: DataTypes.REAL,
 },
 valor_ipi: {
   type: DataTypes.REAL,
 },
 valor_ipi_devolvido: {
   type: DataTypes.REAL,
 },
 valor_pis: {
   type: DataTypes.REAL,
 },
 valor_cofins: {
   type: DataTypes.REAL,
 },
 valor_despesas_acessorias: {
   type: DataTypes.REAL,
 },
 valor_total: {
   type: DataTypes.REAL,
 },
 valor_total_tributos: {
   type: DataTypes.REAL,
 },
 valor_servicos: {
   type: DataTypes.REAL,
 },
 base_calculo_issqn: {
   type: DataTypes.REAL,
 },
 valor_issqn: {
   type: DataTypes.REAL,
 },
 valor_pis_issqn: {
   type: DataTypes.REAL,
 },
 valor_cofins_issqn: {
   type: DataTypes.REAL,
 },
 data_prestacao_servico: {
   type: DataTypes.DATE,
 },
 valor_deducao_issqn: {
   type: DataTypes.REAL,
 },
 outras_retencoes_issqn: {
   type: DataTypes.REAL,
 },
 desconto_incondicionado_issqn: {
   type: DataTypes.REAL,
 },
 desconto_condicionado_issqn: {
   type: DataTypes.REAL,
 },
 total_retencao_issqn: {
   type: DataTypes.REAL,
 },
 regime_especial_tributacao: {
   type: DataTypes.STRING,
 },
 valor_retido_pis: {
   type: DataTypes.REAL,
 },
 valor_retido_cofins: {
   type: DataTypes.REAL,
 },
 valor_retido_csll: {
   type: DataTypes.REAL,
 },
 base_calculo_irrf: {
   type: DataTypes.REAL,
 },
 valor_retido_irrf: {
   type: DataTypes.REAL,
 },
 base_calculo_previdencia: {
   type: DataTypes.REAL,
 },
 valor_retido_previdencia: {
   type: DataTypes.REAL,
 },
 informacoes_add_fisco: {
   type: DataTypes.STRING,
 },
 informacoes_add_contribuinte: {
   type: DataTypes.STRING,
 },
 comex_uf_embarque: {
   type: DataTypes.STRING,
 },
 comex_local_embarque: {
   type: DataTypes.STRING,
 },
 comex_local_despacho: {
   type: DataTypes.STRING,
 },
 compra_nota_empenho: {
   type: DataTypes.STRING,
 },
 compra_pedido: {
   type: DataTypes.STRING,
 },
 compra_contrato: {
   type: DataTypes.STRING,
 },
 qrcode: {
   type: DataTypes.STRING,
 },
 url_chave: {
   type: DataTypes.STRING,
 },
 status_nota: {
   type: DataTypes.STRING,
 },
 id_pdv_venda_cabecalho: {
   type: DataTypes.INTEGER,
   references: { model: "pdv_venda_cabecalho", key: "id" }
 },
},
  {
    sequelize,
    modelName: "nfe_cabecalho",
  },
);

export default NfeCabecalho;