import { getModelForClass, prop } from "@typegoose/typegoose"


class ProfileMoldel{
    @prop()
    name: string

    @prop()
    lastname: string

    @prop()
    phone: string
    
    @prop()
    address: string

    @prop()
    userId: string
}

const Profile = getModelForClass(ProfileMoldel)
export default Profile