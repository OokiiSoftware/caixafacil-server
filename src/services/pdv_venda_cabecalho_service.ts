import PdvVendaCabecalho from '../models/pdv_venda_cabecalho';

class PdvVendaCabecalhoService {
  
  async getListPdvVendaCabecalho() {
    return await PdvVendaCabecalho.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getPdvVendaCabecalhoById(Id: number) {
    return await PdvVendaCabecalho.findByPk(Id);
  }

  async insertPdvVendaCabecalho(value: PdvVendaCabecalho) {
    return await PdvVendaCabecalho.create(value);
  }

  async updatePdvVendaCabecalho(id: number, value: PdvVendaCabecalho) {
    return await PdvVendaCabecalho.update(value, {
      where: {id: id}
    });
  }

  async deletePdvVendaCabecalho(id: number) {
    return await PdvVendaCabecalho.destroy({
      where: {id: id}
    });
  }

}

  export default new PdvVendaCabecalhoService();