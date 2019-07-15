import { TodoModel } from './models';

export type TodosDict = {
    [Key: string]: TodoModel
}

export type TodosDictState = {
    byId: TodosDict,
    allIds: string[]
}