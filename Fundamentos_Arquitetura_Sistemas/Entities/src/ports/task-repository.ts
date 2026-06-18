export type ITaskRepository = {
    save: (task: Task) => Promisse<void>;

}

