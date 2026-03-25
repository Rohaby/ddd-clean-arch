import { TelefoneRepository } from "../Infrastructure/TelefoneRepository";

export class buscarTelefonePorNumero{

    constructor(private repository = new TelefoneRepository()){}

    async execute(numeroTelefone: number){

        return this.repository.buscarTelefonePorNumero(numeroTelefone);
        
    }
}