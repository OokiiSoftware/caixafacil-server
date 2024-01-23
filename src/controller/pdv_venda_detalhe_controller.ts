import { Request, Response } from "express";
import PdvVendaDetalhe from "../services/pdv_venda_detalhe_service";

class PdvVendaDetalheController {
    
    async getListPdvVendaDetalhe(req: Request, res: Response) {
        try {
            const response = await PdvVendaDetalhe.getListPdvVendaDetalhe();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getPdvVendaDetalheById(req: Request, res: Response) {
        try {
            const response = await PdvVendaDetalhe.getPdvVendaDetalheById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertPdvVendaDetalhe(req: Request, res: Response) {
        try {
            const response = await PdvVendaDetalhe.insertPdvVendaDetalhe(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updatePdvVendaDetalhe(req: Request, res: Response) {
        try {
            const response = await PdvVendaDetalhe.updatePdvVendaDetalhe(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deletePdvVendaDetalhe(req: Request, res: Response) {
        try {
            const response = await PdvVendaDetalhe.deletePdvVendaDetalhe(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new PdvVendaDetalheController();