import { createInMemoryUserRepository } from "../tests/ports/in-memory-user-repository";
import { registerUser } from "./register-user.use-case";

describe('Register User - Use case', () => {

    it('Should register a user succesfully', async () => {
        const UserRepository = createInMemoryUserRepository();
        const input = {
            name: 'Tiago',
            email: 'tiagolindo@gmail.com',
            senha: '1234'
        }

        await registerUser(input, UserRepository);

        const savedUser = await UserRepository.findByEmail(input.email);
        expect(savedUser).toBeDefined();
        expect(savedUser?.name).toBe(input.name);
    });

    it('Should throw an error if user already exists', async() => {
        const UserRepository = createInMemoryUserRepository([
            { id: '123', name: 'Pedro', email: 'pedrodias@hotmail.com', senhaHash: '123', createData: new Date }
        ]);

        const input = {
            name: 'Tiago',
            email: 'pedrodias@hotmail.com',
            senha: '1234'
        }

        await expect(registerUser(input, UserRepository))
            .rejects
            .toThrow('User email already exists');

    });  
});