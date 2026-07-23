import { Prisma } from "../generated/prisma/client.js";
import { prisma } from "../libs/prisma.js"


export const createUser = async ( data : Prisma.UserCreateInput) => {
    try {
        const user = await prisma.user.create({ data });
        return user
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return ({ error: 'E-mail já cadastrado.'})
            }
        }
        return ({ error: 'Ocorreu um erro.'})
    }
}

export const createUsers = async (users: Prisma.UserCreateInput[]) => {
    try {
        return await prisma.user.createMany({
            data: users,
            skipDuplicates: true
        })
    } catch (error) {
        return false
    }
}

export const getAllUsers = async () => {
    const users = await prisma.user.findMany({ 
        select: {
            id: true,
            name: true,
            email: true,
            status: true
        },
        where: {
           OR: [
            {
                email: { endsWith: '@delas.com'},
                name: { startsWith: 'L'}
            },
            {
                email: { endsWith: '@gmail.com'}
            }
           ]
        }
    });
    return users;
}

export const getUserByEmail = async (email: string) => {
    const user = await prisma.user.findFirst({
        select: {
            id: true,
            name:true
        },
        where: {
            email
        }
    })

    return user
}