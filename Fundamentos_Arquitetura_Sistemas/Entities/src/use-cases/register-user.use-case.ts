import { createUser } from "../entities/user.entity";
import { UserRepository } from "../ports/user-repository";

type RegisterUserInput = {
    name:string;
    email: string;
    senha:string;
}

export const registerUser = async (
    input: RegisterUserInput,
    repository: UserRepository
) => {
    const exists = await repository.findByEmail(input.email);
    if (exists) {
        throw new Error('User email already exists');
    }

    const user = createUser(input);
    await repository.save(user)
}