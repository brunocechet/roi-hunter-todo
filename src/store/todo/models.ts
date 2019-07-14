export interface TodoModel {
    id: string,
    text: string,
    created: string,
    updated: string,
    isCompleted: boolean,
    urgency: number
}

export interface TodoCreateModel {
    text: string,
    isCompleted: boolean,
    urgency: number
}

export interface TodoUpdateModel {
    id: string,
    text?: string,
    isCompleted?: boolean,
    urgency?: number
}