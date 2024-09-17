const ContentCategory = require('./contentCategoryModel')


class ContentCategoryService{
    constructor(){}

    async all(){
        const data = await ContentCategory.find({})
        return data
    }

    async filterById( id ){
        const data = await ContentCategory.findOne({ _id:id })
        return data
    }

    async filterByName( name ){
        const data = await ContentCategory.findOne({ name })
        return data
    }

    async register(data){
        const contentCategory = new ContentCategory(data)
        return await contentCategory.save()
    }

    async update(id, data){
        return await ContentCategory.findByIdAndUpdate({_id:id}, data)
    }

    async delete(id){
        return await ContentCategory.deleteOne({_id:id})
    }

}

module.exports = ContentCategoryService