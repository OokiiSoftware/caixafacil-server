
--
-- Table structure for table `cardapio_pergunta_padrao`
--

DROP TABLE IF EXISTS `cardapio_pergunta_padrao`;
CREATE TABLE `cardapio_pergunta_padrao` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_CARDAPIO` varchar(255) DEFAULT NULL,
  `PERGUNTA` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cardapio_pergunta_padrao`
--

LOCK TABLES `cardapio_pergunta_padrao` WRITE;
/*!40000 ALTER TABLE `cardapio_pergunta_padrao` DISABLE KEYS */;
/*!40000 ALTER TABLE `cardapio_pergunta_padrao` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:01

--
-- Table structure for table `cardapio_resposta_padrao`
--

DROP TABLE IF EXISTS `cardapio_resposta_padrao`;
CREATE TABLE `cardapio_resposta_padrao` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_CARDAPIO_PERGUNTA_PADRAO` varchar(255) DEFAULT NULL,
  `RESPOSTA` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cardapio_resposta_padrao`
--

LOCK TABLES `cardapio_resposta_padrao` WRITE;
/*!40000 ALTER TABLE `cardapio_resposta_padrao` DISABLE KEYS */;
/*!40000 ALTER TABLE `cardapio_resposta_padrao` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:55

--
-- Table structure for table `cardapio`
--

DROP TABLE IF EXISTS `cardapio`;
CREATE TABLE `cardapio` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_PRODUTO` varchar(255) DEFAULT NULL,
  `MODO_PREPARO` varchar(255) DEFAULT NULL,
  `INFO_ALERGICO` varchar(255) DEFAULT NULL,
  `INGREDIENTES` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cardapio`
--

LOCK TABLES `cardapio` WRITE;
/*!40000 ALTER TABLE `cardapio` DISABLE KEYS */;
/*!40000 ALTER TABLE `cardapio` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:08

--
-- Table structure for table `cfop`
--

DROP TABLE IF EXISTS `cfop`;
CREATE TABLE `cfop` (
  `ID` varchar(255) DEFAULT NULL,
  `CODIGO` varchar(255) DEFAULT NULL,
  `DESCRICAO` varchar(255) DEFAULT NULL,
  `APLICACAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cfop`
--

LOCK TABLES `cfop` WRITE;
/*!40000 ALTER TABLE `cfop` DISABLE KEYS */;
/*!40000 ALTER TABLE `cfop` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:00

--
-- Table structure for table `cliente_fiado`
--

DROP TABLE IF EXISTS `cliente_fiado`;
CREATE TABLE `cliente_fiado` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_CLIENTE` varchar(255) DEFAULT NULL,
  `ID_PDV_VENDA_CABECALHO` varchar(255) DEFAULT NULL,
  `VALOR_PENDENTE` varchar(255) DEFAULT NULL,
  `DATA_PAGAMENTO` varchar(255) DEFAULT NULL,
  `DATA_LANCAMENTO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cliente_fiado`
--

LOCK TABLES `cliente_fiado` WRITE;
/*!40000 ALTER TABLE `cliente_fiado` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente_fiado` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:05

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
CREATE TABLE `cliente` (
  `ID` varchar(255) DEFAULT NULL,
  `NOME` varchar(255) DEFAULT NULL,
  `FANTASIA` varchar(255) DEFAULT NULL,
  `EMAIL` varchar(255) DEFAULT NULL,
  `URL` varchar(255) DEFAULT NULL,
  `CPF_CNPJ` varchar(255) DEFAULT NULL,
  `RG` varchar(255) DEFAULT NULL,
  `ORGAO_RG` varchar(255) DEFAULT NULL,
  `DATA_EMISSAO_RG` varchar(255) DEFAULT NULL,
  `SEXO` varchar(255) DEFAULT NULL,
  `INSCRICAO_ESTADUAL` varchar(255) DEFAULT NULL,
  `INSCRICAO_MUNICIPAL` varchar(255) DEFAULT NULL,
  `TIPO_PESSOA` varchar(255) DEFAULT NULL,
  `DATA_CADASTRO` varchar(255) DEFAULT NULL,
  `LOGRADOURO` varchar(255) DEFAULT NULL,
  `NUMERO` varchar(255) DEFAULT NULL,
  `COMPLEMENTO` varchar(255) DEFAULT NULL,
  `CEP` varchar(255) DEFAULT NULL,
  `BAIRRO` varchar(255) DEFAULT NULL,
  `CIDADE` varchar(255) DEFAULT NULL,
  `UF` varchar(255) DEFAULT NULL,
  `TELEFONE` varchar(255) DEFAULT NULL,
  `CELULAR` varchar(255) DEFAULT NULL,
  `CONTATO` varchar(255) DEFAULT NULL,
  `CODIGO_IBGE_CIDADE` varchar(255) DEFAULT NULL,
  `CODIGO_IBGE_UF` varchar(255) DEFAULT NULL,
  `FIDELIDADE_AVISO` varchar(255) DEFAULT NULL,
  `FIDELIDADE_QUANTIDADE` varchar(255) DEFAULT NULL,
  `FIDELIDADE_VALOR` varchar(255) DEFAULT NULL,
  `FIADO_VALOR_TETO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES ('1','CLIENTE PF PADRAO',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Física',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('2','Jonas Santos',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('3','Gostavo Oliveira',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('4','João Filho',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:53

--
-- Table structure for table `colaborador`
--

DROP TABLE IF EXISTS `colaborador`;
CREATE TABLE `colaborador` (
  `ID` varchar(255) DEFAULT NULL,
  `NOME` varchar(255) DEFAULT NULL,
  `CPF` varchar(255) DEFAULT NULL,
  `TELEFONE` varchar(255) DEFAULT NULL,
  `CELULAR` varchar(255) DEFAULT NULL,
  `EMAIL` varchar(255) DEFAULT NULL,
  `COMISSAO_VISTA` varchar(255) DEFAULT NULL,
  `COMISSAO_PRAZO` varchar(255) DEFAULT NULL,
  `NIVEL_AUTORIZACAO` varchar(255) DEFAULT NULL,
  `ENTREGADOR_VEICULO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `colaborador`
--

LOCK TABLES `colaborador` WRITE;
/*!40000 ALTER TABLE `colaborador` DISABLE KEYS */;
INSERT INTO `colaborador` VALUES ('1','ADMINISTRADOR',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `colaborador` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:09

--
-- Table structure for table `comanda_detalhe_complemento`
--

DROP TABLE IF EXISTS `comanda_detalhe_complemento`;
CREATE TABLE `comanda_detalhe_complemento` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_COMANDA_DETALHE` varchar(255) DEFAULT NULL,
  `ID_PRODUTO` varchar(255) DEFAULT NULL,
  `NOME_PRODUTO` varchar(255) DEFAULT NULL,
  `QUANTIDADE` varchar(255) DEFAULT NULL,
  `VALOR_UNITARIO` varchar(255) DEFAULT NULL,
  `VALOR_TOTAL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `comanda_detalhe_complemento`
--

LOCK TABLES `comanda_detalhe_complemento` WRITE;
/*!40000 ALTER TABLE `comanda_detalhe_complemento` DISABLE KEYS */;
/*!40000 ALTER TABLE `comanda_detalhe_complemento` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:11

--
-- Table structure for table `comanda_detalhe`
--

DROP TABLE IF EXISTS `comanda_detalhe`;
CREATE TABLE `comanda_detalhe` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_COMANDA` varchar(255) DEFAULT NULL,
  `ID_PRODUTO` varchar(255) DEFAULT NULL,
  `QUANTIDADE` varchar(255) DEFAULT NULL,
  `VALOR_UNITARIO` varchar(255) DEFAULT NULL,
  `VALOR_TOTAL` varchar(255) DEFAULT NULL,
  `VALOR_TOTAL_COMPLEMENTO` varchar(255) DEFAULT NULL,
  `OBSERVACAO` varchar(255) DEFAULT NULL,
  `GEROU_PEDIDO_COZINHA` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `comanda_detalhe`
--

LOCK TABLES `comanda_detalhe` WRITE;
/*!40000 ALTER TABLE `comanda_detalhe` DISABLE KEYS */;
/*!40000 ALTER TABLE `comanda_detalhe` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:10

--
-- Table structure for table `comanda_observacao_padrao`
--

DROP TABLE IF EXISTS `comanda_observacao_padrao`;
CREATE TABLE `comanda_observacao_padrao` (
  `ID` varchar(255) DEFAULT NULL,
  `CODIGO` varchar(255) DEFAULT NULL,
  `DESCRICAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `comanda_observacao_padrao`
--

LOCK TABLES `comanda_observacao_padrao` WRITE;
/*!40000 ALTER TABLE `comanda_observacao_padrao` DISABLE KEYS */;
INSERT INTO `comanda_observacao_padrao` VALUES ('1','1','Sem Cebola'),('2','2','Sem Pimentão'),('3','3','Com Gelo e Limão'),('4','4','Com Gelo e Laranja'),('5','5','Com Gelo'),('6','6','Sem Açúcar'),('7','7','Sem Tomate'),('8','8','Sem Maionese'),('9','9','Sem Mostarda'),('10','10','Sem Salada'),('11','11','Sem Molho'),('12','12','Sem Borda'),('13','13','Sem Pimenta'),('14','14','Mal Passado'),('15','15','No Ponto'),('16','16','Para Viagem'),('17','17','Retirar no Caixa'),('18','18','Quente'),('19','19','Frio');
/*!40000 ALTER TABLE `comanda_observacao_padrao` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:03

--
-- Table structure for table `comanda_pedido`
--

DROP TABLE IF EXISTS `comanda_pedido`;
CREATE TABLE `comanda_pedido` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_COMANDA` varchar(255) DEFAULT NULL,
  `ID_COZINHA` varchar(255) DEFAULT NULL,
  `ENTROU_NA_FILA` varchar(255) DEFAULT NULL,
  `SAIU_DA_FILA` varchar(255) DEFAULT NULL,
  `ESTIMATIVA_MINUTOS` varchar(255) DEFAULT NULL,
  `POSICAO` varchar(255) DEFAULT NULL,
  `PRIORIDADE` varchar(255) DEFAULT NULL,
  `INICIO_PREPARO` varchar(255) DEFAULT NULL,
  `FIM_PREPARO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `comanda_pedido`
--

LOCK TABLES `comanda_pedido` WRITE;
/*!40000 ALTER TABLE `comanda_pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `comanda_pedido` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:08

--
-- Table structure for table `comanda`
--

DROP TABLE IF EXISTS `comanda`;
CREATE TABLE `comanda` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_COLABORADOR` varchar(255) DEFAULT NULL,
  `ID_MESA` varchar(255) DEFAULT NULL,
  `ID_CLIENTE` varchar(255) DEFAULT NULL,
  `ID_EMPRESA_DELIVERY_PEDIDO` varchar(255) DEFAULT NULL,
  `NUMERO` varchar(255) DEFAULT NULL,
  `DATA_CHEGADA` varchar(255) DEFAULT NULL,
  `HORA_CHEGADA` varchar(255) DEFAULT NULL,
  `DATA_SAIDA` varchar(255) DEFAULT NULL,
  `HORA_SAIDA` varchar(255) DEFAULT NULL,
  `VALOR_SUBTOTAL` varchar(255) DEFAULT NULL,
  `VALOR_DESCONTO` varchar(255) DEFAULT NULL,
  `VALOR_TOTAL` varchar(255) DEFAULT NULL,
  `TIPO` varchar(255) DEFAULT NULL,
  `QUANTIDADE_PESSOAS` varchar(255) DEFAULT NULL,
  `VALOR_POR_PESSOA` varchar(255) DEFAULT NULL,
  `SITUACAO` varchar(255) DEFAULT NULL,
  `CODIGO_COMPARTILHADO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `comanda`
--

LOCK TABLES `comanda` WRITE;
/*!40000 ALTER TABLE `comanda` DISABLE KEYS */;
/*!40000 ALTER TABLE `comanda` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:02

--
-- Table structure for table `compra_pedido_cabecalho`
--

DROP TABLE IF EXISTS `compra_pedido_cabecalho`;
CREATE TABLE `compra_pedido_cabecalho` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_COLABORADOR` varchar(255) DEFAULT NULL,
  `ID_FORNECEDOR` varchar(255) DEFAULT NULL,
  `DATA_PEDIDO` varchar(255) DEFAULT NULL,
  `DATA_PREVISAO_ENTREGA` varchar(255) DEFAULT NULL,
  `DATA_PREVISAO_PAGAMENTO` varchar(255) DEFAULT NULL,
  `LOCAL_ENTREGA` varchar(255) DEFAULT NULL,
  `LOCAL_COBRANCA` varchar(255) DEFAULT NULL,
  `CONTATO` varchar(255) DEFAULT NULL,
  `VALOR_SUBTOTAL` varchar(255) DEFAULT NULL,
  `TAXA_DESCONTO` varchar(255) DEFAULT NULL,
  `VALOR_DESCONTO` varchar(255) DEFAULT NULL,
  `VALOR_TOTAL` varchar(255) DEFAULT NULL,
  `FORMA_PAGAMENTO` varchar(255) DEFAULT NULL,
  `GERA_FINANCEIRO` varchar(255) DEFAULT NULL,
  `QUANTIDADE_PARCELAS` varchar(255) DEFAULT NULL,
  `DIA_PRIMEIRO_VENCIMENTO` varchar(255) DEFAULT NULL,
  `INTERVALO_ENTRE_PARCELAS` varchar(255) DEFAULT NULL,
  `DIA_FIXO_PARCELA` varchar(255) DEFAULT NULL,
  `DATA_RECEBIMENTO_ITENS` varchar(255) DEFAULT NULL,
  `HORA_RECEBIMENTO_ITENS` varchar(255) DEFAULT NULL,
  `ATUALIZOU_ESTOQUE` varchar(255) DEFAULT NULL,
  `NUMERO_DOCUMENTO_ENTRADA` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `compra_pedido_cabecalho`
--

LOCK TABLES `compra_pedido_cabecalho` WRITE;
/*!40000 ALTER TABLE `compra_pedido_cabecalho` DISABLE KEYS */;
/*!40000 ALTER TABLE `compra_pedido_cabecalho` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:02

--
-- Table structure for table `compra_pedido_detalhe`
--

DROP TABLE IF EXISTS `compra_pedido_detalhe`;
CREATE TABLE `compra_pedido_detalhe` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_COMPRA_PEDIDO_CABECALHO` varchar(255) DEFAULT NULL,
  `ID_PRODUTO` varchar(255) DEFAULT NULL,
  `QUANTIDADE` varchar(255) DEFAULT NULL,
  `VALOR_UNITARIO` varchar(255) DEFAULT NULL,
  `VALOR_SUBTOTAL` varchar(255) DEFAULT NULL,
  `TAXA_DESCONTO` varchar(255) DEFAULT NULL,
  `VALOR_DESCONTO` varchar(255) DEFAULT NULL,
  `VALOR_TOTAL` varchar(255) DEFAULT NULL,
  `CST` varchar(255) DEFAULT NULL,
  `CSOSN` varchar(255) DEFAULT NULL,
  `CFOP` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `compra_pedido_detalhe`
--

LOCK TABLES `compra_pedido_detalhe` WRITE;
/*!40000 ALTER TABLE `compra_pedido_detalhe` DISABLE KEYS */;
/*!40000 ALTER TABLE `compra_pedido_detalhe` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:56

--
-- Table structure for table `contador`
--

DROP TABLE IF EXISTS `contador`;
CREATE TABLE `contador` (
  `ID` varchar(255) DEFAULT NULL,
  `CPF` varchar(255) DEFAULT NULL,
  `CNPJ` varchar(255) DEFAULT NULL,
  `NOME` varchar(255) DEFAULT NULL,
  `EMAIL` varchar(255) DEFAULT NULL,
  `INSCRICAO_CRC` varchar(255) DEFAULT NULL,
  `TELEFONE` varchar(255) DEFAULT NULL,
  `CELULAR` varchar(255) DEFAULT NULL,
  `LOGRADOURO` varchar(255) DEFAULT NULL,
  `NUMERO` varchar(255) DEFAULT NULL,
  `COMPLEMENTO` varchar(255) DEFAULT NULL,
  `BAIRRO` varchar(255) DEFAULT NULL,
  `CIDADE` varchar(255) DEFAULT NULL,
  `UF` varchar(255) DEFAULT NULL,
  `CEP` varchar(255) DEFAULT NULL,
  `CODIGO_IBGE_CIDADE` varchar(255) DEFAULT NULL,
  `CODIGO_IBGE_UF` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `contador`
--

LOCK TABLES `contador` WRITE;
/*!40000 ALTER TABLE `contador` DISABLE KEYS */;
/*!40000 ALTER TABLE `contador` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:02

--
-- Table structure for table `contas_pagar`
--

DROP TABLE IF EXISTS `contas_pagar`;
CREATE TABLE `contas_pagar` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_FORNECEDOR` varchar(255) DEFAULT NULL,
  `ID_COMPRA_PEDIDO_CABECALHO` varchar(255) DEFAULT NULL,
  `DATA_LANCAMENTO` varchar(255) DEFAULT NULL,
  `DATA_VENCIMENTO` varchar(255) DEFAULT NULL,
  `DATA_PAGAMENTO` varchar(255) DEFAULT NULL,
  `VALOR_A_PAGAR` varchar(255) DEFAULT NULL,
  `TAXA_JURO` varchar(255) DEFAULT NULL,
  `TAXA_MULTA` varchar(255) DEFAULT NULL,
  `TAXA_DESCONTO` varchar(255) DEFAULT NULL,
  `VALOR_JURO` varchar(255) DEFAULT NULL,
  `VALOR_MULTA` varchar(255) DEFAULT NULL,
  `VALOR_DESCONTO` varchar(255) DEFAULT NULL,
  `VALOR_PAGO` varchar(255) DEFAULT NULL,
  `NUMERO_DOCUMENTO` varchar(255) DEFAULT NULL,
  `HISTORICO` varchar(255) DEFAULT NULL,
  `STATUS_PAGAMENTO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `contas_pagar`
--

LOCK TABLES `contas_pagar` WRITE;
/*!40000 ALTER TABLE `contas_pagar` DISABLE KEYS */;
/*!40000 ALTER TABLE `contas_pagar` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:55

--
-- Table structure for table `contas_receber`
--

DROP TABLE IF EXISTS `contas_receber`;
CREATE TABLE `contas_receber` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_CLIENTE` varchar(255) DEFAULT NULL,
  `ID_PDV_VENDA_CABECALHO` varchar(255) DEFAULT NULL,
  `DATA_LANCAMENTO` varchar(255) DEFAULT NULL,
  `DATA_VENCIMENTO` varchar(255) DEFAULT NULL,
  `DATA_RECEBIMENTO` varchar(255) DEFAULT NULL,
  `VALOR_A_RECEBER` varchar(255) DEFAULT NULL,
  `TAXA_JURO` varchar(255) DEFAULT NULL,
  `TAXA_MULTA` varchar(255) DEFAULT NULL,
  `TAXA_DESCONTO` varchar(255) DEFAULT NULL,
  `VALOR_JURO` varchar(255) DEFAULT NULL,
  `VALOR_MULTA` varchar(255) DEFAULT NULL,
  `VALOR_DESCONTO` varchar(255) DEFAULT NULL,
  `VALOR_RECEBIDO` varchar(255) DEFAULT NULL,
  `NUMERO_DOCUMENTO` varchar(255) DEFAULT NULL,
  `HISTORICO` varchar(255) DEFAULT NULL,
  `STATUS_RECEBIMENTO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `contas_receber`
--

LOCK TABLES `contas_receber` WRITE;
/*!40000 ALTER TABLE `contas_receber` DISABLE KEYS */;
/*!40000 ALTER TABLE `contas_receber` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:54

--
-- Table structure for table `cozinha`
--

DROP TABLE IF EXISTS `cozinha`;
CREATE TABLE `cozinha` (
  `ID` varchar(255) DEFAULT NULL,
  `NOME` varchar(255) DEFAULT NULL,
  `IMPRESSORA_NOME` varchar(255) DEFAULT NULL,
  `IMPRESSORA_ENDERECO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cozinha`
--

LOCK TABLES `cozinha` WRITE;
/*!40000 ALTER TABLE `cozinha` DISABLE KEYS */;
/*!40000 ALTER TABLE `cozinha` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:03

--
-- Table structure for table `delivery_acerto_comanda`
--

DROP TABLE IF EXISTS `delivery_acerto_comanda`;
CREATE TABLE `delivery_acerto_comanda` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_DELIVERY_ACERTO` varchar(255) DEFAULT NULL,
  `ID_DELIVERY` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `delivery_acerto_comanda`
--

LOCK TABLES `delivery_acerto_comanda` WRITE;
/*!40000 ALTER TABLE `delivery_acerto_comanda` DISABLE KEYS */;
/*!40000 ALTER TABLE `delivery_acerto_comanda` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:57

--
-- Table structure for table `delivery_acerto`
--

DROP TABLE IF EXISTS `delivery_acerto`;
CREATE TABLE `delivery_acerto` (
  `ID` varchar(255) DEFAULT NULL,
  `DATA_ACERTO` varchar(255) DEFAULT NULL,
  `HORA_ACERTO` varchar(255) DEFAULT NULL,
  `VALOR_RECEBIDO` varchar(255) DEFAULT NULL,
  `VALOR_PAGO_ENTREGADOR` varchar(255) DEFAULT NULL,
  `OBSERVACAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `delivery_acerto`
--

LOCK TABLES `delivery_acerto` WRITE;
/*!40000 ALTER TABLE `delivery_acerto` DISABLE KEYS */;
/*!40000 ALTER TABLE `delivery_acerto` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:50

--
-- Table structure for table `delivery`
--

DROP TABLE IF EXISTS `delivery`;
CREATE TABLE `delivery` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_COMANDA` varchar(255) DEFAULT NULL,
  `ID_TAXA_ENTREGA` varchar(255) DEFAULT NULL,
  `ID_COLABORADOR` varchar(255) DEFAULT NULL,
  `NOME_CLIENTE` varchar(255) DEFAULT NULL,
  `TELEFONE_PRINCIPAL` varchar(255) DEFAULT NULL,
  `TELEFONE_RECADO` varchar(255) DEFAULT NULL,
  `CELULAR` varchar(255) DEFAULT NULL,
  `LOGRADOURO` varchar(255) DEFAULT NULL,
  `NUMERO` varchar(255) DEFAULT NULL,
  `COMPLEMENTO` varchar(255) DEFAULT NULL,
  `CEP` varchar(255) DEFAULT NULL,
  `BAIRRO` varchar(255) DEFAULT NULL,
  `CIDADE` varchar(255) DEFAULT NULL,
  `UF` varchar(255) DEFAULT NULL,
  `VALOR_FRETE` varchar(255) DEFAULT NULL,
  `VALOR_RECEBIDO` varchar(255) DEFAULT NULL,
  `VALOR_A_RECEBER` varchar(255) DEFAULT NULL,
  `VALOR_SOLICITADO_TROCO` varchar(255) DEFAULT NULL,
  `PREVISAO_PREPARO` varchar(255) DEFAULT NULL,
  `INICIO_PREPARO` varchar(255) DEFAULT NULL,
  `PREVISAO_ENTREGA` varchar(255) DEFAULT NULL,
  `SAIU_PARA_ENTREGA` varchar(255) DEFAULT NULL,
  `ENTREGUE` varchar(255) DEFAULT NULL,
  `PREVISAO_RETIRADA` varchar(255) DEFAULT NULL,
  `PRONTO_PARA_RETIRADA` varchar(255) DEFAULT NULL,
  `RETIROU` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `delivery`
--

LOCK TABLES `delivery` WRITE;
/*!40000 ALTER TABLE `delivery` DISABLE KEYS */;
/*!40000 ALTER TABLE `delivery` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:58

--
-- Table structure for table `ecf_aliquotas`
--

DROP TABLE IF EXISTS `ecf_aliquotas`;
CREATE TABLE `ecf_aliquotas` (
  `ID` varchar(255) DEFAULT NULL,
  `TOTALIZADOR_PARCIAL` varchar(255) DEFAULT NULL,
  `ECF_ICMS_ST` varchar(255) DEFAULT NULL,
  `PAF_P_ST` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ecf_aliquotas`
--

LOCK TABLES `ecf_aliquotas` WRITE;
/*!40000 ALTER TABLE `ecf_aliquotas` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecf_aliquotas` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:07

--
-- Table structure for table `ecf_documentos_emitidos`
--

DROP TABLE IF EXISTS `ecf_documentos_emitidos`;
CREATE TABLE `ecf_documentos_emitidos` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_PDV_MOVIMENTO` varchar(255) DEFAULT NULL,
  `DATA_EMISSAO` varchar(255) DEFAULT NULL,
  `HORA_EMISSAO` varchar(255) DEFAULT NULL,
  `TIPO` varchar(255) DEFAULT NULL,
  `COO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ecf_documentos_emitidos`
--

LOCK TABLES `ecf_documentos_emitidos` WRITE;
/*!40000 ALTER TABLE `ecf_documentos_emitidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecf_documentos_emitidos` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:07

--
-- Table structure for table `ecf_e3`
--

DROP TABLE IF EXISTS `ecf_e3`;
CREATE TABLE `ecf_e3` (
  `ID` varchar(255) DEFAULT NULL,
  `SERIE_ECF` varchar(255) DEFAULT NULL,
  `MF_ADICIONAL` varchar(255) DEFAULT NULL,
  `TIPO_ECF` varchar(255) DEFAULT NULL,
  `MARCA_ECF` varchar(255) DEFAULT NULL,
  `MODELO_ECF` varchar(255) DEFAULT NULL,
  `DATA_ESTOQUE` varchar(255) DEFAULT NULL,
  `HORA_ESTOQUE` varchar(255) DEFAULT NULL,
  `HASH_REGISTRO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ecf_e3`
--

LOCK TABLES `ecf_e3` WRITE;
/*!40000 ALTER TABLE `ecf_e3` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecf_e3` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:08

--
-- Table structure for table `ecf_impressora`
--

DROP TABLE IF EXISTS `ecf_impressora`;
CREATE TABLE `ecf_impressora` (
  `ID` varchar(255) DEFAULT NULL,
  `NUMERO` varchar(255) DEFAULT NULL,
  `CODIGO` varchar(255) DEFAULT NULL,
  `SERIE` varchar(255) DEFAULT NULL,
  `IDENTIFICACAO` varchar(255) DEFAULT NULL,
  `MC` varchar(255) DEFAULT NULL,
  `MD` varchar(255) DEFAULT NULL,
  `VR` varchar(255) DEFAULT NULL,
  `TIPO` varchar(255) DEFAULT NULL,
  `MARCA` varchar(255) DEFAULT NULL,
  `MODELO` varchar(255) DEFAULT NULL,
  `MODELO_ACBR` varchar(255) DEFAULT NULL,
  `MODELO_DOCUMENTO_FISCAL` varchar(255) DEFAULT NULL,
  `VERSAO` varchar(255) DEFAULT NULL,
  `LE` varchar(255) DEFAULT NULL,
  `LEF` varchar(255) DEFAULT NULL,
  `MFD` varchar(255) DEFAULT NULL,
  `LACRE_NA_MFD` varchar(255) DEFAULT NULL,
  `DOCTO` varchar(255) DEFAULT NULL,
  `DATA_INSTALACAO_SB` varchar(255) DEFAULT NULL,
  `HORA_INSTALACAO_SB` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ecf_impressora`
--

LOCK TABLES `ecf_impressora` WRITE;
/*!40000 ALTER TABLE `ecf_impressora` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecf_impressora` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:52

--
-- Table structure for table `ecf_log_totais`
--

DROP TABLE IF EXISTS `ecf_log_totais`;
CREATE TABLE `ecf_log_totais` (
  `ID` varchar(255) DEFAULT NULL,
  `TIPO_PAGAMENTO` varchar(255) DEFAULT NULL,
  `PRODUTO` varchar(255) DEFAULT NULL,
  `R01` varchar(255) DEFAULT NULL,
  `R02` varchar(255) DEFAULT NULL,
  `R03` varchar(255) DEFAULT NULL,
  `R04` varchar(255) DEFAULT NULL,
  `R05` varchar(255) DEFAULT NULL,
  `R06` varchar(255) DEFAULT NULL,
  `R07` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ecf_log_totais`
--

LOCK TABLES `ecf_log_totais` WRITE;
/*!40000 ALTER TABLE `ecf_log_totais` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecf_log_totais` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:52

--
-- Table structure for table `ecf_r01`
--

DROP TABLE IF EXISTS `ecf_r01`;
CREATE TABLE `ecf_r01` (
  `ID` varchar(255) DEFAULT NULL,
  `SERIE_ECF` varchar(255) DEFAULT NULL,
  `CNPJ_EMPRESA` varchar(255) DEFAULT NULL,
  `CNPJ_SH` varchar(255) DEFAULT NULL,
  `INSCRICAO_ESTADUAL_SH` varchar(255) DEFAULT NULL,
  `INSCRICAO_MUNICIPAL_SH` varchar(255) DEFAULT NULL,
  `DENOMINACAO_SH` varchar(255) DEFAULT NULL,
  `NOME_PAF_ECF` varchar(255) DEFAULT NULL,
  `VERSAO_PAF_ECF` varchar(255) DEFAULT NULL,
  `MD5_PAF_ECF` varchar(255) DEFAULT NULL,
  `DATA_INICIAL` varchar(255) DEFAULT NULL,
  `DATA_FINAL` varchar(255) DEFAULT NULL,
  `VERSAO_ER` varchar(255) DEFAULT NULL,
  `NUMERO_LAUDO_PAF` varchar(255) DEFAULT NULL,
  `RAZAO_SOCIAL_SH` varchar(255) DEFAULT NULL,
  `ENDERECO_SH` varchar(255) DEFAULT NULL,
  `NUMERO_SH` varchar(255) DEFAULT NULL,
  `COMPLEMENTO_SH` varchar(255) DEFAULT NULL,
  `BAIRRO_SH` varchar(255) DEFAULT NULL,
  `CIDADE_SH` varchar(255) DEFAULT NULL,
  `CEP_SH` varchar(255) DEFAULT NULL,
  `UF_SH` varchar(255) DEFAULT NULL,
  `TELEFONE_SH` varchar(255) DEFAULT NULL,
  `CONTATO_SH` varchar(255) DEFAULT NULL,
  `PRINCIPAL_EXECUTAVEL` varchar(255) DEFAULT NULL,
  `HASH_REGISTRO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ecf_r01`
--

LOCK TABLES `ecf_r01` WRITE;
/*!40000 ALTER TABLE `ecf_r01` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecf_r01` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:59

--
-- Table structure for table `ecf_r02`
--

DROP TABLE IF EXISTS `ecf_r02`;
CREATE TABLE `ecf_r02` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_PDV_OPERADOR` varchar(255) DEFAULT NULL,
  `ID_ECF_IMPRESSORA` varchar(255) DEFAULT NULL,
  `ID_ECF_CAIXA` varchar(255) DEFAULT NULL,
  `SERIE_ECF` varchar(255) DEFAULT NULL,
  `CRZ` varchar(255) DEFAULT NULL,
  `COO` varchar(255) DEFAULT NULL,
  `CRO` varchar(255) DEFAULT NULL,
  `DATA_MOVIMENTO` varchar(255) DEFAULT NULL,
  `DATA_EMISSAO` varchar(255) DEFAULT NULL,
  `HORA_EMISSAO` varchar(255) DEFAULT NULL,
  `VENDA_BRUTA` varchar(255) DEFAULT NULL,
  `GRANDE_TOTAL` varchar(255) DEFAULT NULL,
  `HASH_REGISTRO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ecf_r02`
--

LOCK TABLES `ecf_r02` WRITE;
/*!40000 ALTER TABLE `ecf_r02` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecf_r02` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:54

--
-- Table structure for table `ecf_r03`
--

DROP TABLE IF EXISTS `ecf_r03`;
CREATE TABLE `ecf_r03` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_ECF_R02` varchar(255) DEFAULT NULL,
  `SERIE_ECF` varchar(255) DEFAULT NULL,
  `TOTALIZADOR_PARCIAL` varchar(255) DEFAULT NULL,
  `VALOR_ACUMULADO` varchar(255) DEFAULT NULL,
  `CRZ` varchar(255) DEFAULT NULL,
  `HASH_REGISTRO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ecf_r03`
--

LOCK TABLES `ecf_r03` WRITE;
/*!40000 ALTER TABLE `ecf_r03` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecf_r03` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:50

--
-- Table structure for table `ecf_r06`
--

DROP TABLE IF EXISTS `ecf_r06`;
CREATE TABLE `ecf_r06` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_PDV_OPERADOR` varchar(255) DEFAULT NULL,
  `ID_ECF_IMPRESSORA` varchar(255) DEFAULT NULL,
  `ID_ECF_CAIXA` varchar(255) DEFAULT NULL,
  `SERIE_ECF` varchar(255) DEFAULT NULL,
  `COO` varchar(255) DEFAULT NULL,
  `GNF` varchar(255) DEFAULT NULL,
  `GRG` varchar(255) DEFAULT NULL,
  `CDC` varchar(255) DEFAULT NULL,
  `DENOMINACAO` varchar(255) DEFAULT NULL,
  `DATA_EMISSAO` varchar(255) DEFAULT NULL,
  `HORA_EMISSAO` varchar(255) DEFAULT NULL,
  `HASH_REGISTRO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ecf_r06`
--

LOCK TABLES `ecf_r06` WRITE;
/*!40000 ALTER TABLE `ecf_r06` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecf_r06` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:10

--
-- Table structure for table `ecf_r07`
--

DROP TABLE IF EXISTS `ecf_r07`;
CREATE TABLE `ecf_r07` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_ECF_R06` varchar(255) DEFAULT NULL,
  `CCF` varchar(255) DEFAULT NULL,
  `MEIO_PAGAMENTO` varchar(255) DEFAULT NULL,
  `VALOR_PAGAMENTO` varchar(255) DEFAULT NULL,
  `ESTORNO` varchar(255) DEFAULT NULL,
  `VALOR_ESTORNO` varchar(255) DEFAULT NULL,
  `HASH_REGISTRO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ecf_r07`
--

LOCK TABLES `ecf_r07` WRITE;
/*!40000 ALTER TABLE `ecf_r07` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecf_r07` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:06

--
-- Table structure for table `ecf_recebimento_nao_fiscal`
--

DROP TABLE IF EXISTS `ecf_recebimento_nao_fiscal`;
CREATE TABLE `ecf_recebimento_nao_fiscal` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_PDV_MOVIMENTO` varchar(255) DEFAULT NULL,
  `DATA_RECEBIMENTO` varchar(255) DEFAULT NULL,
  `DESCRICAO` varchar(255) DEFAULT NULL,
  `VALOR` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ecf_recebimento_nao_fiscal`
--

LOCK TABLES `ecf_recebimento_nao_fiscal` WRITE;
/*!40000 ALTER TABLE `ecf_recebimento_nao_fiscal` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecf_recebimento_nao_fiscal` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:01

--
-- Table structure for table `ecf_relatorio_gerencial`
--

DROP TABLE IF EXISTS `ecf_relatorio_gerencial`;
CREATE TABLE `ecf_relatorio_gerencial` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_PDV_CONFIGURACAO` varchar(255) DEFAULT NULL,
  `X` varchar(255) DEFAULT NULL,
  `MEIOS_PAGAMENTO` varchar(255) DEFAULT NULL,
  `DAV_EMITIDOS` varchar(255) DEFAULT NULL,
  `IDENTIFICACAO_PAF` varchar(255) DEFAULT NULL,
  `PARAMETROS_CONFIGURACAO` varchar(255) DEFAULT NULL,
  `OUTROS` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ecf_relatorio_gerencial`
--

LOCK TABLES `ecf_relatorio_gerencial` WRITE;
/*!40000 ALTER TABLE `ecf_relatorio_gerencial` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecf_relatorio_gerencial` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:05

--
-- Table structure for table `ecf_sintegra_60a`
--

DROP TABLE IF EXISTS `ecf_sintegra_60a`;
CREATE TABLE `ecf_sintegra_60a` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_ECF_SINTEGRA_60M` varchar(255) DEFAULT NULL,
  `SITUACAO_TRIBUTARIA` varchar(255) DEFAULT NULL,
  `VALOR` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ecf_sintegra_60a`
--

LOCK TABLES `ecf_sintegra_60a` WRITE;
/*!40000 ALTER TABLE `ecf_sintegra_60a` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecf_sintegra_60a` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:51

--
-- Table structure for table `ecf_sintegra_60m`
--

DROP TABLE IF EXISTS `ecf_sintegra_60m`;
CREATE TABLE `ecf_sintegra_60m` (
  `ID` varchar(255) DEFAULT NULL,
  `DATA_EMISSAO` varchar(255) DEFAULT NULL,
  `NUMERO_SERIE_ECF` varchar(255) DEFAULT NULL,
  `NUMERO_EQUIPAMENTO` varchar(255) DEFAULT NULL,
  `MODELO_DOCUMENTO_FISCAL` varchar(255) DEFAULT NULL,
  `COO_INICIAL` varchar(255) DEFAULT NULL,
  `COO_FINAL` varchar(255) DEFAULT NULL,
  `CRZ` varchar(255) DEFAULT NULL,
  `CRO` varchar(255) DEFAULT NULL,
  `VALOR_VENDA_BRUTA` varchar(255) DEFAULT NULL,
  `VALOR_GRANDE_TOTAL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ecf_sintegra_60m`
--

LOCK TABLES `ecf_sintegra_60m` WRITE;
/*!40000 ALTER TABLE `ecf_sintegra_60m` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecf_sintegra_60m` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:03

--
-- Table structure for table `empresa_cnae`
--

DROP TABLE IF EXISTS `empresa_cnae`;
CREATE TABLE `empresa_cnae` (
  `ID` varchar(255) DEFAULT NULL,
  `CODIGO` varchar(255) DEFAULT NULL,
  `PRINCIPAL` varchar(255) DEFAULT NULL,
  `DESCRICAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `empresa_cnae`
--

LOCK TABLES `empresa_cnae` WRITE;
/*!40000 ALTER TABLE `empresa_cnae` DISABLE KEYS */;
INSERT INTO `empresa_cnae` VALUES (NULL,'4751201','S','Comércio varejista especializado de equipamentos e suprimentos de informática'),(NULL,'9511800','N','Reparação e manutenção de computadores e de equipamentos periféricos'),(NULL,'6190699','N','Outras atividades de telecomunicações não especificadas anteriormente'),(NULL,'4321500','N','Instalações elétricas'),(NULL,'4759899','N','Comércio varejista de outros artigos de uso doméstico não especificados anteriormente'),(NULL,'4751201','S','Comércio varejista especializado de equipamentos e suprimentos de informática'),(NULL,'9511800','N','Reparação e manutenção de computadores e de equipamentos periféricos'),(NULL,'6190699','N','Outras atividades de telecomunicações não especificadas anteriormente'),(NULL,'4321500','N','Instalações elétricas'),(NULL,'4759899','N','Comércio varejista de outros artigos de uso doméstico não especificados anteriormente');
/*!40000 ALTER TABLE `empresa_cnae` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:10

--
-- Table structure for table `empresa_delivery_pedido`
--

DROP TABLE IF EXISTS `empresa_delivery_pedido`;
CREATE TABLE `empresa_delivery_pedido` (
  `ID` varchar(255) DEFAULT NULL,
  `CODIGO_PEDIDO_EMPRESA` varchar(255) DEFAULT NULL,
  `CONTEUDO_JSON` varchar(255) DEFAULT NULL,
  `OBSERVACAO` varchar(255) DEFAULT NULL,
  `DATA_SOLICITACAO` varchar(255) DEFAULT NULL,
  `HORA_SOLICITACAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `empresa_delivery_pedido`
--

LOCK TABLES `empresa_delivery_pedido` WRITE;
/*!40000 ALTER TABLE `empresa_delivery_pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `empresa_delivery_pedido` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:04

--
-- Table structure for table `empresa_segmento`
--

DROP TABLE IF EXISTS `empresa_segmento`;
CREATE TABLE `empresa_segmento` (
  `ID` varchar(255) DEFAULT NULL,
  `CODIGO` varchar(255) DEFAULT NULL,
  `DENOMINACAO` varchar(255) DEFAULT NULL,
  `DIVISOES` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `empresa_segmento`
--

LOCK TABLES `empresa_segmento` WRITE;
/*!40000 ALTER TABLE `empresa_segmento` DISABLE KEYS */;
INSERT INTO `empresa_segmento` VALUES ('1','A','01..03','AGRICULTURA, PECUÁRIA, PRODUÇÃO FLORESTAL, PESCA E AQÜICULTURA'),('2','B','05..09','INDÚSTRIAS EXTRATIVAS'),('3','C','10..33','INDÚSTRIAS DE TRANSFORMAÇÃO'),('4','D','35..35','ELETRICIDADE E GÁS'),('5','E','36..39','ÁGUA, ESGOTO, ATIVIDADES DE GESTÃO DE RESÍDUOS E DESCONTAMINAÇÃO'),('6','F','41..43','CONSTRUÇÃO'),('7','G','45..47','COMÉRCIO; REPARAÇÃO DE VEÍCULOS AUTOMOTORES E MOTOCICLETAS'),('8','H','49..53','TRANSPORTE, ARMAZENAGEM E CORREIO'),('9','I','55..56','ALOJAMENTO E ALIMENTAÇÃO'),('10','J','58..63','INFORMAÇÃO E COMUNICAÇÃO'),('11','K','64..66','ATIVIDADES FINANCEIRAS, DE SEGUROS E SERVIÇOS RELACIONADOS'),('12','L','68..68','ATIVIDADES IMOBILIÁRIAS'),('13','M','69..75','ATIVIDADES PROFISSIONAIS, CIENTÍFICAS E TÉCNICAS'),('14','N','77..82','ATIVIDADES ADMINISTRATIVAS E SERVIÇOS COMPLEMENTARES'),('15','O','84..84','ADMINISTRAÇÃO PÚBLICA, DEFESA E SEGURIDADE SOCIAL'),('16','P','85..85','EDUCAÇÃO'),('17','Q','86..88','SAÚDE HUMANA E SERVIÇOS SOCIAIS'),('18','R','90..93','ARTES, CULTURA, ESPORTE E RECREAÇÃO'),('19','S','94..96','OUTRAS ATIVIDADES DE SERVIÇOS'),('20','T','97..97','SERVIÇOS DOMÉSTICOS'),('21','U','99..99','ORGANISMOS INTERNACIONAIS E OUTRAS INSTITUIÇÕES EXTRATERRITORIAIS');
/*!40000 ALTER TABLE `empresa_segmento` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:03

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
CREATE TABLE `empresa` (
  `ID` varchar(255) DEFAULT NULL,
  `RAZAO_SOCIAL` varchar(255) DEFAULT NULL,
  `NOME_FANTASIA` varchar(255) DEFAULT NULL,
  `CNPJ` varchar(255) DEFAULT NULL,
  `INSCRICAO_ESTADUAL` varchar(255) DEFAULT NULL,
  `INSCRICAO_MUNICIPAL` varchar(255) DEFAULT NULL,
  `TIPO_REGIME` varchar(255) DEFAULT NULL,
  `CRT` varchar(255) DEFAULT NULL,
  `DATA_CONSTITUICAO` varchar(255) DEFAULT NULL,
  `TIPO` varchar(255) DEFAULT NULL,
  `EMAIL` varchar(255) DEFAULT NULL,
  `ALIQUOTA_PIS` varchar(255) DEFAULT NULL,
  `ALIQUOTA_COFINS` varchar(255) DEFAULT NULL,
  `LOGRADOURO` varchar(255) DEFAULT NULL,
  `NUMERO` varchar(255) DEFAULT NULL,
  `COMPLEMENTO` varchar(255) DEFAULT NULL,
  `CEP` varchar(255) DEFAULT NULL,
  `BAIRRO` varchar(255) DEFAULT NULL,
  `CIDADE` varchar(255) DEFAULT NULL,
  `UF` varchar(255) DEFAULT NULL,
  `FONE` varchar(255) DEFAULT NULL,
  `CONTATO` varchar(255) DEFAULT NULL,
  `CODIGO_IBGE_CIDADE` varchar(255) DEFAULT NULL,
  `CODIGO_IBGE_UF` varchar(255) DEFAULT NULL,
  `LOGOTIPO` varchar(255) DEFAULT NULL,
  `REGISTRADO` varchar(255) DEFAULT NULL,
  `NATUREZA_JURIDICA` varchar(255) DEFAULT NULL,
  `EMAIL_PAGAMENTO` varchar(255) DEFAULT NULL,
  `SIMEI` varchar(255) DEFAULT NULL,
  `DATA_REGISTRO` varchar(255) DEFAULT NULL,
  `HORA_REGISTRO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES ('1','JONAS SANTOS FERREIRA 02773133331','OKISOFT SEGURANCA DIGITAL\r','48319801000140',NULL,NULL,NULL,'1',NULL,'M',NULL,'0','0','AVENIDA DA SAUDADE','50','COND VILLAGE DEL ESTE V;BLOCO 6;APT 301','65059-811','CRUZEIRO DE SANTA BARBARA','SAO LUIS','MA',NULL,NULL,'0','0',NULL,'0','213-5 - Empresário (Individual)',NULL,'0','946695600000',NULL);
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:56

--
-- Table structure for table `entregador_rota_detalhe`
--

DROP TABLE IF EXISTS `entregador_rota_detalhe`;
CREATE TABLE `entregador_rota_detalhe` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_ENTREGADOR_ROTA` varchar(255) DEFAULT NULL,
  `ID_DELIVERY` varchar(255) DEFAULT NULL,
  `POSICAO_NA_FILA` varchar(255) DEFAULT NULL,
  `LATITUDE` varchar(255) DEFAULT NULL,
  `LONGITUDE` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `entregador_rota_detalhe`
--

LOCK TABLES `entregador_rota_detalhe` WRITE;
/*!40000 ALTER TABLE `entregador_rota_detalhe` DISABLE KEYS */;
/*!40000 ALTER TABLE `entregador_rota_detalhe` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:57

--
-- Table structure for table `entregador_rota`
--

DROP TABLE IF EXISTS `entregador_rota`;
CREATE TABLE `entregador_rota` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_COLABORADOR` varchar(255) DEFAULT NULL,
  `DATA_ROTA` varchar(255) DEFAULT NULL,
  `HORA_SAIDA` varchar(255) DEFAULT NULL,
  `ESTIMATIVA_MINUTOS` varchar(255) DEFAULT NULL,
  `HORA_PREVISTO_RETORNO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `entregador_rota`
--

LOCK TABLES `entregador_rota` WRITE;
/*!40000 ALTER TABLE `entregador_rota` DISABLE KEYS */;
/*!40000 ALTER TABLE `entregador_rota` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:57

--
-- Table structure for table `fidelidade_historico`
--

DROP TABLE IF EXISTS `fidelidade_historico`;
CREATE TABLE `fidelidade_historico` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_CLIENTE` varchar(255) DEFAULT NULL,
  `ID_FIDELIDADE_UTILIZADO` varchar(255) DEFAULT NULL,
  `DATA_CONSUMO` varchar(255) DEFAULT NULL,
  `HORA_CONSUMO` varchar(255) DEFAULT NULL,
  `VALOR_CONSUMO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `fidelidade_historico`
--

LOCK TABLES `fidelidade_historico` WRITE;
/*!40000 ALTER TABLE `fidelidade_historico` DISABLE KEYS */;
/*!40000 ALTER TABLE `fidelidade_historico` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:02

--
-- Table structure for table `fidelidade_utilizado`
--

DROP TABLE IF EXISTS `fidelidade_utilizado`;
CREATE TABLE `fidelidade_utilizado` (
  `ID` varchar(255) DEFAULT NULL,
  `DATA_UTILIZACAO` varchar(255) DEFAULT NULL,
  `HORA_UTILIZACAO` varchar(255) DEFAULT NULL,
  `VALOR_UTILIZADO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `fidelidade_utilizado`
--

LOCK TABLES `fidelidade_utilizado` WRITE;
/*!40000 ALTER TABLE `fidelidade_utilizado` DISABLE KEYS */;
/*!40000 ALTER TABLE `fidelidade_utilizado` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:10

--
-- Table structure for table `fornecedor`
--

DROP TABLE IF EXISTS `fornecedor`;
CREATE TABLE `fornecedor` (
  `ID` varchar(255) DEFAULT NULL,
  `NOME` varchar(255) DEFAULT NULL,
  `FANTASIA` varchar(255) DEFAULT NULL,
  `EMAIL` varchar(255) DEFAULT NULL,
  `URL` varchar(255) DEFAULT NULL,
  `CPF_CNPJ` varchar(255) DEFAULT NULL,
  `RG` varchar(255) DEFAULT NULL,
  `ORGAO_RG` varchar(255) DEFAULT NULL,
  `DATA_EMISSAO_RG` varchar(255) DEFAULT NULL,
  `SEXO` varchar(255) DEFAULT NULL,
  `INSCRICAO_ESTADUAL` varchar(255) DEFAULT NULL,
  `INSCRICAO_MUNICIPAL` varchar(255) DEFAULT NULL,
  `TIPO_PESSOA` varchar(255) DEFAULT NULL,
  `DATA_CADASTRO` varchar(255) DEFAULT NULL,
  `LOGRADOURO` varchar(255) DEFAULT NULL,
  `NUMERO` varchar(255) DEFAULT NULL,
  `COMPLEMENTO` varchar(255) DEFAULT NULL,
  `CEP` varchar(255) DEFAULT NULL,
  `BAIRRO` varchar(255) DEFAULT NULL,
  `CIDADE` varchar(255) DEFAULT NULL,
  `UF` varchar(255) DEFAULT NULL,
  `TELEFONE` varchar(255) DEFAULT NULL,
  `CELULAR` varchar(255) DEFAULT NULL,
  `CONTATO` varchar(255) DEFAULT NULL,
  `CODIGO_IBGE_CIDADE` varchar(255) DEFAULT NULL,
  `CODIGO_IBGE_UF` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `fornecedor`
--

LOCK TABLES `fornecedor` WRITE;
/*!40000 ALTER TABLE `fornecedor` DISABLE KEYS */;
/*!40000 ALTER TABLE `fornecedor` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:55

--
-- Table structure for table `ibpt`
--

DROP TABLE IF EXISTS `ibpt`;
CREATE TABLE `ibpt` (
  `ID` varchar(255) DEFAULT NULL,
  `NCM` varchar(255) DEFAULT NULL,
  `EX` varchar(255) DEFAULT NULL,
  `TIPO` varchar(255) DEFAULT NULL,
  `DESCRICAO` varchar(255) DEFAULT NULL,
  `NACIONAL_FEDERAL` varchar(255) DEFAULT NULL,
  `IMPORTADOS_FEDERAL` varchar(255) DEFAULT NULL,
  `ESTADUAL` varchar(255) DEFAULT NULL,
  `MUNICIPAL` varchar(255) DEFAULT NULL,
  `VIGENCIA_INICIO` varchar(255) DEFAULT NULL,
  `VIGENCIA_FIM` varchar(255) DEFAULT NULL,
  `CHAVE` varchar(255) DEFAULT NULL,
  `VERSAO` varchar(255) DEFAULT NULL,
  `FONTE` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ibpt`
--

LOCK TABLES `ibpt` WRITE;
/*!40000 ALTER TABLE `ibpt` DISABLE KEYS */;
/*!40000 ALTER TABLE `ibpt` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:51

--
-- Table structure for table `log_importacao`
--

DROP TABLE IF EXISTS `log_importacao`;
CREATE TABLE `log_importacao` (
  `ID` varchar(255) DEFAULT NULL,
  `DATA_IMPORTACAO` varchar(255) DEFAULT NULL,
  `HORA_IMPORTACAO` varchar(255) DEFAULT NULL,
  `ERRO` varchar(255) DEFAULT NULL,
  `REGISTRO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `log_importacao`
--

LOCK TABLES `log_importacao` WRITE;
/*!40000 ALTER TABLE `log_importacao` DISABLE KEYS */;
/*!40000 ALTER TABLE `log_importacao` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:56

--
-- Table structure for table `mesa`
--

DROP TABLE IF EXISTS `mesa`;
CREATE TABLE `mesa` (
  `ID` varchar(255) DEFAULT NULL,
  `NUMERO` varchar(255) DEFAULT NULL,
  `QUANTIDADE_CADEIRAS` varchar(255) DEFAULT NULL,
  `QUANTIDADE_CADEIRAS_CRIANCA` varchar(255) DEFAULT NULL,
  `DISPONIVEL` varchar(255) DEFAULT NULL,
  `OBSERVACAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `mesa`
--

LOCK TABLES `mesa` WRITE;
/*!40000 ALTER TABLE `mesa` DISABLE KEYS */;
/*!40000 ALTER TABLE `mesa` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:56

--
-- Table structure for table `nfce_plano_pagamento`
--

DROP TABLE IF EXISTS `nfce_plano_pagamento`;
CREATE TABLE `nfce_plano_pagamento` (
  `ID` varchar(255) DEFAULT NULL,
  `DATA_SOLICITACAO` varchar(255) DEFAULT NULL,
  `DATA_PAGAMENTO` varchar(255) DEFAULT NULL,
  `TIPO_PLANO` varchar(255) DEFAULT NULL,
  `VALOR` varchar(255) DEFAULT NULL,
  `STATUS_PAGAMENTO` varchar(255) DEFAULT NULL,
  `CODIGO_TRANSACAO` varchar(255) DEFAULT NULL,
  `METODO_PAGAMENTO` varchar(255) DEFAULT NULL,
  `CODIGO_TIPO_PAGAMENTO` varchar(255) DEFAULT NULL,
  `DATA_PLANO_EXPIRA` varchar(255) DEFAULT NULL,
  `HASH_REGISTRO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfce_plano_pagamento`
--

LOCK TABLES `nfce_plano_pagamento` WRITE;
/*!40000 ALTER TABLE `nfce_plano_pagamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfce_plano_pagamento` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:54

--
-- Table structure for table `nfe_acesso_xml`
--

DROP TABLE IF EXISTS `nfe_acesso_xml`;
CREATE TABLE `nfe_acesso_xml` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_CABECALHO` varchar(255) DEFAULT NULL,
  `CNPJ` varchar(255) DEFAULT NULL,
  `CPF` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_acesso_xml`
--

LOCK TABLES `nfe_acesso_xml` WRITE;
/*!40000 ALTER TABLE `nfe_acesso_xml` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_acesso_xml` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:58

--
-- Table structure for table `nfe_cana_deducoes_safra`
--

DROP TABLE IF EXISTS `nfe_cana_deducoes_safra`;
CREATE TABLE `nfe_cana_deducoes_safra` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_CANA` varchar(255) DEFAULT NULL,
  `DECRICAO` varchar(255) DEFAULT NULL,
  `VALOR_DEDUCAO` varchar(255) DEFAULT NULL,
  `VALOR_FORNECIMENTO` varchar(255) DEFAULT NULL,
  `VALOR_TOTAL_DEDUCAO` varchar(255) DEFAULT NULL,
  `VALOR_LIQUIDO_FORNECIMENTO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_cana_deducoes_safra`
--

LOCK TABLES `nfe_cana_deducoes_safra` WRITE;
/*!40000 ALTER TABLE `nfe_cana_deducoes_safra` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_cana_deducoes_safra` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:00

--
-- Table structure for table `nfe_cana_fornecimento_diario`
--

DROP TABLE IF EXISTS `nfe_cana_fornecimento_diario`;
CREATE TABLE `nfe_cana_fornecimento_diario` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_CANA` varchar(255) DEFAULT NULL,
  `DIA` varchar(255) DEFAULT NULL,
  `QUANTIDADE` varchar(255) DEFAULT NULL,
  `QUANTIDADE_TOTAL_MES` varchar(255) DEFAULT NULL,
  `QUANTIDADE_TOTAL_ANTERIOR` varchar(255) DEFAULT NULL,
  `QUANTIDADE_TOTAL_GERAL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_cana_fornecimento_diario`
--

LOCK TABLES `nfe_cana_fornecimento_diario` WRITE;
/*!40000 ALTER TABLE `nfe_cana_fornecimento_diario` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_cana_fornecimento_diario` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:59

--
-- Table structure for table `nfe_cana`
--

DROP TABLE IF EXISTS `nfe_cana`;
CREATE TABLE `nfe_cana` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_CABECALHO` varchar(255) DEFAULT NULL,
  `SAFRA` varchar(255) DEFAULT NULL,
  `MES_ANO_REFERENCIA` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_cana`
--

LOCK TABLES `nfe_cana` WRITE;
/*!40000 ALTER TABLE `nfe_cana` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_cana` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:58

--
-- Table structure for table `nfe_configuracao`
--

DROP TABLE IF EXISTS `nfe_configuracao`;
CREATE TABLE `nfe_configuracao` (
  `ID` varchar(255) DEFAULT NULL,
  `CERTIFICADO_DIGITAL_SERIE` varchar(255) DEFAULT NULL,
  `CERTIFICADO_DIGITAL_CAMINHO` varchar(255) DEFAULT NULL,
  `CERTIFICADO_DIGITAL_SENHA` varchar(255) DEFAULT NULL,
  `TIPO_EMISSAO` varchar(255) DEFAULT NULL,
  `FORMATO_IMPRESSAO_DANFE` varchar(255) DEFAULT NULL,
  `PROCESSO_EMISSAO` varchar(255) DEFAULT NULL,
  `VERSAO_PROCESSO_EMISSAO` varchar(255) DEFAULT NULL,
  `CAMINHO_LOGOMARCA` varchar(255) DEFAULT NULL,
  `SALVAR_XML` varchar(255) DEFAULT NULL,
  `CAMINHO_SALVAR_XML` varchar(255) DEFAULT NULL,
  `CAMINHO_SCHEMAS` varchar(255) DEFAULT NULL,
  `CAMINHO_ARQUIVO_DANFE` varchar(255) DEFAULT NULL,
  `CAMINHO_SALVAR_PDF` varchar(255) DEFAULT NULL,
  `WEBSERVICE_UF` varchar(255) DEFAULT NULL,
  `WEBSERVICE_AMBIENTE` varchar(255) DEFAULT NULL,
  `WEBSERVICE_PROXY_HOST` varchar(255) DEFAULT NULL,
  `WEBSERVICE_PROXY_PORTA` varchar(255) DEFAULT NULL,
  `WEBSERVICE_PROXY_USUARIO` varchar(255) DEFAULT NULL,
  `WEBSERVICE_PROXY_SENHA` varchar(255) DEFAULT NULL,
  `WEBSERVICE_VISUALIZAR` varchar(255) DEFAULT NULL,
  `EMAIL_SERVIDOR_SMTP` varchar(255) DEFAULT NULL,
  `EMAIL_PORTA` varchar(255) DEFAULT NULL,
  `EMAIL_USUARIO` varchar(255) DEFAULT NULL,
  `EMAIL_SENHA` varchar(255) DEFAULT NULL,
  `EMAIL_ASSUNTO` varchar(255) DEFAULT NULL,
  `EMAIL_AUTENTICA_SSL` varchar(255) DEFAULT NULL,
  `EMAIL_TEXTO` varchar(255) DEFAULT NULL,
  `NFCE_ID_CSC` varchar(255) DEFAULT NULL,
  `NFCE_CSC` varchar(255) DEFAULT NULL,
  `NFCE_MODELO_IMPRESSAO` varchar(255) DEFAULT NULL,
  `NFCE_IMPRIMIR_ITENS_UMA_LINHA` varchar(255) DEFAULT NULL,
  `NFCE_IMPRIMIR_DESCONTO_POR_ITEM` varchar(255) DEFAULT NULL,
  `NFCE_IMPRIMIR_QRCODE_LATERAL` varchar(255) DEFAULT NULL,
  `NFCE_IMPRIMIR_GTIN` varchar(255) DEFAULT NULL,
  `NFCE_IMPRIMIR_NOME_FANTASIA` varchar(255) DEFAULT NULL,
  `NFCE_IMPRESSAO_TRIBUTOS` varchar(255) DEFAULT NULL,
  `NFCE_MARGEM_SUPERIOR` varchar(255) DEFAULT NULL,
  `NFCE_MARGEM_INFERIOR` varchar(255) DEFAULT NULL,
  `NFCE_MARGEM_DIREITA` varchar(255) DEFAULT NULL,
  `NFCE_MARGEM_ESQUERDA` varchar(255) DEFAULT NULL,
  `NFCE_RESOLUCAO_IMPRESSAO` varchar(255) DEFAULT NULL,
  `RESP_TEC_CNPJ` varchar(255) DEFAULT NULL,
  `RESP_TEC_CONTATO` varchar(255) DEFAULT NULL,
  `RESP_TEC_EMAIL` varchar(255) DEFAULT NULL,
  `RESP_TEC_FONE` varchar(255) DEFAULT NULL,
  `RESP_TEC_ID_CSRT` varchar(255) DEFAULT NULL,
  `RESP_TEC_HASH_CSRT` varchar(255) DEFAULT NULL,
  `NFCE_TAMANHO_FONTE_ITEM` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_configuracao`
--

LOCK TABLES `nfe_configuracao` WRITE;
/*!40000 ALTER TABLE `nfe_configuracao` DISABLE KEYS */;
INSERT INTO `nfe_configuracao` VALUES ('1',NULL,NULL,NULL,NULL,'4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','0','80','S','N','S','N','N','S','0.8','0.8','0.7','0.7','280',NULL,NULL,NULL,NULL,NULL,NULL,'7');
/*!40000 ALTER TABLE `nfe_configuracao` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:11

--
-- Table structure for table `nfe_cte_referenciado`
--

DROP TABLE IF EXISTS `nfe_cte_referenciado`;
CREATE TABLE `nfe_cte_referenciado` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_CABECALHO` varchar(255) DEFAULT NULL,
  `CHAVE_ACESSO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_cte_referenciado`
--

LOCK TABLES `nfe_cte_referenciado` WRITE;
/*!40000 ALTER TABLE `nfe_cte_referenciado` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_cte_referenciado` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:55

--
-- Table structure for table `nfe_cupom_fiscal_referenciado`
--

DROP TABLE IF EXISTS `nfe_cupom_fiscal_referenciado`;
CREATE TABLE `nfe_cupom_fiscal_referenciado` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_CABECALHO` varchar(255) DEFAULT NULL,
  `MODELO_DOCUMENTO_FISCAL` varchar(255) DEFAULT NULL,
  `NUMERO_ORDEM_ECF` varchar(255) DEFAULT NULL,
  `COO` varchar(255) DEFAULT NULL,
  `DATA_EMISSAO_CUPOM` varchar(255) DEFAULT NULL,
  `NUMERO_CAIXA` varchar(255) DEFAULT NULL,
  `NUMERO_SERIE_ECF` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_cupom_fiscal_referenciado`
--

LOCK TABLES `nfe_cupom_fiscal_referenciado` WRITE;
/*!40000 ALTER TABLE `nfe_cupom_fiscal_referenciado` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_cupom_fiscal_referenciado` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:52

--
-- Table structure for table `nfe_declaracao_importacao`
--

DROP TABLE IF EXISTS `nfe_declaracao_importacao`;
CREATE TABLE `nfe_declaracao_importacao` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_DETALHE` varchar(255) DEFAULT NULL,
  `NUMERO_DOCUMENTO` varchar(255) DEFAULT NULL,
  `DATA_REGISTRO` varchar(255) DEFAULT NULL,
  `LOCAL_DESEMBARACO` varchar(255) DEFAULT NULL,
  `UF_DESEMBARACO` varchar(255) DEFAULT NULL,
  `DATA_DESEMBARACO` varchar(255) DEFAULT NULL,
  `VIA_TRANSPORTE` varchar(255) DEFAULT NULL,
  `VALOR_AFRMM` varchar(255) DEFAULT NULL,
  `FORMA_INTERMEDIACAO` varchar(255) DEFAULT NULL,
  `CNPJ` varchar(255) DEFAULT NULL,
  `UF_TERCEIRO` varchar(255) DEFAULT NULL,
  `CODIGO_EXPORTADOR` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_declaracao_importacao`
--

LOCK TABLES `nfe_declaracao_importacao` WRITE;
/*!40000 ALTER TABLE `nfe_declaracao_importacao` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_declaracao_importacao` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:09

--
-- Table structure for table `nfe_destinatario`
--

DROP TABLE IF EXISTS `nfe_destinatario`;
CREATE TABLE `nfe_destinatario` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_CABECALHO` varchar(255) DEFAULT NULL,
  `CNPJ` varchar(255) DEFAULT NULL,
  `CPF` varchar(255) DEFAULT NULL,
  `ESTRANGEIRO_IDENTIFICACAO` varchar(255) DEFAULT NULL,
  `NOME` varchar(255) DEFAULT NULL,
  `LOGRADOURO` varchar(255) DEFAULT NULL,
  `NUMERO` varchar(255) DEFAULT NULL,
  `COMPLEMENTO` varchar(255) DEFAULT NULL,
  `BAIRRO` varchar(255) DEFAULT NULL,
  `CODIGO_MUNICIPIO` varchar(255) DEFAULT NULL,
  `NOME_MUNICIPIO` varchar(255) DEFAULT NULL,
  `UF` varchar(255) DEFAULT NULL,
  `CEP` varchar(255) DEFAULT NULL,
  `CODIGO_PAIS` varchar(255) DEFAULT NULL,
  `NOME_PAIS` varchar(255) DEFAULT NULL,
  `TELEFONE` varchar(255) DEFAULT NULL,
  `INDICADOR_IE` varchar(255) DEFAULT NULL,
  `INSCRICAO_ESTADUAL` varchar(255) DEFAULT NULL,
  `SUFRAMA` varchar(255) DEFAULT NULL,
  `INSCRICAO_MUNICIPAL` varchar(255) DEFAULT NULL,
  `EMAIL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_destinatario`
--

LOCK TABLES `nfe_destinatario` WRITE;
/*!40000 ALTER TABLE `nfe_destinatario` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_destinatario` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:52

--
-- Table structure for table `nfe_det_especifico_armamento`
--

DROP TABLE IF EXISTS `nfe_det_especifico_armamento`;
CREATE TABLE `nfe_det_especifico_armamento` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_DETALHE` varchar(255) DEFAULT NULL,
  `TIPO_ARMA` varchar(255) DEFAULT NULL,
  `NUMERO_SERIE_ARMA` varchar(255) DEFAULT NULL,
  `NUMERO_SERIE_CANO` varchar(255) DEFAULT NULL,
  `DESCRICAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_det_especifico_armamento`
--

LOCK TABLES `nfe_det_especifico_armamento` WRITE;
/*!40000 ALTER TABLE `nfe_det_especifico_armamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_det_especifico_armamento` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:57

--
-- Table structure for table `nfe_det_especifico_combustivel`
--

DROP TABLE IF EXISTS `nfe_det_especifico_combustivel`;
CREATE TABLE `nfe_det_especifico_combustivel` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_DETALHE` varchar(255) DEFAULT NULL,
  `CODIGO_ANP` varchar(255) DEFAULT NULL,
  `DESCRICAO_ANP` varchar(255) DEFAULT NULL,
  `PERCENTUAL_GLP` varchar(255) DEFAULT NULL,
  `PERCENTUAL_GAS_NACIONAL` varchar(255) DEFAULT NULL,
  `PERCENTUAL_GAS_IMPORTADO` varchar(255) DEFAULT NULL,
  `VALOR_PARTIDA` varchar(255) DEFAULT NULL,
  `CODIF` varchar(255) DEFAULT NULL,
  `QUANTIDADE_TEMP_AMBIENTE` varchar(255) DEFAULT NULL,
  `UF_CONSUMO` varchar(255) DEFAULT NULL,
  `CIDE_BASE_CALCULO` varchar(255) DEFAULT NULL,
  `CIDE_ALIQUOTA` varchar(255) DEFAULT NULL,
  `CIDE_VALOR` varchar(255) DEFAULT NULL,
  `ENCERRANTE_BICO` varchar(255) DEFAULT NULL,
  `ENCERRANTE_BOMBA` varchar(255) DEFAULT NULL,
  `ENCERRANTE_TANQUE` varchar(255) DEFAULT NULL,
  `ENCERRANTE_VALOR_INICIO` varchar(255) DEFAULT NULL,
  `ENCERRANTE_VALOR_FIM` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_det_especifico_combustivel`
--

LOCK TABLES `nfe_det_especifico_combustivel` WRITE;
/*!40000 ALTER TABLE `nfe_det_especifico_combustivel` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_det_especifico_combustivel` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:05

--
-- Table structure for table `nfe_det_especifico_medicamento`
--

DROP TABLE IF EXISTS `nfe_det_especifico_medicamento`;
CREATE TABLE `nfe_det_especifico_medicamento` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_DETALHE` varchar(255) DEFAULT NULL,
  `CODIGO_ANVISA` varchar(255) DEFAULT NULL,
  `MOTIVO_ISENCAO` varchar(255) DEFAULT NULL,
  `PRECO_MAXIMO_CONSUMIDOR` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_det_especifico_medicamento`
--

LOCK TABLES `nfe_det_especifico_medicamento` WRITE;
/*!40000 ALTER TABLE `nfe_det_especifico_medicamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_det_especifico_medicamento` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:02

--
-- Table structure for table `nfe_det_especifico_veiculo`
--

DROP TABLE IF EXISTS `nfe_det_especifico_veiculo`;
CREATE TABLE `nfe_det_especifico_veiculo` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_DETALHE` varchar(255) DEFAULT NULL,
  `TIPO_OPERACAO` varchar(255) DEFAULT NULL,
  `CHASSI` varchar(255) DEFAULT NULL,
  `COR` varchar(255) DEFAULT NULL,
  `DESCRICAO_COR` varchar(255) DEFAULT NULL,
  `POTENCIA_MOTOR` varchar(255) DEFAULT NULL,
  `CILINDRADAS` varchar(255) DEFAULT NULL,
  `PESO_LIQUIDO` varchar(255) DEFAULT NULL,
  `PESO_BRUTO` varchar(255) DEFAULT NULL,
  `NUMERO_SERIE` varchar(255) DEFAULT NULL,
  `TIPO_COMBUSTIVEL` varchar(255) DEFAULT NULL,
  `NUMERO_MOTOR` varchar(255) DEFAULT NULL,
  `CAPACIDADE_MAXIMA_TRACAO` varchar(255) DEFAULT NULL,
  `DISTANCIA_EIXOS` varchar(255) DEFAULT NULL,
  `ANO_MODELO` varchar(255) DEFAULT NULL,
  `ANO_FABRICACAO` varchar(255) DEFAULT NULL,
  `TIPO_PINTURA` varchar(255) DEFAULT NULL,
  `TIPO_VEICULO` varchar(255) DEFAULT NULL,
  `ESPECIE_VEICULO` varchar(255) DEFAULT NULL,
  `CONDICAO_VIN` varchar(255) DEFAULT NULL,
  `CONDICAO_VEICULO` varchar(255) DEFAULT NULL,
  `CODIGO_MARCA_MODELO` varchar(255) DEFAULT NULL,
  `CODIGO_COR_DENATRAN` varchar(255) DEFAULT NULL,
  `LOTACAO_MAXIMA` varchar(255) DEFAULT NULL,
  `RESTRICAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_det_especifico_veiculo`
--

LOCK TABLES `nfe_det_especifico_veiculo` WRITE;
/*!40000 ALTER TABLE `nfe_det_especifico_veiculo` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_det_especifico_veiculo` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:06

--
-- Table structure for table `nfe_detalhe_imposto_cofins_st`
--

DROP TABLE IF EXISTS `nfe_detalhe_imposto_cofins_st`;
CREATE TABLE `nfe_detalhe_imposto_cofins_st` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_DETALHE` varchar(255) DEFAULT NULL,
  `BASE_CALCULO_COFINS_ST` varchar(255) DEFAULT NULL,
  `ALIQUOTA_COFINS_ST_PERCENTUAL` varchar(255) DEFAULT NULL,
  `QUANTIDADE_VENDIDA_COFINS_ST` varchar(255) DEFAULT NULL,
  `ALIQUOTA_COFINS_ST_REAIS` varchar(255) DEFAULT NULL,
  `VALOR_COFINS_ST` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_detalhe_imposto_cofins_st`
--

LOCK TABLES `nfe_detalhe_imposto_cofins_st` WRITE;
/*!40000 ALTER TABLE `nfe_detalhe_imposto_cofins_st` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_detalhe_imposto_cofins_st` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:50

--
-- Table structure for table `nfe_detalhe_imposto_cofins`
--

DROP TABLE IF EXISTS `nfe_detalhe_imposto_cofins`;
CREATE TABLE `nfe_detalhe_imposto_cofins` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_DETALHE` varchar(255) DEFAULT NULL,
  `CST_COFINS` varchar(255) DEFAULT NULL,
  `BASE_CALCULO_COFINS` varchar(255) DEFAULT NULL,
  `ALIQUOTA_COFINS_PERCENTUAL` varchar(255) DEFAULT NULL,
  `QUANTIDADE_VENDIDA` varchar(255) DEFAULT NULL,
  `ALIQUOTA_COFINS_REAIS` varchar(255) DEFAULT NULL,
  `VALOR_COFINS` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_detalhe_imposto_cofins`
--

LOCK TABLES `nfe_detalhe_imposto_cofins` WRITE;
/*!40000 ALTER TABLE `nfe_detalhe_imposto_cofins` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_detalhe_imposto_cofins` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:09

--
-- Table structure for table `nfe_detalhe_imposto_icms_ufdest`
--

DROP TABLE IF EXISTS `nfe_detalhe_imposto_icms_ufdest`;
CREATE TABLE `nfe_detalhe_imposto_icms_ufdest` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_DETALHE` varchar(255) DEFAULT NULL,
  `VALOR_BC_ICMS_UF_DESTINO` varchar(255) DEFAULT NULL,
  `VALOR_BC_FCP_UF_DESTINO` varchar(255) DEFAULT NULL,
  `PERCENTUAL_FCP_UF_DESTINO` varchar(255) DEFAULT NULL,
  `ALIQUOTA_INTERNA_UF_DESTINO` varchar(255) DEFAULT NULL,
  `ALIQUOTA_INTERESDATUAL_UF_ENVOLVIDAS` varchar(255) DEFAULT NULL,
  `PERCENTUAL_PROVISORIO_PARTILHA_ICMS` varchar(255) DEFAULT NULL,
  `VALOR_ICMS_FCP_UF_DESTINO` varchar(255) DEFAULT NULL,
  `VALOR_INTERESTADUAL_UF_DESTINO` varchar(255) DEFAULT NULL,
  `VALOR_INTERESTADUAL_UF_REMETENTE` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_detalhe_imposto_icms_ufdest`
--

LOCK TABLES `nfe_detalhe_imposto_icms_ufdest` WRITE;
/*!40000 ALTER TABLE `nfe_detalhe_imposto_icms_ufdest` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_detalhe_imposto_icms_ufdest` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:55

--
-- Table structure for table `nfe_detalhe_imposto_icms`
--

DROP TABLE IF EXISTS `nfe_detalhe_imposto_icms`;
CREATE TABLE `nfe_detalhe_imposto_icms` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_DETALHE` varchar(255) DEFAULT NULL,
  `ORIGEM_MERCADORIA` varchar(255) DEFAULT NULL,
  `CST_ICMS` varchar(255) DEFAULT NULL,
  `CSOSN` varchar(255) DEFAULT NULL,
  `MODALIDADE_BC_ICMS` varchar(255) DEFAULT NULL,
  `PERCENTUAL_REDUCAO_BC_ICMS` varchar(255) DEFAULT NULL,
  `VALOR_BC_ICMS` varchar(255) DEFAULT NULL,
  `ALIQUOTA_ICMS` varchar(255) DEFAULT NULL,
  `VALOR_ICMS_OPERACAO` varchar(255) DEFAULT NULL,
  `PERCENTUAL_DIFERIMENTO` varchar(255) DEFAULT NULL,
  `VALOR_ICMS_DIFERIDO` varchar(255) DEFAULT NULL,
  `VALOR_ICMS` varchar(255) DEFAULT NULL,
  `BASE_CALCULO_FCP` varchar(255) DEFAULT NULL,
  `PERCENTUAL_FCP` varchar(255) DEFAULT NULL,
  `VALOR_FCP` varchar(255) DEFAULT NULL,
  `MODALIDADE_BC_ICMS_ST` varchar(255) DEFAULT NULL,
  `PERCENTUAL_MVA_ICMS_ST` varchar(255) DEFAULT NULL,
  `PERCENTUAL_REDUCAO_BC_ICMS_ST` varchar(255) DEFAULT NULL,
  `VALOR_BASE_CALCULO_ICMS_ST` varchar(255) DEFAULT NULL,
  `ALIQUOTA_ICMS_ST` varchar(255) DEFAULT NULL,
  `VALOR_ICMS_ST` varchar(255) DEFAULT NULL,
  `BASE_CALCULO_FCP_ST` varchar(255) DEFAULT NULL,
  `PERCENTUAL_FCP_ST` varchar(255) DEFAULT NULL,
  `VALOR_FCP_ST` varchar(255) DEFAULT NULL,
  `UF_ST` varchar(255) DEFAULT NULL,
  `PERCENTUAL_BC_OPERACAO_PROPRIA` varchar(255) DEFAULT NULL,
  `VALOR_BC_ICMS_ST_RETIDO` varchar(255) DEFAULT NULL,
  `ALIQUOTA_SUPORTADA_CONSUMIDOR` varchar(255) DEFAULT NULL,
  `VALOR_ICMS_SUBSTITUTO` varchar(255) DEFAULT NULL,
  `VALOR_ICMS_ST_RETIDO` varchar(255) DEFAULT NULL,
  `BASE_CALCULO_FCP_ST_RETIDO` varchar(255) DEFAULT NULL,
  `PERCENTUAL_FCP_ST_RETIDO` varchar(255) DEFAULT NULL,
  `VALOR_FCP_ST_RETIDO` varchar(255) DEFAULT NULL,
  `MOTIVO_DESONERACAO_ICMS` varchar(255) DEFAULT NULL,
  `VALOR_ICMS_DESONERADO` varchar(255) DEFAULT NULL,
  `ALIQUOTA_CREDITO_ICMS_SN` varchar(255) DEFAULT NULL,
  `VALOR_CREDITO_ICMS_SN` varchar(255) DEFAULT NULL,
  `VALOR_BC_ICMS_ST_DESTINO` varchar(255) DEFAULT NULL,
  `VALOR_ICMS_ST_DESTINO` varchar(255) DEFAULT NULL,
  `PERCENTUAL_REDUCAO_BC_EFETIVO` varchar(255) DEFAULT NULL,
  `VALOR_BC_EFETIVO` varchar(255) DEFAULT NULL,
  `ALIQUOTA_ICMS_EFETIVO` varchar(255) DEFAULT NULL,
  `VALOR_ICMS_EFETIVO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_detalhe_imposto_icms`
--

LOCK TABLES `nfe_detalhe_imposto_icms` WRITE;
/*!40000 ALTER TABLE `nfe_detalhe_imposto_icms` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_detalhe_imposto_icms` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:00

--
-- Table structure for table `nfe_detalhe_imposto_ii`
--

DROP TABLE IF EXISTS `nfe_detalhe_imposto_ii`;
CREATE TABLE `nfe_detalhe_imposto_ii` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_DETALHE` varchar(255) DEFAULT NULL,
  `VALOR_BC_II` varchar(255) DEFAULT NULL,
  `VALOR_DESPESAS_ADUANEIRAS` varchar(255) DEFAULT NULL,
  `VALOR_IMPOSTO_IMPORTACAO` varchar(255) DEFAULT NULL,
  `VALOR_IOF` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_detalhe_imposto_ii`
--

LOCK TABLES `nfe_detalhe_imposto_ii` WRITE;
/*!40000 ALTER TABLE `nfe_detalhe_imposto_ii` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_detalhe_imposto_ii` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:07

--
-- Table structure for table `nfe_detalhe_imposto_ipi`
--

DROP TABLE IF EXISTS `nfe_detalhe_imposto_ipi`;
CREATE TABLE `nfe_detalhe_imposto_ipi` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_DETALHE` varchar(255) DEFAULT NULL,
  `CNPJ_PRODUTOR` varchar(255) DEFAULT NULL,
  `CODIGO_SELO_IPI` varchar(255) DEFAULT NULL,
  `QUANTIDADE_SELO_IPI` varchar(255) DEFAULT NULL,
  `ENQUADRAMENTO_LEGAL_IPI` varchar(255) DEFAULT NULL,
  `CST_IPI` varchar(255) DEFAULT NULL,
  `VALOR_BASE_CALCULO_IPI` varchar(255) DEFAULT NULL,
  `QUANTIDADE_UNIDADE_TRIBUTAVEL` varchar(255) DEFAULT NULL,
  `VALOR_UNIDADE_TRIBUTAVEL` varchar(255) DEFAULT NULL,
  `ALIQUOTA_IPI` varchar(255) DEFAULT NULL,
  `VALOR_IPI` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_detalhe_imposto_ipi`
--

LOCK TABLES `nfe_detalhe_imposto_ipi` WRITE;
/*!40000 ALTER TABLE `nfe_detalhe_imposto_ipi` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_detalhe_imposto_ipi` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:58

--
-- Table structure for table `nfe_detalhe_imposto_issqn`
--

DROP TABLE IF EXISTS `nfe_detalhe_imposto_issqn`;
CREATE TABLE `nfe_detalhe_imposto_issqn` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_DETALHE` varchar(255) DEFAULT NULL,
  `BASE_CALCULO_ISSQN` varchar(255) DEFAULT NULL,
  `ALIQUOTA_ISSQN` varchar(255) DEFAULT NULL,
  `VALOR_ISSQN` varchar(255) DEFAULT NULL,
  `MUNICIPIO_ISSQN` varchar(255) DEFAULT NULL,
  `ITEM_LISTA_SERVICOS` varchar(255) DEFAULT NULL,
  `VALOR_DEDUCAO` varchar(255) DEFAULT NULL,
  `VALOR_OUTRAS_RETENCOES` varchar(255) DEFAULT NULL,
  `VALOR_DESCONTO_INCONDICIONADO` varchar(255) DEFAULT NULL,
  `VALOR_DESCONTO_CONDICIONADO` varchar(255) DEFAULT NULL,
  `VALOR_RETENCAO_ISS` varchar(255) DEFAULT NULL,
  `INDICADOR_EXIGIBILIDADE_ISS` varchar(255) DEFAULT NULL,
  `CODIGO_SERVICO` varchar(255) DEFAULT NULL,
  `MUNICIPIO_INCIDENCIA` varchar(255) DEFAULT NULL,
  `PAIS_SEVICO_PRESTADO` varchar(255) DEFAULT NULL,
  `NUMERO_PROCESSO` varchar(255) DEFAULT NULL,
  `INDICADOR_INCENTIVO_FISCAL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_detalhe_imposto_issqn`
--

LOCK TABLES `nfe_detalhe_imposto_issqn` WRITE;
/*!40000 ALTER TABLE `nfe_detalhe_imposto_issqn` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_detalhe_imposto_issqn` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:07

--
-- Table structure for table `nfe_detalhe_imposto_pis_st`
--

DROP TABLE IF EXISTS `nfe_detalhe_imposto_pis_st`;
CREATE TABLE `nfe_detalhe_imposto_pis_st` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_DETALHE` varchar(255) DEFAULT NULL,
  `VALOR_BASE_CALCULO_PIS_ST` varchar(255) DEFAULT NULL,
  `ALIQUOTA_PIS_ST_PERCENTUAL` varchar(255) DEFAULT NULL,
  `QUANTIDADE_VENDIDA_PIS_ST` varchar(255) DEFAULT NULL,
  `ALIQUOTA_PIS_ST_REAIS` varchar(255) DEFAULT NULL,
  `VALOR_PIS_ST` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_detalhe_imposto_pis_st`
--

LOCK TABLES `nfe_detalhe_imposto_pis_st` WRITE;
/*!40000 ALTER TABLE `nfe_detalhe_imposto_pis_st` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_detalhe_imposto_pis_st` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:04

--
-- Table structure for table `nfe_detalhe_imposto_pis`
--

DROP TABLE IF EXISTS `nfe_detalhe_imposto_pis`;
CREATE TABLE `nfe_detalhe_imposto_pis` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_DETALHE` varchar(255) DEFAULT NULL,
  `CST_PIS` varchar(255) DEFAULT NULL,
  `VALOR_BASE_CALCULO_PIS` varchar(255) DEFAULT NULL,
  `ALIQUOTA_PIS_PERCENTUAL` varchar(255) DEFAULT NULL,
  `VALOR_PIS` varchar(255) DEFAULT NULL,
  `QUANTIDADE_VENDIDA` varchar(255) DEFAULT NULL,
  `ALIQUOTA_PIS_REAIS` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_detalhe_imposto_pis`
--

LOCK TABLES `nfe_detalhe_imposto_pis` WRITE;
/*!40000 ALTER TABLE `nfe_detalhe_imposto_pis` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_detalhe_imposto_pis` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:51

--
-- Table structure for table `nfe_detalhe`
--

DROP TABLE IF EXISTS `nfe_detalhe`;
CREATE TABLE `nfe_detalhe` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_CABECALHO` varchar(255) DEFAULT NULL,
  `NUMERO_ITEM` varchar(255) DEFAULT NULL,
  `CODIGO_PRODUTO` varchar(255) DEFAULT NULL,
  `GTIN` varchar(255) DEFAULT NULL,
  `NOME_PRODUTO` varchar(255) DEFAULT NULL,
  `NCM` varchar(255) DEFAULT NULL,
  `NVE` varchar(255) DEFAULT NULL,
  `CEST` varchar(255) DEFAULT NULL,
  `INDICADOR_ESCALA_RELEVANTE` varchar(255) DEFAULT NULL,
  `CNPJ_FABRICANTE` varchar(255) DEFAULT NULL,
  `CODIGO_BENEFICIO_FISCAL` varchar(255) DEFAULT NULL,
  `EX_TIPI` varchar(255) DEFAULT NULL,
  `CFOP` varchar(255) DEFAULT NULL,
  `UNIDADE_COMERCIAL` varchar(255) DEFAULT NULL,
  `QUANTIDADE_COMERCIAL` varchar(255) DEFAULT NULL,
  `NUMERO_PEDIDO_COMPRA` varchar(255) DEFAULT NULL,
  `ITEM_PEDIDO_COMPRA` varchar(255) DEFAULT NULL,
  `NUMERO_FCI` varchar(255) DEFAULT NULL,
  `NUMERO_RECOPI` varchar(255) DEFAULT NULL,
  `VALOR_UNITARIO_COMERCIAL` varchar(255) DEFAULT NULL,
  `VALOR_BRUTO_PRODUTO` varchar(255) DEFAULT NULL,
  `GTIN_UNIDADE_TRIBUTAVEL` varchar(255) DEFAULT NULL,
  `UNIDADE_TRIBUTAVEL` varchar(255) DEFAULT NULL,
  `QUANTIDADE_TRIBUTAVEL` varchar(255) DEFAULT NULL,
  `VALOR_UNITARIO_TRIBUTAVEL` varchar(255) DEFAULT NULL,
  `VALOR_FRETE` varchar(255) DEFAULT NULL,
  `VALOR_SEGURO` varchar(255) DEFAULT NULL,
  `VALOR_DESCONTO` varchar(255) DEFAULT NULL,
  `VALOR_OUTRAS_DESPESAS` varchar(255) DEFAULT NULL,
  `ENTRA_TOTAL` varchar(255) DEFAULT NULL,
  `VALOR_TOTAL_TRIBUTOS` varchar(255) DEFAULT NULL,
  `PERCENTUAL_DEVOLVIDO` varchar(255) DEFAULT NULL,
  `VALOR_IPI_DEVOLVIDO` varchar(255) DEFAULT NULL,
  `INFORMACOES_ADICIONAIS` varchar(255) DEFAULT NULL,
  `VALOR_SUBTOTAL` varchar(255) DEFAULT NULL,
  `VALOR_TOTAL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_detalhe`
--

LOCK TABLES `nfe_detalhe` WRITE;
/*!40000 ALTER TABLE `nfe_detalhe` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_detalhe` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:00

--
-- Table structure for table `nfe_duplicata`
--

DROP TABLE IF EXISTS `nfe_duplicata`;
CREATE TABLE `nfe_duplicata` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_FATURA` varchar(255) DEFAULT NULL,
  `NUMERO` varchar(255) DEFAULT NULL,
  `DATA_VENCIMENTO` varchar(255) DEFAULT NULL,
  `VALOR` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_duplicata`
--

LOCK TABLES `nfe_duplicata` WRITE;
/*!40000 ALTER TABLE `nfe_duplicata` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_duplicata` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:01

--
-- Table structure for table `nfe_emitente`
--

DROP TABLE IF EXISTS `nfe_emitente`;
CREATE TABLE `nfe_emitente` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_CABECALHO` varchar(255) DEFAULT NULL,
  `CNPJ` varchar(255) DEFAULT NULL,
  `CPF` varchar(255) DEFAULT NULL,
  `NOME` varchar(255) DEFAULT NULL,
  `FANTASIA` varchar(255) DEFAULT NULL,
  `LOGRADOURO` varchar(255) DEFAULT NULL,
  `NUMERO` varchar(255) DEFAULT NULL,
  `COMPLEMENTO` varchar(255) DEFAULT NULL,
  `BAIRRO` varchar(255) DEFAULT NULL,
  `CODIGO_MUNICIPIO` varchar(255) DEFAULT NULL,
  `NOME_MUNICIPIO` varchar(255) DEFAULT NULL,
  `UF` varchar(255) DEFAULT NULL,
  `CEP` varchar(255) DEFAULT NULL,
  `CODIGO_PAIS` varchar(255) DEFAULT NULL,
  `NOME_PAIS` varchar(255) DEFAULT NULL,
  `TELEFONE` varchar(255) DEFAULT NULL,
  `INSCRICAO_ESTADUAL` varchar(255) DEFAULT NULL,
  `INSCRICAO_ESTADUAL_ST` varchar(255) DEFAULT NULL,
  `INSCRICAO_MUNICIPAL` varchar(255) DEFAULT NULL,
  `CNAE` varchar(255) DEFAULT NULL,
  `CRT` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_emitente`
--

LOCK TABLES `nfe_emitente` WRITE;
/*!40000 ALTER TABLE `nfe_emitente` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_emitente` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:03

--
-- Table structure for table `nfe_exportacao`
--

DROP TABLE IF EXISTS `nfe_exportacao`;
CREATE TABLE `nfe_exportacao` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_DETALHE` varchar(255) DEFAULT NULL,
  `DRAWBACK` varchar(255) DEFAULT NULL,
  `NUMERO_REGISTRO` varchar(255) DEFAULT NULL,
  `CHAVE_ACESSO` varchar(255) DEFAULT NULL,
  `QUANTIDADE` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_exportacao`
--

LOCK TABLES `nfe_exportacao` WRITE;
/*!40000 ALTER TABLE `nfe_exportacao` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_exportacao` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:52

--
-- Table structure for table `nfe_fatura`
--

DROP TABLE IF EXISTS `nfe_fatura`;
CREATE TABLE `nfe_fatura` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_CABECALHO` varchar(255) DEFAULT NULL,
  `NUMERO` varchar(255) DEFAULT NULL,
  `VALOR_ORIGINAL` varchar(255) DEFAULT NULL,
  `VALOR_DESCONTO` varchar(255) DEFAULT NULL,
  `VALOR_LIQUIDO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_fatura`
--

LOCK TABLES `nfe_fatura` WRITE;
/*!40000 ALTER TABLE `nfe_fatura` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_fatura` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:59

--
-- Table structure for table `nfe_importacao_detalhe`
--

DROP TABLE IF EXISTS `nfe_importacao_detalhe`;
CREATE TABLE `nfe_importacao_detalhe` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_DECLARACAO_IMPORTACAO` varchar(255) DEFAULT NULL,
  `NUMERO_ADICAO` varchar(255) DEFAULT NULL,
  `NUMERO_SEQUENCIAL` varchar(255) DEFAULT NULL,
  `CODIGO_FABRICANTE_ESTRANGEIRO` varchar(255) DEFAULT NULL,
  `VALOR_DESCONTO` varchar(255) DEFAULT NULL,
  `DRAWBACK` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_importacao_detalhe`
--

LOCK TABLES `nfe_importacao_detalhe` WRITE;
/*!40000 ALTER TABLE `nfe_importacao_detalhe` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_importacao_detalhe` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:04

--
-- Table structure for table `nfe_informacao_pagamento`
--

DROP TABLE IF EXISTS `nfe_informacao_pagamento`;
CREATE TABLE `nfe_informacao_pagamento` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_CABECALHO` varchar(255) DEFAULT NULL,
  `INDICADOR_PAGAMENTO` varchar(255) DEFAULT NULL,
  `MEIO_PAGAMENTO` varchar(255) DEFAULT NULL,
  `VALOR` varchar(255) DEFAULT NULL,
  `TIPO_INTEGRACAO` varchar(255) DEFAULT NULL,
  `CNPJ_OPERADORA_CARTAO` varchar(255) DEFAULT NULL,
  `BANDEIRA` varchar(255) DEFAULT NULL,
  `NUMERO_AUTORIZACAO` varchar(255) DEFAULT NULL,
  `TROCO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_informacao_pagamento`
--

LOCK TABLES `nfe_informacao_pagamento` WRITE;
/*!40000 ALTER TABLE `nfe_informacao_pagamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_informacao_pagamento` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:05

--
-- Table structure for table `nfe_item_rastreado`
--

DROP TABLE IF EXISTS `nfe_item_rastreado`;
CREATE TABLE `nfe_item_rastreado` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_DETALHE` varchar(255) DEFAULT NULL,
  `NUMERO_LOTE` varchar(255) DEFAULT NULL,
  `QUANTIDADE_ITENS` varchar(255) DEFAULT NULL,
  `DATA_FABRICACAO` varchar(255) DEFAULT NULL,
  `DATA_VALIDADE` varchar(255) DEFAULT NULL,
  `CODIGO_AGREGACAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_item_rastreado`
--

LOCK TABLES `nfe_item_rastreado` WRITE;
/*!40000 ALTER TABLE `nfe_item_rastreado` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_item_rastreado` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:53

--
-- Table structure for table `nfe_local_entrega`
--

DROP TABLE IF EXISTS `nfe_local_entrega`;
CREATE TABLE `nfe_local_entrega` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_CABECALHO` varchar(255) DEFAULT NULL,
  `CNPJ` varchar(255) DEFAULT NULL,
  `CPF` varchar(255) DEFAULT NULL,
  `NOME_RECEBEDOR` varchar(255) DEFAULT NULL,
  `LOGRADOURO` varchar(255) DEFAULT NULL,
  `NUMERO` varchar(255) DEFAULT NULL,
  `COMPLEMENTO` varchar(255) DEFAULT NULL,
  `BAIRRO` varchar(255) DEFAULT NULL,
  `CODIGO_MUNICIPIO` varchar(255) DEFAULT NULL,
  `NOME_MUNICIPIO` varchar(255) DEFAULT NULL,
  `UF` varchar(255) DEFAULT NULL,
  `CEP` varchar(255) DEFAULT NULL,
  `CODIGO_PAIS` varchar(255) DEFAULT NULL,
  `NOME_PAIS` varchar(255) DEFAULT NULL,
  `TELEFONE` varchar(255) DEFAULT NULL,
  `EMAIL` varchar(255) DEFAULT NULL,
  `INSCRICAO_ESTADUAL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_local_entrega`
--

LOCK TABLES `nfe_local_entrega` WRITE;
/*!40000 ALTER TABLE `nfe_local_entrega` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_local_entrega` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:01

--
-- Table structure for table `nfe_local_retirada`
--

DROP TABLE IF EXISTS `nfe_local_retirada`;
CREATE TABLE `nfe_local_retirada` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_CABECALHO` varchar(255) DEFAULT NULL,
  `CNPJ` varchar(255) DEFAULT NULL,
  `CPF` varchar(255) DEFAULT NULL,
  `NOME_EXPEDIDOR` varchar(255) DEFAULT NULL,
  `LOGRADOURO` varchar(255) DEFAULT NULL,
  `NUMERO` varchar(255) DEFAULT NULL,
  `COMPLEMENTO` varchar(255) DEFAULT NULL,
  `BAIRRO` varchar(255) DEFAULT NULL,
  `CODIGO_MUNICIPIO` varchar(255) DEFAULT NULL,
  `NOME_MUNICIPIO` varchar(255) DEFAULT NULL,
  `UF` varchar(255) DEFAULT NULL,
  `CEP` varchar(255) DEFAULT NULL,
  `CODIGO_PAIS` varchar(255) DEFAULT NULL,
  `NOME_PAIS` varchar(255) DEFAULT NULL,
  `TELEFONE` varchar(255) DEFAULT NULL,
  `EMAIL` varchar(255) DEFAULT NULL,
  `INSCRICAO_ESTADUAL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_local_retirada`
--

LOCK TABLES `nfe_local_retirada` WRITE;
/*!40000 ALTER TABLE `nfe_local_retirada` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_local_retirada` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:01

--
-- Table structure for table `nfe_nf_referenciada`
--

DROP TABLE IF EXISTS `nfe_nf_referenciada`;
CREATE TABLE `nfe_nf_referenciada` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_CABECALHO` varchar(255) DEFAULT NULL,
  `CODIGO_UF` varchar(255) DEFAULT NULL,
  `ANO_MES` varchar(255) DEFAULT NULL,
  `CNPJ` varchar(255) DEFAULT NULL,
  `MODELO` varchar(255) DEFAULT NULL,
  `SERIE` varchar(255) DEFAULT NULL,
  `NUMERO_NF` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_nf_referenciada`
--

LOCK TABLES `nfe_nf_referenciada` WRITE;
/*!40000 ALTER TABLE `nfe_nf_referenciada` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_nf_referenciada` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:10

--
-- Table structure for table `nfe_numero_inutilizado`
--

DROP TABLE IF EXISTS `nfe_numero_inutilizado`;
CREATE TABLE `nfe_numero_inutilizado` (
  `ID` varchar(255) DEFAULT NULL,
  `SERIE` varchar(255) DEFAULT NULL,
  `NUMERO` varchar(255) DEFAULT NULL,
  `DATA_INUTILIZACAO` varchar(255) DEFAULT NULL,
  `OBSERVACAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_numero_inutilizado`
--

LOCK TABLES `nfe_numero_inutilizado` WRITE;
/*!40000 ALTER TABLE `nfe_numero_inutilizado` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_numero_inutilizado` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:56

--
-- Table structure for table `nfe_numero`
--

DROP TABLE IF EXISTS `nfe_numero`;
CREATE TABLE `nfe_numero` (
  `ID` varchar(255) DEFAULT NULL,
  `MODELO` varchar(255) DEFAULT NULL,
  `SERIE` varchar(255) DEFAULT NULL,
  `NUMERO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_numero`
--

LOCK TABLES `nfe_numero` WRITE;
/*!40000 ALTER TABLE `nfe_numero` DISABLE KEYS */;
INSERT INTO `nfe_numero` VALUES ('1','65','1','1');
/*!40000 ALTER TABLE `nfe_numero` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:05

--
-- Table structure for table `nfe_processo_referenciado`
--

DROP TABLE IF EXISTS `nfe_processo_referenciado`;
CREATE TABLE `nfe_processo_referenciado` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_CABECALHO` varchar(255) DEFAULT NULL,
  `IDENTIFICADOR` varchar(255) DEFAULT NULL,
  `ORIGEM` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_processo_referenciado`
--

LOCK TABLES `nfe_processo_referenciado` WRITE;
/*!40000 ALTER TABLE `nfe_processo_referenciado` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_processo_referenciado` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:09

--
-- Table structure for table `nfe_prod_rural_referenciada`
--

DROP TABLE IF EXISTS `nfe_prod_rural_referenciada`;
CREATE TABLE `nfe_prod_rural_referenciada` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_CABECALHO` varchar(255) DEFAULT NULL,
  `CODIGO_UF` varchar(255) DEFAULT NULL,
  `ANO_MES` varchar(255) DEFAULT NULL,
  `CNPJ` varchar(255) DEFAULT NULL,
  `CPF` varchar(255) DEFAULT NULL,
  `INSCRICAO_ESTADUAL` varchar(255) DEFAULT NULL,
  `MODELO` varchar(255) DEFAULT NULL,
  `SERIE` varchar(255) DEFAULT NULL,
  `NUMERO_NF` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_prod_rural_referenciada`
--

LOCK TABLES `nfe_prod_rural_referenciada` WRITE;
/*!40000 ALTER TABLE `nfe_prod_rural_referenciada` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_prod_rural_referenciada` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:03

--
-- Table structure for table `nfe_referenciada`
--

DROP TABLE IF EXISTS `nfe_referenciada`;
CREATE TABLE `nfe_referenciada` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_CABECALHO` varchar(255) DEFAULT NULL,
  `CHAVE_ACESSO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_referenciada`
--

LOCK TABLES `nfe_referenciada` WRITE;
/*!40000 ALTER TABLE `nfe_referenciada` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_referenciada` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:04

--
-- Table structure for table `nfe_responsavel_tecnico`
--

DROP TABLE IF EXISTS `nfe_responsavel_tecnico`;
CREATE TABLE `nfe_responsavel_tecnico` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_CABECALHO` varchar(255) DEFAULT NULL,
  `CNPJ` varchar(255) DEFAULT NULL,
  `CONTATO` varchar(255) DEFAULT NULL,
  `EMAIL` varchar(255) DEFAULT NULL,
  `TELEFONE` varchar(255) DEFAULT NULL,
  `IDENTIFICADOR_CSRT` varchar(255) DEFAULT NULL,
  `HASH_CSRT` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_responsavel_tecnico`
--

LOCK TABLES `nfe_responsavel_tecnico` WRITE;
/*!40000 ALTER TABLE `nfe_responsavel_tecnico` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_responsavel_tecnico` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:59

--
-- Table structure for table `nfe_transporte_reboque`
--

DROP TABLE IF EXISTS `nfe_transporte_reboque`;
CREATE TABLE `nfe_transporte_reboque` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_TRANSPORTE` varchar(255) DEFAULT NULL,
  `PLACA` varchar(255) DEFAULT NULL,
  `UF` varchar(255) DEFAULT NULL,
  `RNTC` varchar(255) DEFAULT NULL,
  `VAGAO` varchar(255) DEFAULT NULL,
  `BALSA` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_transporte_reboque`
--

LOCK TABLES `nfe_transporte_reboque` WRITE;
/*!40000 ALTER TABLE `nfe_transporte_reboque` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_transporte_reboque` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:04

--
-- Table structure for table `nfe_transporte_volume_lacre`
--

DROP TABLE IF EXISTS `nfe_transporte_volume_lacre`;
CREATE TABLE `nfe_transporte_volume_lacre` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_TRANSPORTE_VOLUME` varchar(255) DEFAULT NULL,
  `NUMERO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_transporte_volume_lacre`
--

LOCK TABLES `nfe_transporte_volume_lacre` WRITE;
/*!40000 ALTER TABLE `nfe_transporte_volume_lacre` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_transporte_volume_lacre` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:52

--
-- Table structure for table `nfe_transporte_volume`
--

DROP TABLE IF EXISTS `nfe_transporte_volume`;
CREATE TABLE `nfe_transporte_volume` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_TRANSPORTE` varchar(255) DEFAULT NULL,
  `QUANTIDADE` varchar(255) DEFAULT NULL,
  `ESPECIE` varchar(255) DEFAULT NULL,
  `MARCA` varchar(255) DEFAULT NULL,
  `NUMERACAO` varchar(255) DEFAULT NULL,
  `PESO_LIQUIDO` varchar(255) DEFAULT NULL,
  `PESO_BRUTO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_transporte_volume`
--

LOCK TABLES `nfe_transporte_volume` WRITE;
/*!40000 ALTER TABLE `nfe_transporte_volume` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_transporte_volume` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:50

--
-- Table structure for table `nfe_transporte`
--

DROP TABLE IF EXISTS `nfe_transporte`;
CREATE TABLE `nfe_transporte` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_NFE_CABECALHO` varchar(255) DEFAULT NULL,
  `MODALIDADE_FRETE` varchar(255) DEFAULT NULL,
  `CNPJ` varchar(255) DEFAULT NULL,
  `CPF` varchar(255) DEFAULT NULL,
  `NOME` varchar(255) DEFAULT NULL,
  `INSCRICAO_ESTADUAL` varchar(255) DEFAULT NULL,
  `ENDERECO` varchar(255) DEFAULT NULL,
  `NOME_MUNICIPIO` varchar(255) DEFAULT NULL,
  `UF` varchar(255) DEFAULT NULL,
  `VALOR_SERVICO` varchar(255) DEFAULT NULL,
  `VALOR_BC_RETENCAO_ICMS` varchar(255) DEFAULT NULL,
  `ALIQUOTA_RETENCAO_ICMS` varchar(255) DEFAULT NULL,
  `VALOR_ICMS_RETIDO` varchar(255) DEFAULT NULL,
  `CFOP` varchar(255) DEFAULT NULL,
  `MUNICIPIO` varchar(255) DEFAULT NULL,
  `PLACA_VEICULO` varchar(255) DEFAULT NULL,
  `UF_VEICULO` varchar(255) DEFAULT NULL,
  `RNTC_VEICULO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nfe_transporte`
--

LOCK TABLES `nfe_transporte` WRITE;
/*!40000 ALTER TABLE `nfe_transporte` DISABLE KEYS */;
/*!40000 ALTER TABLE `nfe_transporte` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:55

--
-- Table structure for table `pdv_caixa`
--

DROP TABLE IF EXISTS `pdv_caixa`;
CREATE TABLE `pdv_caixa` (
  `ID` varchar(255) DEFAULT NULL,
  `NOME` varchar(255) DEFAULT NULL,
  `DATA_CADASTRO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pdv_caixa`
--

LOCK TABLES `pdv_caixa` WRITE;
/*!40000 ALTER TABLE `pdv_caixa` DISABLE KEYS */;
INSERT INTO `pdv_caixa` VALUES ('1','1EE58323-3840-46E9-82B4-16730E','1704993520');
/*!40000 ALTER TABLE `pdv_caixa` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:56

--
-- Table structure for table `pdv_configuracao_balanca`
--

DROP TABLE IF EXISTS `pdv_configuracao_balanca`;
CREATE TABLE `pdv_configuracao_balanca` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_PDV_CONFIGURACAO` varchar(255) DEFAULT NULL,
  `MODELO` varchar(255) DEFAULT NULL,
  `IDENTIFICADOR` varchar(255) DEFAULT NULL,
  `HAND_SHAKE` varchar(255) DEFAULT NULL,
  `PARITY` varchar(255) DEFAULT NULL,
  `STOP_BITS` varchar(255) DEFAULT NULL,
  `DATA_BITS` varchar(255) DEFAULT NULL,
  `BAUD_RATE` varchar(255) DEFAULT NULL,
  `PORTA` varchar(255) DEFAULT NULL,
  `TIMEOUT` varchar(255) DEFAULT NULL,
  `TIPO_CONFIGURACAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pdv_configuracao_balanca`
--

LOCK TABLES `pdv_configuracao_balanca` WRITE;
/*!40000 ALTER TABLE `pdv_configuracao_balanca` DISABLE KEYS */;
/*!40000 ALTER TABLE `pdv_configuracao_balanca` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:00

--
-- Table structure for table `pdv_configuracao_leitor_serial`
--

DROP TABLE IF EXISTS `pdv_configuracao_leitor_serial`;
CREATE TABLE `pdv_configuracao_leitor_serial` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_PDV_CONFIGURACAO` varchar(255) DEFAULT NULL,
  `USA` varchar(255) DEFAULT NULL,
  `PORTA` varchar(255) DEFAULT NULL,
  `BAUD` varchar(255) DEFAULT NULL,
  `HAND_SHAKE` varchar(255) DEFAULT NULL,
  `PARITY` varchar(255) DEFAULT NULL,
  `STOP_BITS` varchar(255) DEFAULT NULL,
  `DATA_BITS` varchar(255) DEFAULT NULL,
  `INTERVALO` varchar(255) DEFAULT NULL,
  `USAR_FILA` varchar(255) DEFAULT NULL,
  `HARD_FLOW` varchar(255) DEFAULT NULL,
  `SOFT_FLOW` varchar(255) DEFAULT NULL,
  `SUFIXO` varchar(255) DEFAULT NULL,
  `EXCLUIR_SUFIXO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pdv_configuracao_leitor_serial`
--

LOCK TABLES `pdv_configuracao_leitor_serial` WRITE;
/*!40000 ALTER TABLE `pdv_configuracao_leitor_serial` DISABLE KEYS */;
/*!40000 ALTER TABLE `pdv_configuracao_leitor_serial` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:51

--
-- Table structure for table `pdv_configuracao`
--

DROP TABLE IF EXISTS `pdv_configuracao`;
CREATE TABLE `pdv_configuracao` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_ECF_IMPRESSORA` varchar(255) DEFAULT NULL,
  `ID_PDV_CAIXA` varchar(255) DEFAULT NULL,
  `ID_TRIBUT_OPERACAO_FISCAL_PADRAO` varchar(255) DEFAULT NULL,
  `MENSAGEM_CUPOM` varchar(255) DEFAULT NULL,
  `PORTA_ECF` varchar(255) DEFAULT NULL,
  `IP_SERVIDOR` varchar(255) DEFAULT NULL,
  `IP_SITEF` varchar(255) DEFAULT NULL,
  `TIPO_TEF` varchar(255) DEFAULT NULL,
  `TITULO_TELA_CAIXA` varchar(255) DEFAULT NULL,
  `CAMINHO_IMAGENS_PRODUTOS` varchar(255) DEFAULT NULL,
  `CAMINHO_IMAGENS_MARKETING` varchar(255) DEFAULT NULL,
  `COR_JANELAS_INTERNAS` varchar(255) DEFAULT NULL,
  `MARKETING_ATIVO` varchar(255) DEFAULT NULL,
  `CFOP_ECF` varchar(255) DEFAULT NULL,
  `TIMEOUT_ECF` varchar(255) DEFAULT NULL,
  `INTERVALO_ECF` varchar(255) DEFAULT NULL,
  `DESCRICAO_SUPRIMENTO` varchar(255) DEFAULT NULL,
  `DESCRICAO_SANGRIA` varchar(255) DEFAULT NULL,
  `TEF_TIPO_GP` varchar(255) DEFAULT NULL,
  `TEF_TEMPO_ESPERA` varchar(255) DEFAULT NULL,
  `TEF_ESPERA_STS` varchar(255) DEFAULT NULL,
  `TEF_NUMERO_VIAS` varchar(255) DEFAULT NULL,
  `DECIMAIS_QUANTIDADE` varchar(255) DEFAULT NULL,
  `DECIMAIS_VALOR` varchar(255) DEFAULT NULL,
  `BITS_POR_SEGUNDO` varchar(255) DEFAULT NULL,
  `QUANTIDADE_MAXIMA_CARTOES` varchar(255) DEFAULT NULL,
  `PESQUISA_PARTE` varchar(255) DEFAULT NULL,
  `LAUDO` varchar(255) DEFAULT NULL,
  `DATA_ATUALIZACAO_ESTOQUE` varchar(255) DEFAULT NULL,
  `PEDE_CPF_CUPOM` varchar(255) DEFAULT NULL,
  `TIPO_INTEGRACAO` varchar(255) DEFAULT NULL,
  `TIMER_INTEGRACAO` varchar(255) DEFAULT NULL,
  `GAVETA_SINAL_INVERTIDO` varchar(255) DEFAULT NULL,
  `GAVETA_UTILIZACAO` varchar(255) DEFAULT NULL,
  `USA_TECLADO_REDUZIDO` varchar(255) DEFAULT NULL,
  `MODULO` varchar(255) DEFAULT NULL,
  `PLANO` varchar(255) DEFAULT NULL,
  `PLANO_VALOR` varchar(255) DEFAULT NULL,
  `PLANO_SITUACAO` varchar(255) DEFAULT NULL,
  `RECIBO_FORMATO_PAGINA` varchar(255) DEFAULT NULL,
  `RECIBO_LARGURA_PAGINA` varchar(255) DEFAULT NULL,
  `RECIBO_MARGEM_PAGINA` varchar(255) DEFAULT NULL,
  `ENCERRA_MOVIMENTO_AUTO` varchar(255) DEFAULT NULL,
  `PERMITE_ESTOQUE_NEGATIVO` varchar(255) DEFAULT NULL,
  `MODULO_FISCAL_PRINCIPAL` varchar(255) DEFAULT NULL,
  `MODULO_FISCAL_CONTINGENCIA` varchar(255) DEFAULT NULL,
  `ACBR_MONITOR_ENDERECO` varchar(255) DEFAULT NULL,
  `ACBR_MONITOR_PORTA` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pdv_configuracao`
--

LOCK TABLES `pdv_configuracao` WRITE;
/*!40000 ALTER TABLE `pdv_configuracao` DISABLE KEYS */;
INSERT INTO `pdv_configuracao` VALUES ('1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'3','2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'G',NULL,NULL,NULL,'80',NULL,NULL,NULL,'S',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `pdv_configuracao` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:07

--
-- Table structure for table `pdv_fechamento`
--

DROP TABLE IF EXISTS `pdv_fechamento`;
CREATE TABLE `pdv_fechamento` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_PDV_MOVIMENTO` varchar(255) DEFAULT NULL,
  `ID_PDV_TIPO_PAGAMENTO` varchar(255) DEFAULT NULL,
  `VALOR` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pdv_fechamento`
--

LOCK TABLES `pdv_fechamento` WRITE;
/*!40000 ALTER TABLE `pdv_fechamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `pdv_fechamento` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:50

--
-- Table structure for table `pdv_movimento`
--

DROP TABLE IF EXISTS `pdv_movimento`;
CREATE TABLE `pdv_movimento` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_ECF_IMPRESSORA` varchar(255) DEFAULT NULL,
  `ID_PDV_OPERADOR` varchar(255) DEFAULT NULL,
  `ID_PDV_CAIXA` varchar(255) DEFAULT NULL,
  `ID_GERENTE_SUPERVISOR` varchar(255) DEFAULT NULL,
  `DATA_ABERTURA` varchar(255) DEFAULT NULL,
  `HORA_ABERTURA` varchar(255) DEFAULT NULL,
  `DATA_FECHAMENTO` varchar(255) DEFAULT NULL,
  `HORA_FECHAMENTO` varchar(255) DEFAULT NULL,
  `TOTAL_SUPRIMENTO` varchar(255) DEFAULT NULL,
  `TOTAL_SANGRIA` varchar(255) DEFAULT NULL,
  `TOTAL_NAO_FISCAL` varchar(255) DEFAULT NULL,
  `TOTAL_VENDA` varchar(255) DEFAULT NULL,
  `TOTAL_DESCONTO` varchar(255) DEFAULT NULL,
  `TOTAL_ACRESCIMO` varchar(255) DEFAULT NULL,
  `TOTAL_FINAL` varchar(255) DEFAULT NULL,
  `TOTAL_RECEBIDO` varchar(255) DEFAULT NULL,
  `TOTAL_TROCO` varchar(255) DEFAULT NULL,
  `TOTAL_CANCELADO` varchar(255) DEFAULT NULL,
  `STATUS_MOVIMENTO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pdv_movimento`
--

LOCK TABLES `pdv_movimento` WRITE;
/*!40000 ALTER TABLE `pdv_movimento` DISABLE KEYS */;
INSERT INTO `pdv_movimento` VALUES (NULL,NULL,NULL,NULL,NULL,'1704993380','14:16:20',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'A');
/*!40000 ALTER TABLE `pdv_movimento` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:09

--
-- Table structure for table `pdv_operador`
--

DROP TABLE IF EXISTS `pdv_operador`;
CREATE TABLE `pdv_operador` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_COLABORADOR` varchar(255) DEFAULT NULL,
  `LOGIN` varchar(255) DEFAULT NULL,
  `SENHA` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pdv_operador`
--

LOCK TABLES `pdv_operador` WRITE;
/*!40000 ALTER TABLE `pdv_operador` DISABLE KEYS */;
/*!40000 ALTER TABLE `pdv_operador` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:59

--
-- Table structure for table `pdv_sangria`
--

DROP TABLE IF EXISTS `pdv_sangria`;
CREATE TABLE `pdv_sangria` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_PDV_MOVIMENTO` varchar(255) DEFAULT NULL,
  `DATA_SANGRIA` varchar(255) DEFAULT NULL,
  `HORA_SANGRIA` varchar(255) DEFAULT NULL,
  `VALOR` varchar(255) DEFAULT NULL,
  `OBSERVACAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pdv_sangria`
--

LOCK TABLES `pdv_sangria` WRITE;
/*!40000 ALTER TABLE `pdv_sangria` DISABLE KEYS */;
/*!40000 ALTER TABLE `pdv_sangria` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:08

--
-- Table structure for table `pdv_suprimento`
--

DROP TABLE IF EXISTS `pdv_suprimento`;
CREATE TABLE `pdv_suprimento` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_PDV_MOVIMENTO` varchar(255) DEFAULT NULL,
  `DATA_SUPRIMENTO` varchar(255) DEFAULT NULL,
  `HORA_SUPRIMENTO` varchar(255) DEFAULT NULL,
  `VALOR` varchar(255) DEFAULT NULL,
  `OBSERVACAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pdv_suprimento`
--

LOCK TABLES `pdv_suprimento` WRITE;
/*!40000 ALTER TABLE `pdv_suprimento` DISABLE KEYS */;
/*!40000 ALTER TABLE `pdv_suprimento` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:54

--
-- Table structure for table `pdv_tipo_pagamento`
--

DROP TABLE IF EXISTS `pdv_tipo_pagamento`;
CREATE TABLE `pdv_tipo_pagamento` (
  `ID` varchar(255) DEFAULT NULL,
  `CODIGO` varchar(255) DEFAULT NULL,
  `DESCRICAO` varchar(255) DEFAULT NULL,
  `TEF` varchar(255) DEFAULT NULL,
  `IMPRIME_VINCULADO` varchar(255) DEFAULT NULL,
  `PERMITE_TROCO` varchar(255) DEFAULT NULL,
  `TEF_TIPO_GP` varchar(255) DEFAULT NULL,
  `GERA_PARCELAS` varchar(255) DEFAULT NULL,
  `CODIGO_PAGAMENTO_NFCE` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pdv_tipo_pagamento`
--

LOCK TABLES `pdv_tipo_pagamento` WRITE;
/*!40000 ALTER TABLE `pdv_tipo_pagamento` DISABLE KEYS */;
INSERT INTO `pdv_tipo_pagamento` VALUES ('1','1','DINHEIRO','N','N','S','N','N','1'),('2','2','CHEQUE','N','S','N','N','N','2'),('3','3','CARTAO','S','S','N','1','N','3'),(NULL,'99','FIADO','N','N','S','N','N',NULL);
/*!40000 ALTER TABLE `pdv_tipo_pagamento` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:06

--
-- Table structure for table `pdv_total_tipo_pagamento`
--

DROP TABLE IF EXISTS `pdv_total_tipo_pagamento`;
CREATE TABLE `pdv_total_tipo_pagamento` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_PDV_VENDA_CABECALHO` varchar(255) DEFAULT NULL,
  `ID_PDV_TIPO_PAGAMENTO` varchar(255) DEFAULT NULL,
  `DATA_VENDA` varchar(255) DEFAULT NULL,
  `HORA_VENDA` varchar(255) DEFAULT NULL,
  `SERIE_ECF` varchar(255) DEFAULT NULL,
  `COO` varchar(255) DEFAULT NULL,
  `CCF` varchar(255) DEFAULT NULL,
  `GNF` varchar(255) DEFAULT NULL,
  `VALOR` varchar(255) DEFAULT NULL,
  `NSU` varchar(255) DEFAULT NULL,
  `ESTORNO` varchar(255) DEFAULT NULL,
  `REDE` varchar(255) DEFAULT NULL,
  `CARTAO_DC` varchar(255) DEFAULT NULL,
  `HASH_REGISTRO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pdv_total_tipo_pagamento`
--

LOCK TABLES `pdv_total_tipo_pagamento` WRITE;
/*!40000 ALTER TABLE `pdv_total_tipo_pagamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `pdv_total_tipo_pagamento` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:04

--
-- Table structure for table `pdv_venda_cabecalho`
--

DROP TABLE IF EXISTS `pdv_venda_cabecalho`;
CREATE TABLE `pdv_venda_cabecalho` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_CLIENTE` varchar(255) DEFAULT NULL,
  `ID_COLABORADOR` varchar(255) DEFAULT NULL,
  `ID_PDV_MOVIMENTO` varchar(255) DEFAULT NULL,
  `ID_ECF_DAV` varchar(255) DEFAULT NULL,
  `ID_ECF_PRE_VENDA_CABECALHO` varchar(255) DEFAULT NULL,
  `SERIE_ECF` varchar(255) DEFAULT NULL,
  `CFOP` varchar(255) DEFAULT NULL,
  `COO` varchar(255) DEFAULT NULL,
  `CCF` varchar(255) DEFAULT NULL,
  `DATA_VENDA` varchar(255) DEFAULT NULL,
  `HORA_VENDA` varchar(255) DEFAULT NULL,
  `VALOR_VENDA` varchar(255) DEFAULT NULL,
  `TAXA_DESCONTO` varchar(255) DEFAULT NULL,
  `VALOR_DESCONTO` varchar(255) DEFAULT NULL,
  `TAXA_ACRESCIMO` varchar(255) DEFAULT NULL,
  `VALOR_ACRESCIMO` varchar(255) DEFAULT NULL,
  `VALOR_FINAL` varchar(255) DEFAULT NULL,
  `VALOR_RECEBIDO` varchar(255) DEFAULT NULL,
  `VALOR_TROCO` varchar(255) DEFAULT NULL,
  `VALOR_CANCELADO` varchar(255) DEFAULT NULL,
  `VALOR_TOTAL_PRODUTOS` varchar(255) DEFAULT NULL,
  `VALOR_TOTAL_DOCUMENTO` varchar(255) DEFAULT NULL,
  `VALOR_BASE_ICMS` varchar(255) DEFAULT NULL,
  `VALOR_ICMS` varchar(255) DEFAULT NULL,
  `VALOR_ICMS_OUTRAS` varchar(255) DEFAULT NULL,
  `VALOR_ISSQN` varchar(255) DEFAULT NULL,
  `VALOR_PIS` varchar(255) DEFAULT NULL,
  `VALOR_COFINS` varchar(255) DEFAULT NULL,
  `VALOR_ACRESCIMO_ITENS` varchar(255) DEFAULT NULL,
  `VALOR_DESCONTO_ITENS` varchar(255) DEFAULT NULL,
  `STATUS_VENDA` varchar(255) DEFAULT NULL,
  `NOME_CLIENTE` varchar(255) DEFAULT NULL,
  `CPF_CNPJ_CLIENTE` varchar(255) DEFAULT NULL,
  `CUPOM_CANCELADO` varchar(255) DEFAULT NULL,
  `HASH_REGISTRO` varchar(255) DEFAULT NULL,
  `TIPO_OPERACAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pdv_venda_cabecalho`
--

LOCK TABLES `pdv_venda_cabecalho` WRITE;
/*!40000 ALTER TABLE `pdv_venda_cabecalho` DISABLE KEYS */;
/*!40000 ALTER TABLE `pdv_venda_cabecalho` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:06

--
-- Table structure for table `pdv_venda_detalhe`
--

DROP TABLE IF EXISTS `pdv_venda_detalhe`;
CREATE TABLE `pdv_venda_detalhe` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_PRODUTO` varchar(255) DEFAULT NULL,
  `ID_PDV_VENDA_CABECALHO` varchar(255) DEFAULT NULL,
  `CFOP` varchar(255) DEFAULT NULL,
  `GTIN` varchar(255) DEFAULT NULL,
  `CCF` varchar(255) DEFAULT NULL,
  `COO` varchar(255) DEFAULT NULL,
  `SERIE_ECF` varchar(255) DEFAULT NULL,
  `ITEM` varchar(255) DEFAULT NULL,
  `QUANTIDADE` varchar(255) DEFAULT NULL,
  `VALOR_UNITARIO` varchar(255) DEFAULT NULL,
  `VALOR_TOTAL` varchar(255) DEFAULT NULL,
  `VALOR_TOTAL_ITEM` varchar(255) DEFAULT NULL,
  `VALOR_BASE_ICMS` varchar(255) DEFAULT NULL,
  `TAXA_ICMS` varchar(255) DEFAULT NULL,
  `VALOR_ICMS` varchar(255) DEFAULT NULL,
  `TAXA_DESCONTO` varchar(255) DEFAULT NULL,
  `VALOR_DESCONTO` varchar(255) DEFAULT NULL,
  `TAXA_ISSQN` varchar(255) DEFAULT NULL,
  `VALOR_ISSQN` varchar(255) DEFAULT NULL,
  `TAXA_PIS` varchar(255) DEFAULT NULL,
  `VALOR_PIS` varchar(255) DEFAULT NULL,
  `TAXA_COFINS` varchar(255) DEFAULT NULL,
  `VALOR_COFINS` varchar(255) DEFAULT NULL,
  `TAXA_ACRESCIMO` varchar(255) DEFAULT NULL,
  `VALOR_ACRESCIMO` varchar(255) DEFAULT NULL,
  `TOTALIZADOR_PARCIAL` varchar(255) DEFAULT NULL,
  `CST` varchar(255) DEFAULT NULL,
  `CANCELADO` varchar(255) DEFAULT NULL,
  `MOVIMENTA_ESTOQUE` varchar(255) DEFAULT NULL,
  `ECF_ICMS_ST` varchar(255) DEFAULT NULL,
  `VALOR_IMPOSTO_FEDERAL` varchar(255) DEFAULT NULL,
  `VALOR_IMPOSTO_ESTADUAL` varchar(255) DEFAULT NULL,
  `VALOR_IMPOSTO_MUNICIPAL` varchar(255) DEFAULT NULL,
  `HASH_REGISTRO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pdv_venda_detalhe`
--

LOCK TABLES `pdv_venda_detalhe` WRITE;
/*!40000 ALTER TABLE `pdv_venda_detalhe` DISABLE KEYS */;
/*!40000 ALTER TABLE `pdv_venda_detalhe` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:58

--
-- Table structure for table `produto_ficha_tecnica`
--

DROP TABLE IF EXISTS `produto_ficha_tecnica`;
CREATE TABLE `produto_ficha_tecnica` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_PRODUTO` varchar(255) DEFAULT NULL,
  `DESCRICAO` varchar(255) DEFAULT NULL,
  `ID_PRODUTO_FILHO` varchar(255) DEFAULT NULL,
  `QUANTIDADE` varchar(255) DEFAULT NULL,
  `VALOR_CUSTO` varchar(255) DEFAULT NULL,
  `PERCENTUAL_CUSTO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `produto_ficha_tecnica`
--

LOCK TABLES `produto_ficha_tecnica` WRITE;
/*!40000 ALTER TABLE `produto_ficha_tecnica` DISABLE KEYS */;
/*!40000 ALTER TABLE `produto_ficha_tecnica` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:51

--
-- Table structure for table `produto_grupo`
--

DROP TABLE IF EXISTS `produto_grupo`;
CREATE TABLE `produto_grupo` (
  `ID` varchar(255) DEFAULT NULL,
  `NOME` varchar(255) DEFAULT NULL,
  `DESCRICAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `produto_grupo`
--

LOCK TABLES `produto_grupo` WRITE;
/*!40000 ALTER TABLE `produto_grupo` DISABLE KEYS */;
INSERT INTO `produto_grupo` VALUES ('1','GRUPO GERAL','GRUPO GERAL DE PRODUTOS');
/*!40000 ALTER TABLE `produto_grupo` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:01

--
-- Table structure for table `produto_imagem`
--

DROP TABLE IF EXISTS `produto_imagem`;
CREATE TABLE `produto_imagem` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_PRODUTO` varchar(255) DEFAULT NULL,
  `IMAGEM` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `produto_imagem`
--

LOCK TABLES `produto_imagem` WRITE;
/*!40000 ALTER TABLE `produto_imagem` DISABLE KEYS */;
/*!40000 ALTER TABLE `produto_imagem` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:00

--
-- Table structure for table `produto_promocao`
--

DROP TABLE IF EXISTS `produto_promocao`;
CREATE TABLE `produto_promocao` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_PRODUTO` varchar(255) DEFAULT NULL,
  `DATA_INICIO` varchar(255) DEFAULT NULL,
  `DATA_FIM` varchar(255) DEFAULT NULL,
  `QUANTIDADE_EM_PROMOCAO` varchar(255) DEFAULT NULL,
  `QUANTIDADE_MAXIMA_CLIENTE` varchar(255) DEFAULT NULL,
  `VALOR` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `produto_promocao`
--

LOCK TABLES `produto_promocao` WRITE;
/*!40000 ALTER TABLE `produto_promocao` DISABLE KEYS */;
/*!40000 ALTER TABLE `produto_promocao` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:06

--
-- Table structure for table `produto_subgrupo`
--

DROP TABLE IF EXISTS `produto_subgrupo`;
CREATE TABLE `produto_subgrupo` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_PRODUTO_GRUPO` varchar(255) DEFAULT NULL,
  `NOME` varchar(255) DEFAULT NULL,
  `DESCRICAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `produto_subgrupo`
--

LOCK TABLES `produto_subgrupo` WRITE;
/*!40000 ALTER TABLE `produto_subgrupo` DISABLE KEYS */;
INSERT INTO `produto_subgrupo` VALUES ('1','1','SUBGRUPO GERAL','SUBGRUPO GERAL DE PRODUTOS');
/*!40000 ALTER TABLE `produto_subgrupo` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:08

--
-- Table structure for table `produto_tipo`
--

DROP TABLE IF EXISTS `produto_tipo`;
CREATE TABLE `produto_tipo` (
  `ID` varchar(255) DEFAULT NULL,
  `CODIGO` varchar(255) DEFAULT NULL,
  `DESCRICAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `produto_tipo`
--

LOCK TABLES `produto_tipo` WRITE;
/*!40000 ALTER TABLE `produto_tipo` DISABLE KEYS */;
INSERT INTO `produto_tipo` VALUES ('1','1','PRODUTO'),('2','2','SERVIÇO'),('3','3','INSUMO'),('4','4','COMPLEMENTO'),('5','5','COMBO');
/*!40000 ALTER TABLE `produto_tipo` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:08

--
-- Table structure for table `produto_unidade`
--

DROP TABLE IF EXISTS `produto_unidade`;
CREATE TABLE `produto_unidade` (
  `ID` varchar(255) DEFAULT NULL,
  `SIGLA` varchar(255) DEFAULT NULL,
  `DESCRICAO` varchar(255) DEFAULT NULL,
  `PODE_FRACIONAR` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `produto_unidade`
--

LOCK TABLES `produto_unidade` WRITE;
/*!40000 ALTER TABLE `produto_unidade` DISABLE KEYS */;
INSERT INTO `produto_unidade` VALUES ('1','KG',NULL,'S'),('2','UND',NULL,'N'),('3','MT',NULL,'S'),('4','M2',NULL,'S'),('5','M3',NULL,'S'),('6','PCT',NULL,'N'),('7','CX',NULL,'N'),('10','PC','PACOTE','N');
/*!40000 ALTER TABLE `produto_unidade` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:06

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
CREATE TABLE `produto` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_PRODUTO_UNIDADE` varchar(255) DEFAULT NULL,
  `ID_TRIBUT_GRUPO_TRIBUTARIO` varchar(255) DEFAULT NULL,
  `ID_PRODUTO_TIPO` varchar(255) DEFAULT NULL,
  `ID_PRODUTO_SUBGRUPO` varchar(255) DEFAULT NULL,
  `GTIN` varchar(255) DEFAULT NULL,
  `CODIGO_INTERNO` varchar(255) DEFAULT NULL,
  `NOME` varchar(255) DEFAULT NULL,
  `DESCRICAO` varchar(255) DEFAULT NULL,
  `DESCRICAO_PDV` varchar(255) DEFAULT NULL,
  `VALOR_COMPRA` varchar(255) DEFAULT NULL,
  `VALOR_VENDA` varchar(255) DEFAULT NULL,
  `QUANTIDADE_ESTOQUE` varchar(255) DEFAULT NULL,
  `ESTOQUE_MINIMO` varchar(255) DEFAULT NULL,
  `ESTOQUE_MAXIMO` varchar(255) DEFAULT NULL,
  `CODIGO_NCM` varchar(255) DEFAULT NULL,
  `IAT` varchar(255) DEFAULT NULL,
  `IPPT` varchar(255) DEFAULT NULL,
  `TIPO_ITEM_SPED` varchar(255) DEFAULT NULL,
  `TAXA_IPI` varchar(255) DEFAULT NULL,
  `TAXA_ISSQN` varchar(255) DEFAULT NULL,
  `TAXA_PIS` varchar(255) DEFAULT NULL,
  `TAXA_COFINS` varchar(255) DEFAULT NULL,
  `TAXA_ICMS` varchar(255) DEFAULT NULL,
  `CST` varchar(255) DEFAULT NULL,
  `CSOSN` varchar(255) DEFAULT NULL,
  `TOTALIZADOR_PARCIAL` varchar(255) DEFAULT NULL,
  `ECF_ICMS_ST` varchar(255) DEFAULT NULL,
  `CODIGO_BALANCA` varchar(255) DEFAULT NULL,
  `PAF_P_ST` varchar(255) DEFAULT NULL,
  `HASH_REGISTRO` varchar(255) DEFAULT NULL,
  `VALOR_CUSTO` varchar(255) DEFAULT NULL,
  `SITUACAO` varchar(255) DEFAULT NULL,
  `CODIGO_CEST` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES ('1','1',NULL,'1','1','3011010827133','30113','01 PRODUTO PARA TESTES','01 PRODUTO PARA TESTES','01 PRODUTO PARA TESTES',NULL,'10','-168','10','1000','40129010','A','T','4',NULL,NULL,NULL,NULL,'7','0','1900','04T0700','7',NULL,'T','859dba8c255ea32d52d40a880a0a66d0',NULL,'A',NULL),('2','1',NULL,'1','1','312011604499','3129','02 PRODUTO PARA TESTES','02 PRODUTO PARA TESTES','02 PRODUTO PARA TESTES',NULL,'35','38','10','1000','40129010','A','T','4',NULL,NULL,NULL,NULL,'7','0','1900','04T0700','7',NULL,'T','36b2f8acbf6b3415593761c3375a5376',NULL,'A',NULL);
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:54

--
-- Table structure for table `reserva_mesa`
--

DROP TABLE IF EXISTS `reserva_mesa`;
CREATE TABLE `reserva_mesa` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_MESA` varchar(255) DEFAULT NULL,
  `ID_RESERVA` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `reserva_mesa`
--

LOCK TABLES `reserva_mesa` WRITE;
/*!40000 ALTER TABLE `reserva_mesa` DISABLE KEYS */;
/*!40000 ALTER TABLE `reserva_mesa` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:57

--
-- Table structure for table `reserva`
--

DROP TABLE IF EXISTS `reserva`;
CREATE TABLE `reserva` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_CLIENTE` varchar(255) DEFAULT NULL,
  `NOME_CONTATO` varchar(255) DEFAULT NULL,
  `TELEFONE_CONTATO` varchar(255) DEFAULT NULL,
  `DATA_RESERVA` varchar(255) DEFAULT NULL,
  `HORA_RESERVA` varchar(255) DEFAULT NULL,
  `QUANTIDADE_PESSOAS` varchar(255) DEFAULT NULL,
  `SITUACAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `reserva`
--

LOCK TABLES `reserva` WRITE;
/*!40000 ALTER TABLE `reserva` DISABLE KEYS */;
/*!40000 ALTER TABLE `reserva` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:53

--
-- Table structure for table `taxa_entrega`
--

DROP TABLE IF EXISTS `taxa_entrega`;
CREATE TABLE `taxa_entrega` (
  `ID` varchar(255) DEFAULT NULL,
  `NOME` varchar(255) DEFAULT NULL,
  `VALOR` varchar(255) DEFAULT NULL,
  `ESTIMATIVA_MINUTOS` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `taxa_entrega`
--

LOCK TABLES `taxa_entrega` WRITE;
/*!40000 ALTER TABLE `taxa_entrega` DISABLE KEYS */;
INSERT INTO `taxa_entrega` VALUES ('1','Perto - até 05 Km','5','15'),('2','Intermediária - De 05 até 10 KM','8','20'),('3','Longe - De 10 até 20 KM','15','40'),('4','Perto Fidelizado','2','15'),('5','Intermediária Fidelizado','4','20'),('6','Longe Fidelizado','8','40'),('7','Isento - sem taxa de entrega','0','0');
/*!40000 ALTER TABLE `taxa_entrega` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:58

--
-- Table structure for table `tribut_cofins`
--

DROP TABLE IF EXISTS `tribut_cofins`;
CREATE TABLE `tribut_cofins` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_TRIBUT_CONFIGURA_OF_GT` varchar(255) DEFAULT NULL,
  `CST_COFINS` varchar(255) DEFAULT NULL,
  `EFD_TABELA_435` varchar(255) DEFAULT NULL,
  `MODALIDADE_BASE_CALCULO` varchar(255) DEFAULT NULL,
  `PORCENTO_BASE_CALCULO` varchar(255) DEFAULT NULL,
  `ALIQUOTA_PORCENTO` varchar(255) DEFAULT NULL,
  `ALIQUOTA_UNIDADE` varchar(255) DEFAULT NULL,
  `VALOR_PRECO_MAXIMO` varchar(255) DEFAULT NULL,
  `VALOR_PAUTA_FISCAL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tribut_cofins`
--

LOCK TABLES `tribut_cofins` WRITE;
/*!40000 ALTER TABLE `tribut_cofins` DISABLE KEYS */;
INSERT INTO `tribut_cofins` VALUES ('1','1','99',NULL,'0',NULL,'0',NULL,NULL,NULL),('2','2','99',NULL,'0',NULL,'0',NULL,NULL,NULL);
/*!40000 ALTER TABLE `tribut_cofins` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:10

--
-- Table structure for table `tribut_configura_of_gt`
--

DROP TABLE IF EXISTS `tribut_configura_of_gt`;
CREATE TABLE `tribut_configura_of_gt` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_TRIBUT_GRUPO_TRIBUTARIO` varchar(255) DEFAULT NULL,
  `ID_TRIBUT_OPERACAO_FISCAL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tribut_configura_of_gt`
--

LOCK TABLES `tribut_configura_of_gt` WRITE;
/*!40000 ALTER TABLE `tribut_configura_of_gt` DISABLE KEYS */;
INSERT INTO `tribut_configura_of_gt` VALUES ('1','1','1'),('2','2','2');
/*!40000 ALTER TABLE `tribut_configura_of_gt` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:11

--
-- Table structure for table `tribut_grupo_tributario`
--

DROP TABLE IF EXISTS `tribut_grupo_tributario`;
CREATE TABLE `tribut_grupo_tributario` (
  `ID` varchar(255) DEFAULT NULL,
  `DESCRICAO` varchar(255) DEFAULT NULL,
  `ORIGEM_MERCADORIA` varchar(255) DEFAULT NULL,
  `OBSERVACAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tribut_grupo_tributario`
--

LOCK TABLES `tribut_grupo_tributario` WRITE;
/*!40000 ALTER TABLE `tribut_grupo_tributario` DISABLE KEYS */;
INSERT INTO `tribut_grupo_tributario` VALUES ('1','PRODUTO DE FABRICACAO PROPRIA','0',NULL),('2','PRODUTO ADQUIRIDO OU RECEBIDO DE TERCEIROS','0',NULL);
/*!40000 ALTER TABLE `tribut_grupo_tributario` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:53

--
-- Table structure for table `tribut_icms_custom_cab`
--

DROP TABLE IF EXISTS `tribut_icms_custom_cab`;
CREATE TABLE `tribut_icms_custom_cab` (
  `ID` varchar(255) DEFAULT NULL,
  `DESCRICAO` varchar(255) DEFAULT NULL,
  `ORIGEM_MERCADORIA` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tribut_icms_custom_cab`
--

LOCK TABLES `tribut_icms_custom_cab` WRITE;
/*!40000 ALTER TABLE `tribut_icms_custom_cab` DISABLE KEYS */;
/*!40000 ALTER TABLE `tribut_icms_custom_cab` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:54

--
-- Table structure for table `tribut_icms_custom_det`
--

DROP TABLE IF EXISTS `tribut_icms_custom_det`;
CREATE TABLE `tribut_icms_custom_det` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_TRIBUT_ICMS_CUSTOM_CAB` varchar(255) DEFAULT NULL,
  `UF_DESTINO` varchar(255) DEFAULT NULL,
  `CFOP` varchar(255) DEFAULT NULL,
  `CSOSN` varchar(255) DEFAULT NULL,
  `CST` varchar(255) DEFAULT NULL,
  `MODALIDADE_BC` varchar(255) DEFAULT NULL,
  `ALIQUOTA` varchar(255) DEFAULT NULL,
  `VALOR_PAUTA` varchar(255) DEFAULT NULL,
  `VALOR_PRECO_MAXIMO` varchar(255) DEFAULT NULL,
  `MVA` varchar(255) DEFAULT NULL,
  `PORCENTO_BC` varchar(255) DEFAULT NULL,
  `MODALIDADE_BC_ST` varchar(255) DEFAULT NULL,
  `ALIQUOTA_INTERNA_ST` varchar(255) DEFAULT NULL,
  `ALIQUOTA_INTERESTADUAL_ST` varchar(255) DEFAULT NULL,
  `PORCENTO_BC_ST` varchar(255) DEFAULT NULL,
  `ALIQUOTA_ICMS_ST` varchar(255) DEFAULT NULL,
  `VALOR_PAUTA_ST` varchar(255) DEFAULT NULL,
  `VALOR_PRECO_MAXIMO_ST` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tribut_icms_custom_det`
--

LOCK TABLES `tribut_icms_custom_det` WRITE;
/*!40000 ALTER TABLE `tribut_icms_custom_det` DISABLE KEYS */;
/*!40000 ALTER TABLE `tribut_icms_custom_det` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:05

--
-- Table structure for table `tribut_icms_uf`
--

DROP TABLE IF EXISTS `tribut_icms_uf`;
CREATE TABLE `tribut_icms_uf` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_TRIBUT_CONFIGURA_OF_GT` varchar(255) DEFAULT NULL,
  `UF_DESTINO` varchar(255) DEFAULT NULL,
  `CFOP` varchar(255) DEFAULT NULL,
  `CSOSN` varchar(255) DEFAULT NULL,
  `CST` varchar(255) DEFAULT NULL,
  `MODALIDADE_BC` varchar(255) DEFAULT NULL,
  `ALIQUOTA` varchar(255) DEFAULT NULL,
  `VALOR_PAUTA` varchar(255) DEFAULT NULL,
  `VALOR_PRECO_MAXIMO` varchar(255) DEFAULT NULL,
  `MVA` varchar(255) DEFAULT NULL,
  `PORCENTO_BC` varchar(255) DEFAULT NULL,
  `MODALIDADE_BC_ST` varchar(255) DEFAULT NULL,
  `ALIQUOTA_INTERNA_ST` varchar(255) DEFAULT NULL,
  `ALIQUOTA_INTERESTADUAL_ST` varchar(255) DEFAULT NULL,
  `PORCENTO_BC_ST` varchar(255) DEFAULT NULL,
  `ALIQUOTA_ICMS_ST` varchar(255) DEFAULT NULL,
  `VALOR_PAUTA_ST` varchar(255) DEFAULT NULL,
  `VALOR_PRECO_MAXIMO_ST` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tribut_icms_uf`
--

LOCK TABLES `tribut_icms_uf` WRITE;
/*!40000 ALTER TABLE `tribut_icms_uf` DISABLE KEYS */;
INSERT INTO `tribut_icms_uf` VALUES ('1','1','MA','5101','102','0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('2','2','MA','5102','102','0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `tribut_icms_uf` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:50

--
-- Table structure for table `tribut_ipi`
--

DROP TABLE IF EXISTS `tribut_ipi`;
CREATE TABLE `tribut_ipi` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_TRIBUT_CONFIGURA_OF_GT` varchar(255) DEFAULT NULL,
  `CST_IPI` varchar(255) DEFAULT NULL,
  `MODALIDADE_BASE_CALCULO` varchar(255) DEFAULT NULL,
  `PORCENTO_BASE_CALCULO` varchar(255) DEFAULT NULL,
  `ALIQUOTA_PORCENTO` varchar(255) DEFAULT NULL,
  `ALIQUOTA_UNIDADE` varchar(255) DEFAULT NULL,
  `VALOR_PRECO_MAXIMO` varchar(255) DEFAULT NULL,
  `VALOR_PAUTA_FISCAL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tribut_ipi`
--

LOCK TABLES `tribut_ipi` WRITE;
/*!40000 ALTER TABLE `tribut_ipi` DISABLE KEYS */;
/*!40000 ALTER TABLE `tribut_ipi` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:10:02

--
-- Table structure for table `tribut_iss`
--

DROP TABLE IF EXISTS `tribut_iss`;
CREATE TABLE `tribut_iss` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_TRIBUT_OPERACAO_FISCAL` varchar(255) DEFAULT NULL,
  `MODALIDADE_BASE_CALCULO` varchar(255) DEFAULT NULL,
  `PORCENTO_BASE_CALCULO` varchar(255) DEFAULT NULL,
  `ALIQUOTA_PORCENTO` varchar(255) DEFAULT NULL,
  `ALIQUOTA_UNIDADE` varchar(255) DEFAULT NULL,
  `VALOR_PRECO_MAXIMO` varchar(255) DEFAULT NULL,
  `VALOR_PAUTA_FISCAL` varchar(255) DEFAULT NULL,
  `ITEM_LISTA_SERVICO` varchar(255) DEFAULT NULL,
  `CODIGO_TRIBUTACAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tribut_iss`
--

LOCK TABLES `tribut_iss` WRITE;
/*!40000 ALTER TABLE `tribut_iss` DISABLE KEYS */;
/*!40000 ALTER TABLE `tribut_iss` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:51

--
-- Table structure for table `tribut_operacao_fiscal`
--

DROP TABLE IF EXISTS `tribut_operacao_fiscal`;
CREATE TABLE `tribut_operacao_fiscal` (
  `ID` varchar(255) DEFAULT NULL,
  `DESCRICAO` varchar(255) DEFAULT NULL,
  `DESCRICAO_NA_NF` varchar(255) DEFAULT NULL,
  `CFOP` varchar(255) DEFAULT NULL,
  `OBSERVACAO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tribut_operacao_fiscal`
--

LOCK TABLES `tribut_operacao_fiscal` WRITE;
/*!40000 ALTER TABLE `tribut_operacao_fiscal` DISABLE KEYS */;
INSERT INTO `tribut_operacao_fiscal` VALUES ('1','VENDA DE PRODUCAO DO ESTABELECIMENTO',NULL,NULL,'NORMALMENTE ESTA OPERACAO FISCAL SERA VINCULADA AO CFOP 5.101 E PODERA SER VINCULADA A UM OU MAIS CST OU CSOSN'),('2','VENDA DE MERCADORIA ADQUIRIDA OU RECEBIDA DE TERCEIROS',NULL,NULL,'NORMALMENTE UTILIZADO COM O CFOP 5.102 EM COMBINACAO COM CST OU CSOSN.');
/*!40000 ALTER TABLE `tribut_operacao_fiscal` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:59

--
-- Table structure for table `tribut_pis`
--

DROP TABLE IF EXISTS `tribut_pis`;
CREATE TABLE `tribut_pis` (
  `ID` varchar(255) DEFAULT NULL,
  `ID_TRIBUT_CONFIGURA_OF_GT` varchar(255) DEFAULT NULL,
  `CST_PIS` varchar(255) DEFAULT NULL,
  `EFD_TABELA_435` varchar(255) DEFAULT NULL,
  `MODALIDADE_BASE_CALCULO` varchar(255) DEFAULT NULL,
  `PORCENTO_BASE_CALCULO` varchar(255) DEFAULT NULL,
  `ALIQUOTA_PORCENTO` varchar(255) DEFAULT NULL,
  `ALIQUOTA_UNIDADE` varchar(255) DEFAULT NULL,
  `VALOR_PRECO_MAXIMO` varchar(255) DEFAULT NULL,
  `VALOR_PAUTA_FISCAL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tribut_pis`
--

LOCK TABLES `tribut_pis` WRITE;
/*!40000 ALTER TABLE `tribut_pis` DISABLE KEYS */;
INSERT INTO `tribut_pis` VALUES ('1','1','99',NULL,'0',NULL,'0',NULL,NULL,NULL),('2','2','99',NULL,'0',NULL,'0',NULL,NULL,NULL);
/*!40000 ALTER TABLE `tribut_pis` ENABLE KEYS */;
UNLOCK TABLES;
-- Dump completed on 2024-01-15 10:09:53
