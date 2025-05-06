import { LibrariesType, LibraryType } from "../types/Library.type";
import { LibraryInterface } from "./Library.interface";

export default interface LibraryServiceInterface {
    filterById?: (id:string)=>Promise<LibraryType>
    filterByIdTheme?: (idTheme:string)=>Promise<LibrariesType>
    filterByTitle?: (title:string)=>Promise<LibraryType>
    filterByTitleAndByTheme?: (title: string, theme:string)=>Promise<LibraryType>
    all: ()=>Promise<LibrariesType>
    register: (data:LibraryInterface)=>Promise<LibraryType>
    update: (id:string, data:LibraryInterface)=>Promise<LibraryType>
    destroy: (id:string)=>Promise<boolean>
}