import Empresa from '../models/empresa';

class EmpresaService {
  
  async getListEmpresa() {
    const values = await Empresa.findAll();

    return values;
  }

  async getEmpresaById(Id: number) {
    const values = await Empresa.findByPk(Id);

    return values;
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