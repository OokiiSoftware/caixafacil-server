import { Request, Response } from "express";
import NfeDetalheImpostoIcms from "../services/nfe_detalhe_imposto_icms_service";

class NfeDetalheImpostoIcmsController {
    
    async getListNfeDetalheImpostoIcms(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIcms.getListNfeDetalheImpostoIcms();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeDetalheImpostoIcmsById(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIcms.getNfeDetalheImpostoIcmsById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeDetalheImpostoIcms(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIcms.insertNfeDetalheImpostoIcms(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeDetalheImpostoIcms(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIcms.updateNfeDetalheImpostoIcms(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeDetalheImpostoIcms(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIcms.deleteNfeDetalheImpostoIcms(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeDetalheImpostoIcmsController();