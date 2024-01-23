import NfeDetEspecificoCombustivel from '../models/nfe_det_especifico_combustivel';

class NfeDetEspecificoCombustivelService {
  
  async getListNfeDetEspecificoCombustivel() {
    return await NfeDetEspecificoCombustivel.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeDetEspecificoCombustivelById(Id: number) {
    return await NfeDetEspecificoCombustivel.findByPk(Id);
  }

  async insertNfeDetEspecificoCombustivel(value: NfeDetEspecificoCombustivel) {
    return await NfeDetEspecificoCombustivel.create(value);
  }

  async updateNfeDetEspecificoCombustivel(id: number, value: NfeDetEspecificoCombustivel) {
    return await NfeDetEspecificoCombustivel.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeDetEspecificoCombustivel(id: number) {
    return await NfeDetEspecificoCombustivel.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeDetEspecificoCombustivelService();