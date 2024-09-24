import { ProfileInterface } from "../../profile/interfaces/Profile.interface"

export interface UserAdapter {
  id: string | undefined
  username: string | undefined
  email: string | undefined
  rol: string
  permissions: string[] | null
  modules: string[] | null
  profile?: ProfileInterface | null
  token?: string
}

export interface UserInterface {
  _id?: string
  username?: string
  email?: string
  password: string
  rol: string
}
