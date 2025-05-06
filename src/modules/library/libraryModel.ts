import { getModelForClass, prop } from "@typegoose/typegoose"


class LibraryModel {
    @prop()
    theme: string
    
    @prop()
    title: string
    
    @prop()
    description: string
    
    @prop({type: String })
    links: string
    
    @prop({default:0})
    views: number
    
    @prop()
    author: string

    @prop()
    credit: string
}

const Library = getModelForClass(LibraryModel)

export default Library