import Rol from './rolModel'
import RolInterface  from './interfaces/Rol.interface'

class RolService{

    async register( data: RolInterface ){
        const rol = new Rol( data )
        return await rol.save()
    }

    async all(){
        return await Rol.find({})
    }

    async filterById( id: string ){
        return await Rol.findOne({ _id: id })
    }

    async filterByName( name: string ){
        return await Rol.findOne({ name })
    }

    async update( id: string, data: RolInterface ){
        return await Rol.findByIdAndUpdate({ _id: id}, data)
    }

    async destroy( id: string ){
        return await Rol.deleteOne({_id:id})
    }

}

export default RolService