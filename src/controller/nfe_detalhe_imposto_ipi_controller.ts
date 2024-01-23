import { Request, Response } from "express";
import NfeDetalheImpostoIpi from "../services/nfe_detalhe_imposto_ipi_service";

class NfeDetalheImpostoIpiController {
    
    async getListNfeDetalheImpostoIpi(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIpi.getListNfeDetalheImpostoIpi();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeDetalheImpostoIpiById(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIpi.getNfeDetalheImpostoIpiById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeDetalheImpostoIpi(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIpi.insertNfeDetalheImpostoIpi(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeDetalheImpostoIpi(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIpi.updateNfeDetalheImpostoIpi(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeDetalheImpostoIpi(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIpi.deleteNfeDetalheImpostoIpi(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeDetalheImpostoIpiController();