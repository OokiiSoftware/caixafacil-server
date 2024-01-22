import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../database/connect";

class PdvConfiguracao extends Model<InferAttributes<PdvConfiguracao>, InferCreationAttributes<PdvConfiguracao>> {
 declare id: number;
 declare id_ecf_impressora: number;
 declare id_pdv_caixa: number;
 declare id_tribut_operacao_fiscal_padrao: number;
 declare mensagem_cupom: string;
 declare porta_ecf: string;
 declare ip_servidor: string;
 declare ip_sitef: string;
 declare tipo_tef: string;
 declare titulo_tela_caixa: string;
 declare caminho_imagens_produtos: string;
 declare caminho_imagens_marketing: string;
 declare cor_janelas_internas: string;
 declare marketing_ativo: string;
 declare cfop_ecf: number;
 declare timeout_ecf: number;
 declare intervalo_ecf: number;
 declare descricao_suprimento: string;
 declare descricao_sangria: string;
 declare tef_tipo_gp: number;
 declare tef_tempo_espera: number;
 declare tef_espera_sts: number;
 declare tef_numero_vias: number;
 declare decimais_quantidade: number;
 declare decimais_valor: number;
 declare bits_por_segundo: number;
 declare quantidade_maxima_cartoes: number;
 declare pesquisa_parte: string;
 declare laudo: string;
 declare data_atualizacao_estoque: Date;
 declare pede_cpf_cupom: string;
 declare tipo_integracao: number;
 declare timer_integracao: number;
 declare gaveta_sinal_invertido: string;
 declare gaveta_utilizacao: number;
 declare usa_teclado_reduzido: string;
 declare modulo: string;
 declare plano: string;
 declare plano_valor: number;
 declare plano_situacao: string;
 declare recibo_formato_pagina: string;
 declare recibo_largura_pagina: number;
 declare recibo_margem_pagina: number;
 declare encerra_movimento_auto: string;
 declare permite_estoque_negativo: string;
 declare modulo_fiscal_principal: string;
 declare modulo_fiscal_contingencia: string;
 declare acbr_monitor_endereco: string;
 declare acbr_monitor_porta: number;
}

PdvConfiguracao.init({
 id: {
   type: DataTypes.BIGINT,
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
 },
 id_ecf_impressora: {
   type: DataTypes.INTEGER,
   references: { model: "ecf_impressora", key: "id" }
 },
 id_pdv_caixa: {
   type: DataTypes.INTEGER,
   references: { model: "pdv_caixa", key: "id" }
 },
 id_tribut_operacao_fiscal_padrao: {
   type: DataTypes.INTEGER,
   references: { model: "tribut_operacao_fiscal_padrao", key: "id" }
 },
 mensagem_cupom: {
   type: DataTypes.STRING,
 },
 porta_ecf: {
   type: DataTypes.STRING,
 },
 ip_servidor: {
   type: DataTypes.STRING,
 },
 ip_sitef: {
   type: DataTypes.STRING,
 },
 tipo_tef: {
   type: DataTypes.STRING,
 },
 titulo_tela_caixa: {
   type: DataTypes.STRING,
 },
 caminho_imagens_produtos: {
   type: DataTypes.STRING,
 },
 caminho_imagens_marketing: {
   type: DataTypes.STRING,
 },
 cor_janelas_internas: {
   type: DataTypes.STRING,
 },
 marketing_ativo: {
   type: DataTypes.STRING,
 },
 cfop_ecf: {
   type: DataTypes.INTEGER,
 },
 timeout_ecf: {
   type: DataTypes.INTEGER,
 },
 intervalo_ecf: {
   type: DataTypes.INTEGER,
 },
 descricao_suprimento: {
   type: DataTypes.STRING,
 },
 descricao_sangria: {
   type: DataTypes.STRING,
 },
 tef_tipo_gp: {
   type: DataTypes.INTEGER,
 },
 tef_tempo_espera: {
   type: DataTypes.INTEGER,
 },
 tef_espera_sts: {
   type: DataTypes.INTEGER,
 },
 tef_numero_vias: {
   type: DataTypes.INTEGER,
 },
 decimais_quantidade: {
   type: DataTypes.INTEGER,
 },
 decimais_valor: {
   type: DataTypes.INTEGER,
 },
 bits_por_segundo: {
   type: DataTypes.INTEGER,
 },
 quantidade_maxima_cartoes: {
   type: DataTypes.INTEGER,
 },
 pesquisa_parte: {
   type: DataTypes.STRING,
 },
 laudo: {
   type: DataTypes.STRING,
 },
 data_atualizacao_estoque: {
   type: DataTypes.DATE,
 },
 pede_cpf_cupom: {
   type: DataTypes.STRING,
 },
 tipo_integracao: {
   type: DataTypes.INTEGER,
 },
 timer_integracao: {
   type: DataTypes.INTEGER,
 },
 gaveta_sinal_invertido: {
   type: DataTypes.STRING,
 },
 gaveta_utilizacao: {
   type: DataTypes.INTEGER,
 },
 usa_teclado_reduzido: {
   type: DataTypes.STRING,
 },
 modulo: {
   type: DataTypes.STRING,
 },
 plano: {
   type: DataTypes.STRING,
 },
 plano_valor: {
   type: DataTypes.REAL,
 },
 plano_situacao: {
   type: DataTypes.STRING,
 },
 recibo_formato_pagina: {
   type: DataTypes.STRING,
 },
 recibo_largura_pagina: {
   type: DataTypes.REAL,
 },
 recibo_margem_pagina: {
   type: DataTypes.REAL,
 },
 encerra_movimento_auto: {
   type: DataTypes.STRING,
 },
 permite_estoque_negativo: {
   type: DataTypes.STRING,
 },
 modulo_fiscal_principal: {
   type: DataTypes.STRING,
 },
 modulo_fiscal_contingencia: {
   type: DataTypes.STRING,
 },
 acbr_monitor_endereco: {
   type: DataTypes.STRING,
 },
 acbr_monitor_porta: {
   type: DataTypes.INTEGER,
 },
},
  {
    sequelize,
    modelName: "pdv_configuracao",
  },
);

export default PdvConfiguracao;