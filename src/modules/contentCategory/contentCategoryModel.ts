import { getModelForClass, prop } from "@typegoose/typegoose"


class ContentCategoryModel {
    @prop({ required:true })
    name: string
    @prop({ default:1 })
    status: string
}

const ContentCategory = getModelForClass(ContentCategoryModel)

export default ContentCategory