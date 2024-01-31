/*******************************************************************************
Title: T2Ti ERP 3.0                                                                
Description: Model relacionado à tabela [PATRIM_GRUPO_BEM] 
                                                                                
The MIT License                                                                 
                                                                                
Copyright: Copyright (C) 2021 T2Ti.COM                                          
                                                                                
Permission is hereby granted, free of charge, to any person                     
obtaining a copy of this software and associated documentation                  
files (the "Software"), to deal in the Software without                         
restriction, including without limitation the rights to use,                    
copy, modify, merge, publish, distribute, sublicense, and/or sell               
copies of the Software, and to permit persons to whom the                       
Software is furnished to do so, subject to the following                        
conditions:                                                                     
                                                                                
The above copyright notice and this permission notice shall be                  
included in all copies or substantial portions of the Software.                 
                                                                                
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,                 
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES                 
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND                        
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT                     
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,                    
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING                    
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR                   
OTHER DEALINGS IN THE SOFTWARE.                                                 
                                                                                
       The author may be contacted at:                                          
           t2ti.com@gmail.com                                                   
                                                                                
@author Albert Eije (alberteije@gmail.com)                    
@version 1.0.0
*******************************************************************************/
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'PATRIM_GRUPO_BEM' })
export class PatrimGrupoBem { 

	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'CODIGO' })
	codigo: string;

	@Column({ name: 'NOME' })
	nome: string;

	@Column({ name: 'DESCRICAO' })
	descricao: string;

	@Column({ name: 'CONTA_ATIVO_IMOBILIZADO' })
	contaAtivoImobilizado: string;

	@Column({ name: 'CONTA_DEPRECIACAO_ACUMULADA' })
	contaDepreciacaoAcumulada: string;

	@Column({ name: 'CONTA_DESPESA_DEPRECIACAO' })
	contaDespesaDepreciacao: string;

	@Column({ name: 'CODIGO_HISTORICO' })
	codigoHistorico: number;


	/**
	* Relations
	*/

	/**
	* Constructor
	*/
	constructor(objetoJson: {}) {
		if (objetoJson != null) {
			this.id = objetoJson['id'] == 0 ? undefined : objetoJson['id'];
			this.codigo = objetoJson['codigo'];
			this.nome = objetoJson['nome'];
			this.descricao = objetoJson['descricao'];
			this.contaAtivoImobilizado = objetoJson['contaAtivoImobilizado'];
			this.contaDepreciacaoAcumulada = objetoJson['contaDepreciacaoAcumulada'];
			this.contaDespesaDepreciacao = objetoJson['contaDespesaDepreciacao'];
			this.codigoHistorico = objetoJson['codigoHistorico'];
			
			
		}
	}
}