import { TelefoneRepository } from "../Infrastructure/TelefoneRepository";

export class buscarTelefoneId{

    constructor(private repository = new TelefoneRepository()){}

    async execute(idTelefone: number){

        return this.repository.buscarTelefonePorId(idTelefone);
        
    }
}