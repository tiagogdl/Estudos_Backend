export const registerTask = async (title: string, repository: ITaskRepository) => {
    const taskItem = createTask(title);
    await repository.save(taskItem);
    return taskItem;
}