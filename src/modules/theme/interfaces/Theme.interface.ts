export interface ThemeInterface {
    _id?:string | object
    name:string
    image: string
    contentPermission: string[]
    status?: number
}