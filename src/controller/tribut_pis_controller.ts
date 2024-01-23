import { Request, Response } from "express";
import TributPis from "../services/tribut_pis_service";

class TributPisController {
    
    async getListTributPis(req: Request, res: Response) {
        try {
            const response = await TributPis.getListTributPis();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getTributPisById(req: Request, res: Response) {
        try {
            const response = await TributPis.getTributPisById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertTributPis(req: Request, res: Response) {
        try {
            const response = await TributPis.insertTributPis(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateTributPis(req: Request, res: Response) {
        try {
            const response = await TributPis.updateTributPis(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteTributPis(req: Request, res: Response) {
        try {
            const response = await TributPis.deleteTributPis(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new TributPisController();