import { BtnAction } from "../types/btn.type"

export default interface LibraryInterface {
    _id?: {}
    theme: string 
    title: string
    description: string
    links: {}
    author: string
    credit: string
    views?: number
    buttons?: BtnAction | null
} 