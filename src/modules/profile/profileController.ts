import HTTP_CODE from "../../constants/code.const"
import { Controller } from "../../interfaces/main"
import { ProfileInterface } from "./interfaces/Profile.interface"
import ProfileService from "./profileService"
import { ProfileType } from "./types/profile.type"
const profileService = new ProfileService()

/** Método que retorna un usuario */
export const getProfile: Controller = async (req, res) => {
  let message: string = "ok",
    status: number = HTTP_CODE.OK,
    data: ProfileType = null
  try {
    const user = req.user
    if (user) {
      if (user.id) {
        data = await profileService.filterById(user.id)
        message = data != null ? "ok" : "Perfil no existe"
        status = data != null ? HTTP_CODE.OK : HTTP_CODE.NOT_FOUND
      }
    }
  } catch (error: any) {
    message = `Falló en el controlador getProfile. Error: ${error.message}`
    status = HTTP_CODE.INTERNAL_SERVER_ERROR
  } finally {
    return res.status(status).json({ message, status, data })
  }
}

/** Método que crea o inserta un usuario a la app */
export const createProfile: Controller = async (req, res) => {
  let message: string = "Register profile",
    status: number = HTTP_CODE.CREATE,
    data: ProfileType = null
  try {
    data = req.body
    const user = req.user
    if (user) {
      if (user.rol == "readertxt")
        return res
          .status(401)
          .json({ message: "El usuario no esta registrado para crear su perfil, debe registrarse", status: 401 })
    }

    if (data) {
      await profileService.create(data)
    }
  } catch (error: any) {
    message = `Falló en el controlador createProfile. Error: ${error.message}`
    status = HTTP_CODE.INTERNAL_SERVER_ERROR
  } finally {
    return res.status(status).json({ message, status, data })
  }
}

/** Método que actualiza los datos de un usuario */
export const updateProfile: Controller = async (req, res) => {
  let message: string = "Update profile",
    status: number = HTTP_CODE.OK,
    data: ProfileType = null
  try {
    data = req.body
    const user = req.user
    if (!user) {
      message = "User undefined"
      status = HTTP_CODE.BAD_REQUEST
    } else {
      if (!(user.id && data)) {
        message = "Datas required."
        status = HTTP_CODE.BAD_REQUEST
      } else {
        data = await profileService.update(user.id, data)
      }
    }
  } catch (error: any) {
    message = `Falló en el controlador createProfile. Error: ${error.message}`
    status = HTTP_CODE.INTERNAL_SERVER_ERROR
  } finally {
    return res.status(status).json({ message, status, data })
  }
}

/**
 * Método para eliminar los datos de perfil
 */
export const deleteProfile: Controller = async (req, res) => {
  let message: string = "Deleted profile",
    status: number = HTTP_CODE.OK,
    data: ProfileType = null
  try {
    if (!req.user) {
      message = "User undefined"
      status = HTTP_CODE.BAD_REQUEST
    } else {
      if (!req.user.id) {
        message = "User id undefined"
        status = HTTP_CODE.BAD_REQUEST
      } else {
        const id = req.user.id
        await profileService.delete(id)
      }
    }
  } catch (error: any) {
    message = `Falló en el controlador deleteProfile. Error: ${error.message}`
    status = HTTP_CODE.INTERNAL_SERVER_ERROR
  } finally {
    return res.status(status).json({ message, status, data })
  }
}
