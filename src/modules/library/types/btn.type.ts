export type BtnAction = {
    GET?:{action:string, method: string}
    POST?:{action:string, method: string}
    DELETE?:{action:string, method: string}
    PUT?:{action:string, method: string}
    PATH?:{action:string, method: string}
} | null