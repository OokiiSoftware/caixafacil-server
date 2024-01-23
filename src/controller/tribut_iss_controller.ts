import { Request, Response } from "express";
import TributIss from "../services/tribut_iss_service";

class TributIssController {
    
    async getListTributIss(req: Request, res: Response) {
        try {
            const response = await TributIss.getListTributIss();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getTributIssById(req: Request, res: Response) {
        try {
            const response = await TributIss.getTributIssById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertTributIss(req: Request, res: Response) {
        try {
            const response = await TributIss.insertTributIss(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateTributIss(req: Request, res: Response) {
        try {
            const response = await TributIss.updateTributIss(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteTributIss(req: Request, res: Response) {
        try {
            const response = await TributIss.deleteTributIss(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new TributIssController();