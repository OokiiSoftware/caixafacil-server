import ProdutoUnidade from '../models/produto_unidade';

class ProdutoUnidadeService {
  
  async getListProdutoUnidade() {
    return await ProdutoUnidade.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getProdutoUnidadeById(Id: number) {
    return await ProdutoUnidade.findByPk(Id);
  }

  async insertProdutoUnidade(value: ProdutoUnidade) {
    return await ProdutoUnidade.create(value);
  }

  async updateProdutoUnidade(id: number, value: ProdutoUnidade) {
    return await ProdutoUnidade.update(value, {
      where: {id: id}
    });
  }

  async deleteProdutoUnidade(id: number) {
    return await ProdutoUnidade.destroy({
      where: {id: id}
    });
  }

}

  export default new ProdutoUnidadeService();