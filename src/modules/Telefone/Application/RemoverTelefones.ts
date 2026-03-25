import { TelefoneRepository } from "../Infrastructure/TelefoneRepository";

export class removerTelefones{

    constructor(private repository = new TelefoneRepository()){}

    async execute(idTelefone: number){

    await this.repository.removerTelefone(idTelefone);

    }

}