import { getModelForClass, prop } from "@typegoose/typegoose"


class ContentCategoryModel {
    @prop()
    name: String
    @prop()
    status: String
}

const ContentCategory = getModelForClass(ContentCategoryModel)

export default ContentCategory