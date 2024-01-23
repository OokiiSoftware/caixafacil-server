import Produto from '../models/produto';

class ProdutoService {
  
  async getListProduto() {
    return await Produto.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getProdutoById(Id: number) {
    return await Produto.findByPk(Id);
  }

  async insertProduto(value: Produto) {
    return await Produto.create(value);
  }

  async updateProduto(id: number, value: Produto) {
    return await Produto.update(value, {
      where: {id: id}
    });
  }

  async deleteProduto(id: number) {
    return await Produto.destroy({
      where: {id: id}
    });
  }

}

  export default new ProdutoService();