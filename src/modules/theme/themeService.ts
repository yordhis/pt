const Theme = require('./themeModel')

class ThemeService {
    
    async all(){
        return await Theme.find({})
    }

    async filterById(id){
        return await Theme.findOne({ _id: id })
    }

    async filterByName(name){
        return await Theme.findOne({ name })
    }

    async update(id, data){
        return await Theme.findByIdAndUpdate( { _id:id }, data )
    }

    async register(data){
        const theme = new Theme(data)
        return await theme.save()
    }

    async destroy(id){
        return await Theme.deleteOne({ _id: id})
    }


}

module.exports = ThemeService