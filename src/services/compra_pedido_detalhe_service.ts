import CompraPedidoDetalhe from '../models/compra_pedido_detalhe';

class CompraPedidoDetalheService {
  
  async getListCompraPedidoDetalhe() {
    return await CompraPedidoDetalhe.findAll({
      limit: 40,
      include: [{ all: true, nested: true }],
    });
  }

  async getCompraPedidoDetalheById(Id: number) {
    return await CompraPedidoDetalhe.findByPk(Id);
  }

  async insertCompraPedidoDetalhe(value: CompraPedidoDetalhe) {
    return await CompraPedidoDetalhe.create(value);
  }

  async updateCompraPedidoDetalhe(id: number, value: CompraPedidoDetalhe) {
    return await CompraPedidoDetalhe.update(value, {
      where: {id: id}
    });
  }

  async deleteCompraPedidoDetalhe(id: number) {
    return await CompraPedidoDetalhe.destroy({
      where: {id: id}
    });
  }

}

  export default new CompraPedidoDetalheService();