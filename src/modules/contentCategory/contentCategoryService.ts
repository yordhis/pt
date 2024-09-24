import ContentCategory from './contentCategoryModel'
import { ContentCategoryInterface } from './interfaces/ContentCategory.interface'
import { contentCategoryType } from './types/contentCategory.type'


class ContentCategoryService{
    async all(): Promise<ContentCategoryInterface[]>{
        return await ContentCategory.find({})
    }

    async filterById( id:string ): Promise<contentCategoryType>{
        return await ContentCategory.findOne({ _id:id })  
    }

    async filterByName( name:string ): Promise<contentCategoryType>{
        return await ContentCategory.findOne({ name })
       
    }

    async register(data: ContentCategoryInterface): Promise<ContentCategoryInterface>{
        const contentCategory = new ContentCategory(data)
        return await contentCategory.save()
    }

    async update(id: string, data: ContentCategoryInterface): Promise<contentCategoryType>{
        return await ContentCategory.findByIdAndUpdate({_id:id}, data)
    }

    async delete(id: string): Promise<boolean>{
        const result =  await ContentCategory.deleteOne({_id:id})
        return result ? true : false
    }

}

export default ContentCategoryService