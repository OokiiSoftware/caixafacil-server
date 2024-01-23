import { Request, Response } from "express";
import NfeDetEspecificoCombustivel from "../services/nfe_det_especifico_combustivel_service";

class NfeDetEspecificoCombustivelController {
    
    async getListNfeDetEspecificoCombustivel(req: Request, res: Response) {
        try {
            const response = await NfeDetEspecificoCombustivel.getListNfeDetEspecificoCombustivel();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeDetEspecificoCombustivelById(req: Request, res: Response) {
        try {
            const response = await NfeDetEspecificoCombustivel.getNfeDetEspecificoCombustivelById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeDetEspecificoCombustivel(req: Request, res: Response) {
        try {
            const response = await NfeDetEspecificoCombustivel.insertNfeDetEspecificoCombustivel(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeDetEspecificoCombustivel(req: Request, res: Response) {
        try {
            const response = await NfeDetEspecificoCombustivel.updateNfeDetEspecificoCombustivel(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeDetEspecificoCombustivel(req: Request, res: Response) {
        try {
            const response = await NfeDetEspecificoCombustivel.deleteNfeDetEspecificoCombustivel(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeDetEspecificoCombustivelController();