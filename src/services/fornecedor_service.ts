import Fornecedor from '../models/fornecedor';

class FornecedorService {
  
  async getListFornecedor() {
    return await Fornecedor.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getFornecedorById(Id: number) {
    return await Fornecedor.findByPk(Id);
  }

  async insertFornecedor(value: Fornecedor) {
    return await Fornecedor.create(value);
  }

  async updateFornecedor(id: number, value: Fornecedor) {
    return await Fornecedor.update(value, {
      where: {id: id}
    });
  }

  async deleteFornecedor(id: number) {
    return await Fornecedor.destroy({
      where: {id: id}
    });
  }

}

  export default new FornecedorService();