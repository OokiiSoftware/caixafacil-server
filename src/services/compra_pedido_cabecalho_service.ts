import CompraPedidoCabecalho from '../models/compra_pedido_cabecalho';

class CompraPedidoCabecalhoService {
  
  async getListCompraPedidoCabecalho() {
    return await CompraPedidoCabecalho.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getCompraPedidoCabecalhoById(Id: number) {
    return await CompraPedidoCabecalho.findByPk(Id);
  }

  async insertCompraPedidoCabecalho(value: CompraPedidoCabecalho) {
    return await CompraPedidoCabecalho.create(value);
  }

  async updateCompraPedidoCabecalho(id: number, value: CompraPedidoCabecalho) {
    return await CompraPedidoCabecalho.update(value, {
      where: {id: id}
    });
  }

  async deleteCompraPedidoCabecalho(id: number) {
    return await CompraPedidoCabecalho.destroy({
      where: {id: id}
    });
  }

}

  export default new CompraPedidoCabecalhoService();