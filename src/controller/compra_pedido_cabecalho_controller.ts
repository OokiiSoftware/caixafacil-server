import { Request, Response } from "express";
import CompraPedidoCabecalho from "../services/compra_pedido_cabecalho_service";

class CompraPedidoCabecalhoController {
    
    async getListCompraPedidoCabecalho(req: Request, res: Response) {
        try {
            const response = await CompraPedidoCabecalho.getListCompraPedidoCabecalho();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getCompraPedidoCabecalhoById(req: Request, res: Response) {
        try {
            const response = await CompraPedidoCabecalho.getCompraPedidoCabecalhoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertCompraPedidoCabecalho(req: Request, res: Response) {
        try {
            const response = await CompraPedidoCabecalho.insertCompraPedidoCabecalho(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateCompraPedidoCabecalho(req: Request, res: Response) {
        try {
            const response = await CompraPedidoCabecalho.updateCompraPedidoCabecalho(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteCompraPedidoCabecalho(req: Request, res: Response) {
        try {
            const response = await CompraPedidoCabecalho.deleteCompraPedidoCabecalho(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new CompraPedidoCabecalhoController();