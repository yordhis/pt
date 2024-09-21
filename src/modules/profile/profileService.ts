import { ProfileInterface } from './interfaces/Profile.interface'
import Profile from './profileModel'

class ProfileService{

    async filterById( userId: string ): Promise<ProfileInterface | null>{
        const profile = await Profile.findOne({ userId })
        return profile
    }

    async create( data: ProfileInterface ): Promise<ProfileInterface>{
        const profile = new Profile( data )
        return await profile.save()
    }

    async update( userId: string , data:ProfileInterface  ){
        return await Profile.findOneAndUpdate({ userId: userId }, data)
    }

    async delete( userId:string ){
        return await Profile.deleteOne({ userId })
    }
   
}

export default ProfileService
