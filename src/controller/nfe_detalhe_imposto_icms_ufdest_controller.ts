import { Request, Response } from "express";
import NfeDetalheImpostoIcmsUfdest from "../services/nfe_detalhe_imposto_icms_ufdest_service";

class NfeDetalheImpostoIcmsUfdestController {
    
    async getListNfeDetalheImpostoIcmsUfdest(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIcmsUfdest.getListNfeDetalheImpostoIcmsUfdest();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeDetalheImpostoIcmsUfdestById(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIcmsUfdest.getNfeDetalheImpostoIcmsUfdestById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeDetalheImpostoIcmsUfdest(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIcmsUfdest.insertNfeDetalheImpostoIcmsUfdest(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeDetalheImpostoIcmsUfdest(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIcmsUfdest.updateNfeDetalheImpostoIcmsUfdest(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeDetalheImpostoIcmsUfdest(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIcmsUfdest.deleteNfeDetalheImpostoIcmsUfdest(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeDetalheImpostoIcmsUfdestController();