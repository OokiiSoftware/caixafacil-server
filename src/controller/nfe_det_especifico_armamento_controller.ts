import { Request, Response } from "express";
import NfeDetEspecificoArmamento from "../services/nfe_det_especifico_armamento_service";

class NfeDetEspecificoArmamentoController {
    
    async getListNfeDetEspecificoArmamento(req: Request, res: Response) {
        try {
            const response = await NfeDetEspecificoArmamento.getListNfeDetEspecificoArmamento();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeDetEspecificoArmamentoById(req: Request, res: Response) {
        try {
            const response = await NfeDetEspecificoArmamento.getNfeDetEspecificoArmamentoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeDetEspecificoArmamento(req: Request, res: Response) {
        try {
            const response = await NfeDetEspecificoArmamento.insertNfeDetEspecificoArmamento(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeDetEspecificoArmamento(req: Request, res: Response) {
        try {
            const response = await NfeDetEspecificoArmamento.updateNfeDetEspecificoArmamento(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeDetEspecificoArmamento(req: Request, res: Response) {
        try {
            const response = await NfeDetEspecificoArmamento.deleteNfeDetEspecificoArmamento(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeDetEspecificoArmamentoController();