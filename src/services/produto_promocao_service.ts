import ProdutoPromocao from '../models/produto_promocao';

class ProdutoPromocaoService {
  
  async getListProdutoPromocao() {
    return await ProdutoPromocao.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getProdutoPromocaoById(Id: number) {
    return await ProdutoPromocao.findByPk(Id);
  }

  async insertProdutoPromocao(value: ProdutoPromocao) {
    return await ProdutoPromocao.create(value);
  }

  async updateProdutoPromocao(id: number, value: ProdutoPromocao) {
    return await ProdutoPromocao.update(value, {
      where: {id: id}
    });
  }

  async deleteProdutoPromocao(id: number) {
    return await ProdutoPromocao.destroy({
      where: {id: id}
    });
  }

}

  export default new ProdutoPromocaoService();