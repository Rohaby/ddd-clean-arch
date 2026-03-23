import { Endereco } from "../Domain/Endereco";

export class EnderecoRepository{

    private static enderecos: Endereco[] = [];

// LISTAR ENDERECOS:
    async listarEnderecos(){
        return  EnderecoRepository.enderecos;
    }

    // BUSCAR ENDERECO
    async buscarEnderecoPorId(idEndereco: number){
        return EnderecoRepository.enderecos.find(endereco => endereco.idEndereco === idEndereco);
    }

    // INSERIR NOVO ENDEREÇO
        async inserirEndereco(endereco: Endereco){
        EnderecoRepository.enderecos.push(endereco);
    }

    // REMOVER ENDEREÇO
    async removerEndereco(idEndereco: number){
        EnderecoRepository.enderecos = EnderecoRepository.enderecos.filter(endereco => endereco.idEndereco !== idEndereco);
    }
}