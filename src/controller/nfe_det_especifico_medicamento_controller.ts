import { Request, Response } from "express";
import NfeDetEspecificoMedicamento from "../services/nfe_det_especifico_medicamento_service";

class NfeDetEspecificoMedicamentoController {
    
    async getListNfeDetEspecificoMedicamento(req: Request, res: Response) {
        try {
            const response = await NfeDetEspecificoMedicamento.getListNfeDetEspecificoMedicamento();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeDetEspecificoMedicamentoById(req: Request, res: Response) {
        try {
            const response = await NfeDetEspecificoMedicamento.getNfeDetEspecificoMedicamentoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeDetEspecificoMedicamento(req: Request, res: Response) {
        try {
            const response = await NfeDetEspecificoMedicamento.insertNfeDetEspecificoMedicamento(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeDetEspecificoMedicamento(req: Request, res: Response) {
        try {
            const response = await NfeDetEspecificoMedicamento.updateNfeDetEspecificoMedicamento(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeDetEspecificoMedicamento(req: Request, res: Response) {
        try {
            const response = await NfeDetEspecificoMedicamento.deleteNfeDetEspecificoMedicamento(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeDetEspecificoMedicamentoController();