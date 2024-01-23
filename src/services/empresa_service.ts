import Empresa from '../models/empresa';

class EmpresaService {
  
  async getListEmpresa() {
    return await Empresa.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getEmpresaById(Id: number) {
    return await Empresa.findByPk(Id);
  }

  async insertEmpresa(value: Empresa) {
    return await Empresa.create(value);
  }

  async updateEmpresa(id: number, value: Empresa) {
    return await Empresa.update(value, {
      where: {id: id}
    });
  }

  async deleteEmpresa(id: number) {
    return await Empresa.destroy({
      where: {id: id}
    });
  }

}

  export default new EmpresaService();