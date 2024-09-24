import { BtnLibraryType } from "../types/btn.type"

export interface LibraryInterface {
    _id?: string | object
    theme: string 
    title: string
    description: string
    links: {}
    views?: number
    author: string
    credit: string
} 

export interface LibraryAdapterInterface {
    id?: {}
    theme: string 
    title: string
    description: string
    links: object | null
    author: string
    credit: string
    views?: number
    buttons?: BtnLibraryType | null
}