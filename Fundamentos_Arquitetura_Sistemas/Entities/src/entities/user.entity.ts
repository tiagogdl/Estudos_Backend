import { v4 } from 'uuid';
import { hashSync } from 'bcryptjs';

type CreateUserType = {
    name: string;
    email: string;
    senha: string;
}

const HashSenha = (senha: string) => {
    return hashSync(senha)
}

export const createUser = ({ name, email, senha }: CreateUserType) => {
    const id = v4();
    const senhaHash = HashSenha(senha);
    const createData = new Date();

    return Object.freeze({
        id,
        name,
        email,
        senhaHash,
        createData
    })
}