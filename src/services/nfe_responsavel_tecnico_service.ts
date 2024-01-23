import NfeResponsavelTecnico from '../models/nfe_responsavel_tecnico';

class NfeResponsavelTecnicoService {
  
  async getListNfeResponsavelTecnico() {
    return await NfeResponsavelTecnico.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getNfeResponsavelTecnicoById(Id: number) {
    return await NfeResponsavelTecnico.findByPk(Id);
  }

  async insertNfeResponsavelTecnico(value: NfeResponsavelTecnico) {
    return await NfeResponsavelTecnico.create(value);
  }

  async updateNfeResponsavelTecnico(id: number, value: NfeResponsavelTecnico) {
    return await NfeResponsavelTecnico.update(value, {
      where: {id: id}
    });
  }

  async deleteNfeResponsavelTecnico(id: number) {
    return await NfeResponsavelTecnico.destroy({
      where: {id: id}
    });
  }

}

  export default new NfeResponsavelTecnicoService();