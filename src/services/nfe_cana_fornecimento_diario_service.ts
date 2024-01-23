import NfeCanaFornecimentoDiario from '../models/nfe_cana_fornecimento_diario';

class NfeCanaFornecimentoDiarioService {
  
  async getListNfeCanaFornecimentoDiario() {
    return await NfeCanaFornecimentoDiario.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeCanaFornecimentoDiarioById(Id: number) {
    return await NfeCanaFornecimentoDiario.findByPk(Id);
  }

  async insertNfeCanaFornecimentoDiario(value: NfeCanaFornecimentoDiario) {
    return await NfeCanaFornecimentoDiario.create(value);
  }

  async updateNfeCanaFornecimentoDiario(id: number, value: NfeCanaFornecimentoDiario) {
    return await NfeCanaFornecimentoDiario.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeCanaFornecimentoDiario(id: number) {
    return await NfeCanaFornecimentoDiario.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeCanaFornecimentoDiarioService();