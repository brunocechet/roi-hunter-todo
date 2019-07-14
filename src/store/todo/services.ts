import { TodosDict } from "./types"
import { TodoCreateModel, TodoModel, TodoUpdateModel } from "./models"

const ENABLE_RANDOM_ERRORS = true

const Mock = {
    "05c4416f-2581-4116-bc14-01d8669590ac": {
        "id": "05c4416f-2581-4116-bc14-01d8669590ac",
        "text": "Feed the dog",
        "created": "2019-03-11T13:51:37.124Z",
        "updated": "2019-03-11T13:51:37.124Z",
        "isCompleted": true,
        "urgency": 5
    },
    "049d7e7b-230c-41f5-9fdf-b380d31e83ea": {
        "id": "049d7e7b-230c-41f5-9fdf-b380d31e83ea",
        "text": "Feed the baby",
        "created": "2019-03-11T07:08:33.216Z",
        "updated": "2019-03-12T06:33:30.495Z",
        "isCompleted": false,
        "urgency": 3
    },
    "d071a8dc-60c7-436c-aa94-8ced3e8ecda8": {
        "id": "d071a8dc-60c7-436c-aa94-8ced3e8ecda8",
        "text": "Take medicine",
        "created": "2019-03-12T02:03:42.179Z",
        "updated": "2019-03-12T02:03:42.179Z",
        "isCompleted": false,
        "urgency": 1
    }
}

export class TodosService {
    static getAll(): Promise<TodosDict> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (ENABLE_RANDOM_ERRORS && Math.random() > 0.5) {
                    reject(new Error('Error'))
                } else {
                    resolve(Mock)
                }
            }, 1500)
        })
    }
    static createTodo(todo: TodoCreateModel): Promise<TodoModel> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (ENABLE_RANDOM_ERRORS && Math.random() > 0.5) {
                    reject(new Error('Error'))
                } else {
                    resolve({
                        ...todo,
                        "id": "d071a8dc-60c7-436c-aa94-8ced3e8ecda9",
                        "created": "2019-03-12T02:03:42.179Z",
                        "updated": "2019-03-12T02:03:42.179Z"
                    })
                }
            }, 1500)
        })
    }
    static updateTodo(todo: TodoUpdateModel): Promise<TodoModel> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (ENABLE_RANDOM_ERRORS && Math.random() > 0.5) {
                    reject(new Error('Error'))
                } else {
                    resolve({
                        ...todo,
                        "text": "Take medicine",
                        "created": "2019-03-12T02:03:42.179Z",
                        "updated": "2019-03-12T02:03:42.179Z",
                        "isCompleted": true,
                        "urgency": 2
                    })
                }
            }, 1500)
        })
    }
    static deleteTodo(todoID: string): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (ENABLE_RANDOM_ERRORS && Math.random() > 0.5) {
                    reject(new Error('Error'))
                } else {
                    resolve(todoID)
                }
            }, 1500)
        })
    }
}
