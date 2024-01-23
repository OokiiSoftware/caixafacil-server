import { Request, Response } from "express";
import EcfR07 from "../services/ecf_r07_service";

class EcfR07Controller {
    
    async getListEcfR07(req: Request, res: Response) {
        try {
            const response = await EcfR07.getListEcfR07();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getEcfR07ById(req: Request, res: Response) {
        try {
            const response = await EcfR07.getEcfR07ById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertEcfR07(req: Request, res: Response) {
        try {
            const response = await EcfR07.insertEcfR07(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateEcfR07(req: Request, res: Response) {
        try {
            const response = await EcfR07.updateEcfR07(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteEcfR07(req: Request, res: Response) {
        try {
            const response = await EcfR07.deleteEcfR07(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new EcfR07Controller();