import { Request, Response } from "express";
import NfeDetalheImpostoPisSt from "../services/nfe_detalhe_imposto_pis_st_service";

class NfeDetalheImpostoPisStController {
    
    async getListNfeDetalheImpostoPisSt(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoPisSt.getListNfeDetalheImpostoPisSt();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeDetalheImpostoPisStById(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoPisSt.getNfeDetalheImpostoPisStById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeDetalheImpostoPisSt(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoPisSt.insertNfeDetalheImpostoPisSt(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeDetalheImpostoPisSt(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoPisSt.updateNfeDetalheImpostoPisSt(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeDetalheImpostoPisSt(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoPisSt.deleteNfeDetalheImpostoPisSt(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeDetalheImpostoPisStController();