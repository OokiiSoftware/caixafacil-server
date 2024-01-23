import ProdutoTipo from '../models/produto_tipo';

class ProdutoTipoService {
  
  async getListProdutoTipo() {
    return await ProdutoTipo.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getProdutoTipoById(Id: number) {
    return await ProdutoTipo.findByPk(Id);
  }

  async insertProdutoTipo(value: ProdutoTipo) {
    return await ProdutoTipo.create(value);
  }

  async updateProdutoTipo(id: number, value: ProdutoTipo) {
    return await ProdutoTipo.update(value, {
      where: {id: id}
    });
  }

  async deleteProdutoTipo(id: number) {
    return await ProdutoTipo.destroy({
      where: {id: id}
    });
  }

}

  export default new ProdutoTipoService();