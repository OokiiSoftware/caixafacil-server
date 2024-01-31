/*******************************************************************************
Title: T2Ti ERP 3.0                                                                
Description: Model relacionado à tabela [AGENDA_COMPROMISSO] 
                                                                                
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

@Entity({ name: 'AGENDA_COMPROMISSO' })
export class AgendaCompromisso { 

	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'ID_AGENDA_CATEGORIA_COMPROMISSO' })
	idAgendaCategoriaCompromisso: number;

	@Column({ name: 'ID_COLABORADOR' })
	idColaborador: number;

	@Column({ name: 'DATA_COMPROMISSO' })
	dataCompromisso: Date;

	@Column({ name: 'HORA' })
	hora: string;

	@Column({ name: 'DURACAO' })
	duracao: number;

	@Column({ name: 'ONDE' })
	onde: string;

	@Column({ name: 'DESCRICAO' })
	descricao: string;

	@Column({ name: 'TIPO' })
	tipo: string;


	/**
	* Relations
	*/

	/**
	* Constructor
	*/
	constructor(objetoJson: {}) {
		if (objetoJson != null) {
			this.id = objetoJson['id'] == 0 ? undefined : objetoJson['id'];
			this.idAgendaCategoriaCompromisso = objetoJson['idAgendaCategoriaCompromisso'];
			this.idColaborador = objetoJson['idColaborador'];
			this.dataCompromisso = objetoJson['dataCompromisso'];
			this.hora = objetoJson['hora'];
			this.duracao = objetoJson['duracao'];
			this.onde = objetoJson['onde'];
			this.descricao = objetoJson['descricao'];
			this.tipo = objetoJson['tipo'];
			
			
		}
	}
}