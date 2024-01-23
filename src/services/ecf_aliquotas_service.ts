import EcfAliquotas from '../models/ecf_aliquotas';

class EcfAliquotasService {
  
  async getListEcfAliquotas() {
    return await EcfAliquotas.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getEcfAliquotasById(Id: number) {
    return await EcfAliquotas.findByPk(Id);
  }

  async insertEcfAliquotas(value: EcfAliquotas) {
    return await EcfAliquotas.create(value);
  }

  async updateEcfAliquotas(id: number, value: EcfAliquotas) {
    return await EcfAliquotas.update(value, {
      where: {id: id}
    });
  }

  async deleteEcfAliquotas(id: number) {
    return await EcfAliquotas.destroy({
      where: {id: id}
    });
  }

}

  export default new EcfAliquotasService();