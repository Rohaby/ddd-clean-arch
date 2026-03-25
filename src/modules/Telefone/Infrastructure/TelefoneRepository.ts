import { Telefone } from "../Domain/Telefone";

export class TelefoneRepository{

    private static telefones: Telefone[] = [];

// LISTAR Telefone:
    async listarTelefone(){
        return  TelefoneRepository.telefones;
    }

    // BUSCAR Telefone
    async buscarTelefonePorId(idTelefone: number){
        return TelefoneRepository.telefones.find(telefones => telefones.idTelefone === idTelefone);
    }

    // BUSCAR TELEFONE POR NUMERO
    async buscar

    // INSERIR NOVO Telefone
        async inserirTelefone(telefone: Telefone){
        TelefoneRepository.telefones.push(telefone);
    }

    // REMOVER Telefone
    async removerTelefone(idTelefone: number){
        TelefoneRepository.telefones = TelefoneRepository.telefones.filter(telefone => telefone.idTelefone !== idTelefone);
    }

    // ATUALIZAR TELEFONE :

    async atualizarTelefone(telefone: Telefone) {

        //Buscando a posição em que o telefone solicitado para atualizar está dentro da array.
        const indice = TelefoneRepository.telefones.findIndex(telefone => telefone.idTelefone === telefone.idTelefone);

        if (indice !== -1) {
            TelefoneRepository.telefones[indice] = telefone;

        } else {

            console.log( 'Endereço nao encontrado!');
        }
    }
}