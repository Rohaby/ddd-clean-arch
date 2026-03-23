import { DocumentoRepository } from "../infrasctructure/DocumentoRepository";

export class listarDocumentos{

    constructor(private repository = new DocumentoRepository()){}

    async execute(){
        return this.repository.listarDocumentos();
    }
}