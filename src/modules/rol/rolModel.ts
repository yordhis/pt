import { prop, getModelForClass } from "@typegoose/typegoose"

class RolModel {
  @prop()
  name: String

  @prop({ type: Array })
  permissions: Array<string>

  @prop({ type: Array })
  modules: Array<string>
}

const Rol = getModelForClass(RolModel)

export default Rol
