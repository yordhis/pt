import RolService from "../../rol/rolService"
import ProfileService from "../../profile/profileService"
import { UserAdapter, UserInterface } from "../interfaces/User.interface"
import { ProfileType } from "../../profile/types/profile.type"
const profileService = new ProfileService()
const rolService = new RolService()

const userAdapter = async (data: UserInterface): Promise<UserAdapter | null | undefined> => {

    if (data) {
      if (!data._id) {
        return null
      } else {
        const role = await rolService.filterByName(data.rol)
        if (role) {
          const { permissions, modules } = role
          const profile: ProfileType = await profileService.filterById(data._id)

          return {
            id: data._id,
            username: data.username,
            email: data.email,
            rol: data.rol,
            permissions,
            modules,
            profile,
          }
        }
      }
    }else{
      return null
    }
 
}

export default userAdapter
