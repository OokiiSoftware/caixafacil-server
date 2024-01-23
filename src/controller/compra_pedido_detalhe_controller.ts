import { Request, Response } from "express";
import CompraPedidoDetalhe from "../services/compra_pedido_detalhe_service";

class CompraPedidoDetalheController {
    
    async getListCompraPedidoDetalhe(req: Request, res: Response) {
        try {
            const response = await CompraPedidoDetalhe.getListCompraPedidoDetalhe();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getCompraPedidoDetalheById(req: Request, res: Response) {
        try {
            const response = await CompraPedidoDetalhe.getCompraPedidoDetalheById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertCompraPedidoDetalhe(req: Request, res: Response) {
        try {
            const response = await CompraPedidoDetalhe.insertCompraPedidoDetalhe(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateCompraPedidoDetalhe(req: Request, res: Response) {
        try {
            const response = await CompraPedidoDetalhe.updateCompraPedidoDetalhe(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteCompraPedidoDetalhe(req: Request, res: Response) {
        try {
            const response = await CompraPedidoDetalhe.deleteCompraPedidoDetalhe(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new CompraPedidoDetalheController();