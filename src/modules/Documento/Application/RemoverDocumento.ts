import { DocumentoRepository } from "../infrasctructure/DocumentoRepository";

export class removerDocumentos{

    constructor(private repository = new DocumentoRepository()){}

    async execute(idDocumento: number){

    await this.repository.removerDocumentos(idDocumento);

    }

}