import NfeItemRastreado from '../models/nfe_item_rastreado';

class NfeItemRastreadoService {
  
  async getListNfeItemRastreado() {
    return await NfeItemRastreado.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeItemRastreadoById(Id: number) {
    return await NfeItemRastreado.findByPk(Id);
  }

  async insertNfeItemRastreado(value: NfeItemRastreado) {
    return await NfeItemRastreado.create(value);
  }

  async updateNfeItemRastreado(id: number, value: NfeItemRastreado) {
    return await NfeItemRastreado.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeItemRastreado(id: number) {
    return await NfeItemRastreado.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeItemRastreadoService();