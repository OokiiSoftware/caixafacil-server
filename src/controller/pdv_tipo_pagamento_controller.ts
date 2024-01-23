import { Request, Response } from "express";
import PdvTipoPagamento from "../services/pdv_tipo_pagamento_service";

class PdvTipoPagamentoController {
    
    async getListPdvTipoPagamento(req: Request, res: Response) {
        try {
            const response = await PdvTipoPagamento.getListPdvTipoPagamento();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getPdvTipoPagamentoById(req: Request, res: Response) {
        try {
            const response = await PdvTipoPagamento.getPdvTipoPagamentoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertPdvTipoPagamento(req: Request, res: Response) {
        try {
            const response = await PdvTipoPagamento.insertPdvTipoPagamento(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updatePdvTipoPagamento(req: Request, res: Response) {
        try {
            const response = await PdvTipoPagamento.updatePdvTipoPagamento(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deletePdvTipoPagamento(req: Request, res: Response) {
        try {
            const response = await PdvTipoPagamento.deletePdvTipoPagamento(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new PdvTipoPagamentoController();