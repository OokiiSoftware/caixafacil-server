import NfeProcessoReferenciado from '../models/nfe_processo_referenciado';

class NfeProcessoReferenciadoService {
  
  async getListNfeProcessoReferenciado() {
    return await NfeProcessoReferenciado.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeProcessoReferenciadoById(Id: number) {
    return await NfeProcessoReferenciado.findByPk(Id);
  }

  async insertNfeProcessoReferenciado(value: NfeProcessoReferenciado) {
    return await NfeProcessoReferenciado.create(value);
  }

  async updateNfeProcessoReferenciado(id: number, value: NfeProcessoReferenciado) {
    return await NfeProcessoReferenciado.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeProcessoReferenciado(id: number) {
    return await NfeProcessoReferenciado.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeProcessoReferenciadoService();