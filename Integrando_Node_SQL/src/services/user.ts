import { time } from "node:console";
import { Prisma } from "../generated/prisma/client.js";
import { prisma } from "../libs/prisma.js"


export const createUser = async ( data : Prisma.UserCreateInput) => {
    const result = await prisma.user.upsert({
        where: {
            email: data.email
        },
        update: {
            role: 'ADMIN'
        },
        create: data
    })

    return result;
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
    let page = 2;
    let skip = (page - 1) * 2;

    const users = await prisma.user.findMany({ 
        skip: skip,
        take: 2
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

export const updateUser = async () => {
    const updatedUser = await prisma.user.updateMany({
        data: {
            status: true
        }
    })

    return updatedUser;
}

export const deleteUser = async () => {
    const deletedUser = await prisma.user.delete({
        where: {
            email: 'teste2@teste.com'
        }
    })

    return deletedUser;
}