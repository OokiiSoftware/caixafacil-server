import { Request, Response } from "express";
import Cfop from "../services/cfop_service";

class CfopController {
    
    async getListCfop(req: Request, res: Response) {
        try {
            const response = await Cfop.getListCfop();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getCfopById(req: Request, res: Response) {
        try {
            const response = await Cfop.getCfopById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertCfop(req: Request, res: Response) {
        try {
            const response = await Cfop.insertCfop(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateCfop(req: Request, res: Response) {
        try {
            const response = await Cfop.updateCfop(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteCfop(req: Request, res: Response) {
        try {
            const response = await Cfop.deleteCfop(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new CfopController();