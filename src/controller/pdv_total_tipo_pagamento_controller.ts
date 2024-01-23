import { Request, Response } from "express";
import PdvTotalTipoPagamento from "../services/pdv_total_tipo_pagamento_service";

class PdvTotalTipoPagamentoController {
    
    async getListPdvTotalTipoPagamento(req: Request, res: Response) {
        try {
            const response = await PdvTotalTipoPagamento.getListPdvTotalTipoPagamento();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getPdvTotalTipoPagamentoById(req: Request, res: Response) {
        try {
            const response = await PdvTotalTipoPagamento.getPdvTotalTipoPagamentoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertPdvTotalTipoPagamento(req: Request, res: Response) {
        try {
            const response = await PdvTotalTipoPagamento.insertPdvTotalTipoPagamento(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updatePdvTotalTipoPagamento(req: Request, res: Response) {
        try {
            const response = await PdvTotalTipoPagamento.updatePdvTotalTipoPagamento(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deletePdvTotalTipoPagamento(req: Request, res: Response) {
        try {
            const response = await PdvTotalTipoPagamento.deletePdvTotalTipoPagamento(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new PdvTotalTipoPagamentoController();