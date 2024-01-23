import { Request, Response } from "express";
import Ibpt from "../services/ibpt_service";

class IbptController {
    
    async getListIbpt(req: Request, res: Response) {
        try {
            const response = await Ibpt.getListIbpt();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getIbptById(req: Request, res: Response) {
        try {
            const response = await Ibpt.getIbptById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertIbpt(req: Request, res: Response) {
        try {
            const response = await Ibpt.insertIbpt(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateIbpt(req: Request, res: Response) {
        try {
            const response = await Ibpt.updateIbpt(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteIbpt(req: Request, res: Response) {
        try {
            const response = await Ibpt.deleteIbpt(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new IbptController();