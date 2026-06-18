import uuid = require("uuid");

export type Task = {
    id: string;
    title:string;
    isCompleted: boolean;
}

export const CreateTask = (title: string): Task => {
    if (title.length < 2) {
        throw new Error('Título tem que ter mais de 2 caracteres')
    }

    return Object.freeze({
        id: uuid.v4(),
        title,
        isCompleted: false
    });
}