import PdvVendaDetalhe from '../models/pdv_venda_detalhe';

class PdvVendaDetalheService {
  
  async getListPdvVendaDetalhe() {
    return await PdvVendaDetalhe.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getPdvVendaDetalheById(Id: number) {
    return await PdvVendaDetalhe.findByPk(Id);
  }

  async insertPdvVendaDetalhe(value: PdvVendaDetalhe) {
    return await PdvVendaDetalhe.create(value);
  }

  async updatePdvVendaDetalhe(id: number, value: PdvVendaDetalhe) {
    return await PdvVendaDetalhe.update(value, {
      where: {id: id}
    });
  }

  async deletePdvVendaDetalhe(id: number) {
    return await PdvVendaDetalhe.destroy({
      where: {id: id}
    });
  }

}

  export default new PdvVendaDetalheService();