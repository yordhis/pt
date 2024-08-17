const Rol = require('./rolModel')

class RolService{

    async register(data){
        const rol = new Rol(data)
        return await rol.save()
    }

    async all(){
        return await Rol.find({})
    }

    async filterById( id ){
        return await Rol.findOne({ _id: id })
    }

    async filterByName( name ){
        return await Rol.findOne({ name })
    }

    async update( id, data ){
        return await Rol.findByIdAndUpdate({ _id: id}, data)
    }

    async destroy( id ){
        return await Rol.deleteOne({_id:id})
    }

}

module.exports = RolService