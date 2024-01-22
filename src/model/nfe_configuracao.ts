import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class NfeConfiguracao extends Model<InferAttributes<NfeConfiguracao>, InferCreationAttributes<NfeConfiguracao>> {
 declare id: number;
 declare certificado_digital_serie: string;
 declare certificado_digital_caminho: string;
 declare certificado_digital_senha: string;
 declare tipo_emissao: number;
 declare formato_impressao_danfe: number;
 declare processo_emissao: number;
 declare versao_processo_emissao: string;
 declare caminho_logomarca: string;
 declare salvar_xml: string;
 declare caminho_salvar_xml: string;
 declare caminho_schemas: string;
 declare caminho_arquivo_danfe: string;
 declare caminho_salvar_pdf: string;
 declare webservice_uf: string;
 declare webservice_ambiente: number;
 declare webservice_proxy_host: string;
 declare webservice_proxy_porta: number;
 declare webservice_proxy_usuario: string;
 declare webservice_proxy_senha: string;
 declare webservice_visualizar: string;
 declare email_servidor_smtp: string;
 declare email_porta: number;
 declare email_usuario: string;
 declare email_senha: string;
 declare email_assunto: string;
 declare email_autentica_ssl: string;
 declare email_texto: string;
 declare nfce_id_csc: string;
 declare nfce_csc: string;
 declare nfce_modelo_impressao: string;
 declare nfce_imprimir_itens_uma_linha: string;
 declare nfce_imprimir_desconto_por_item: string;
 declare nfce_imprimir_qrcode_lateral: string;
 declare nfce_imprimir_gtin: string;
 declare nfce_imprimir_nome_fantasia: string;
 declare nfce_impressao_tributos: string;
 declare nfce_margem_superior: number;
 declare nfce_margem_inferior: number;
 declare nfce_margem_direita: number;
 declare nfce_margem_esquerda: number;
 declare nfce_resolucao_impressao: number;
 declare resp_tec_cnpj: string;
 declare resp_tec_contato: string;
 declare resp_tec_email: string;
 declare resp_tec_fone: string;
 declare resp_tec_id_csrt: string;
 declare resp_tec_hash_csrt: string;
 declare nfce_tamanho_fonte_item: number;
}

NfeConfiguracao.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 certificado_digital_serie: {
   type: DataTypes.STRING,
 },
 certificado_digital_caminho: {
   type: DataTypes.STRING,
 },
 certificado_digital_senha: {
   type: DataTypes.STRING,
 },
 tipo_emissao: {
   type: DataTypes.INTEGER,
 },
 formato_impressao_danfe: {
   type: DataTypes.INTEGER,
 },
 processo_emissao: {
   type: DataTypes.INTEGER,
 },
 versao_processo_emissao: {
   type: DataTypes.STRING,
 },
 caminho_logomarca: {
   type: DataTypes.STRING,
 },
 salvar_xml: {
   type: DataTypes.STRING,
 },
 caminho_salvar_xml: {
   type: DataTypes.STRING,
 },
 caminho_schemas: {
   type: DataTypes.STRING,
 },
 caminho_arquivo_danfe: {
   type: DataTypes.STRING,
 },
 caminho_salvar_pdf: {
   type: DataTypes.STRING,
 },
 webservice_uf: {
   type: DataTypes.STRING,
 },
 webservice_ambiente: {
   type: DataTypes.INTEGER,
 },
 webservice_proxy_host: {
   type: DataTypes.STRING,
 },
 webservice_proxy_porta: {
   type: DataTypes.INTEGER,
 },
 webservice_proxy_usuario: {
   type: DataTypes.STRING,
 },
 webservice_proxy_senha: {
   type: DataTypes.STRING,
 },
 webservice_visualizar: {
   type: DataTypes.STRING,
 },
 email_servidor_smtp: {
   type: DataTypes.STRING,
 },
 email_porta: {
   type: DataTypes.INTEGER,
 },
 email_usuario: {
   type: DataTypes.STRING,
 },
 email_senha: {
   type: DataTypes.STRING,
 },
 email_assunto: {
   type: DataTypes.STRING,
 },
 email_autentica_ssl: {
   type: DataTypes.STRING,
 },
 email_texto: {
   type: DataTypes.STRING,
 },
 nfce_id_csc: {
   type: DataTypes.STRING,
 },
 nfce_csc: {
   type: DataTypes.STRING,
 },
 nfce_modelo_impressao: {
   type: DataTypes.STRING,
 },
 nfce_imprimir_itens_uma_linha: {
   type: DataTypes.STRING,
 },
 nfce_imprimir_desconto_por_item: {
   type: DataTypes.STRING,
 },
 nfce_imprimir_qrcode_lateral: {
   type: DataTypes.STRING,
 },
 nfce_imprimir_gtin: {
   type: DataTypes.STRING,
 },
 nfce_imprimir_nome_fantasia: {
   type: DataTypes.STRING,
 },
 nfce_impressao_tributos: {
   type: DataTypes.STRING,
 },
 nfce_margem_superior: {
   type: DataTypes.REAL,
 },
 nfce_margem_inferior: {
   type: DataTypes.REAL,
 },
 nfce_margem_direita: {
   type: DataTypes.REAL,
 },
 nfce_margem_esquerda: {
   type: DataTypes.REAL,
 },
 nfce_resolucao_impressao: {
   type: DataTypes.INTEGER,
 },
 resp_tec_cnpj: {
   type: DataTypes.STRING,
 },
 resp_tec_contato: {
   type: DataTypes.STRING,
 },
 resp_tec_email: {
   type: DataTypes.STRING,
 },
 resp_tec_fone: {
   type: DataTypes.STRING,
 },
 resp_tec_id_csrt: {
   type: DataTypes.STRING,
 },
 resp_tec_hash_csrt: {
   type: DataTypes.STRING,
 },
 nfce_tamanho_fonte_item: {
   type: DataTypes.INTEGER,
 },
},
  {
    sequelize,
    modelName: "nfe_configuracao",
  },
);

export default NfeConfiguracao;