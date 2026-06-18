import { v4 } from 'uuid';
import { hashSync } from 'bcryptjs';

export type User = {
    id: string;
    name: string;
    email: string;
    senhaHash: string;
    createData: Date;
}
type CreateUserType = {
    name: string;
    email: string;
    senha: string;
}

const HashSenha = (senha: string) => {
    return hashSync(senha)
}

export const createUser = ({ name, email, senha }: CreateUserType): User => {
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