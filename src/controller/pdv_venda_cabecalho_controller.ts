import { Request, Response } from "express";
import PdvVendaCabecalho from "../services/pdv_venda_cabecalho_service";

class PdvVendaCabecalhoController {
    
    async getListPdvVendaCabecalho(req: Request, res: Response) {
        try {
            const response = await PdvVendaCabecalho.getListPdvVendaCabecalho();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getPdvVendaCabecalhoById(req: Request, res: Response) {
        try {
            const response = await PdvVendaCabecalho.getPdvVendaCabecalhoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertPdvVendaCabecalho(req: Request, res: Response) {
        try {
            const response = await PdvVendaCabecalho.insertPdvVendaCabecalho(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updatePdvVendaCabecalho(req: Request, res: Response) {
        try {
            const response = await PdvVendaCabecalho.updatePdvVendaCabecalho(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deletePdvVendaCabecalho(req: Request, res: Response) {
        try {
            const response = await PdvVendaCabecalho.deletePdvVendaCabecalho(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new PdvVendaCabecalhoController();