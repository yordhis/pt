import { getModelForClass, prop } from "@typegoose/typegoose"

class ThemeModel{
    @prop()
    name: string
    
    @prop()
    image: string
    
    @prop({ type: ()=> [String] })
    contentPermission: string[]
    
    @prop({ type: Number, default: 1 })
    status: number
}

const Theme = getModelForClass(ThemeModel)

export default Theme