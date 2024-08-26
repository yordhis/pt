/** Se Importa el modelo @User  */
const Profile = require('./profileModel')

/** Creamos una clase (OBJETO) */
class ProfileService{
    /** Inicializamos el constructor vacio */
    constructor(){}

    async filterById( userId ){
        const profile = await Profile.findOne({ userId })
        return profile
    }

    async create( data ){
        const profile = new Profile(data)
        return await profile.save()
    }

    async update( userId , data ){
        return await Profile.findOneAndUpdate({ userId: userId }, data)
    }

    async delete( userId ){
        return await Profile.deleteOne({ userId })
    }
   
}

/** Exportamos la class */
module.exports = ProfileService
