export type TypeOfMessage = {
    from: {
        name: string
    },
    message: {
        id: string,
        time: string,
        text?: string
    }
};