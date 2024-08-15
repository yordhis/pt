/** Se Importa el modelo @User  */
const Profile = require('./profileModel')

/** Creamos una clase (OBJETO) */
class ProfileService{
    /** Inicializamos el constructor vacio */
    constructor(){}

    async filterById(id){
        const profile = await Profile.findOne({userId:id})
        return profile
    }

    async create(data){
        const profile = new Profile(data)
        return await profile.save()
    }

    async update(id, data){
        return await Profile.findByIdAndUpdate({_id:id}, data)
    }

    async delete(id){
        return await Profile.deleteOne({_id:id})
    }
   
}

/** Exportamos la class */
module.exports = ProfileService
