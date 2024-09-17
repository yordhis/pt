import Rol, { find, findOne, findByIdAndUpdate, deleteOne } from './rolModel'
import RolInterface from './interfaces/Rol.interface'

class RolService{

    async register(data: RolInterface){
        const rol = new Rol(data)
        return await rol.save()
    }

    async all(){
        return await find({})
    }

    async filterById( id ){
        return await findOne({ _id: id })
    }

    async filterByName( name ){
        return await findOne({ name })
    }

    async update( id, data ){
        return await findByIdAndUpdate({ _id: id}, data)
    }

    async destroy( id ){
        return await deleteOne({_id:id})
    }

}

export default RolService