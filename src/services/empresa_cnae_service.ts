import EmpresaCnae from '../models/empresa_cnae';

class EmpresaCnaeService {
  
  async getListEmpresaCnae() {
    return await EmpresaCnae.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getEmpresaCnaeById(Id: number) {
    return await EmpresaCnae.findByPk(Id);
  }

  async insertEmpresaCnae(value: EmpresaCnae) {
    return await EmpresaCnae.create(value);
  }

  async updateEmpresaCnae(id: number, value: EmpresaCnae) {
    return await EmpresaCnae.update(value, {
      where: {id: id}
    });
  }

  async deleteEmpresaCnae(id: number) {
    return await EmpresaCnae.destroy({
      where: {id: id}
    });
  }

}

  export default new EmpresaCnaeService();