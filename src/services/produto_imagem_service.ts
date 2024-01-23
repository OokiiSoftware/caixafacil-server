import ProdutoImagem from '../models/produto_imagem';

class ProdutoImagemService {
  
  async getListProdutoImagem() {
    return await ProdutoImagem.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getProdutoImagemById(Id: number) {
    return await ProdutoImagem.findByPk(Id);
  }

  async insertProdutoImagem(value: ProdutoImagem) {
    return await ProdutoImagem.create(value);
  }

  async updateProdutoImagem(id: number, value: ProdutoImagem) {
    return await ProdutoImagem.update(value, {
      where: {id: id}
    });
  }

  async deleteProdutoImagem(id: number) {
    return await ProdutoImagem.destroy({
      where: {id: id}
    });
  }

}

  export default new ProdutoImagemService();