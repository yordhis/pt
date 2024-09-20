import { prop, getModelForClass } from '@typegoose/typegoose'

class UserAuthClass {
    @prop()
    username: string

    @prop()
    email: string

    @prop({required: true, minlength: 6 })
    password: string

    @prop({required: true})
    rol: string
}
const UserAuth = getModelForClass(UserAuthClass)

export default UserAuth