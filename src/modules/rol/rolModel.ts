import { prop, getModelForClass } from "@typegoose/typegoose"

class RolModel {
  @prop()
  name: String

  @prop({ type: () => [String] })
  permissions: string[]

  @prop({ type: () => [String] })
  modules: string[]
}

const Rol = getModelForClass(RolModel)

export default Rol
