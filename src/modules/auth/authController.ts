import HTTP_CODE from "../../constants/code.const"
import { Controller } from "../../interfaces/main"
import { UserInterface } from "./interfaces/User.interface"

import AuthService from "./authService"
const authService = new AuthService()
import ProfileService from "../profile/profileService"
import userAdapter from "./adapters/userAdapter"
const profileService = new ProfileService()

export const register: Controller = async (req, res) => {
  let message: string = "User register",
    status: number = HTTP_CODE.CREATE,
    data
  try {
    data = await authService.register(req.body)
  } catch (error: any) {
    message: error.message
    status = HTTP_CODE.INTERNAL_SERVER_ERROR
  } finally {
    return res.status(status).json({ message, status, data })
  }
}

export const login: Controller = async (req, res) => {
  let message: string = "User is login",
    status: number = HTTP_CODE.OK,
    token: string = ""

  try {
    if (req.credentials) {
      
      const payload = await userAdapter( req.credentials )
      
      if (payload) {
        token = await authService.genrateToken(payload)        
      }
    } else {
      message = "Incorrect credentials"
      status = HTTP_CODE.UNAUTHORIZE
    }
  } catch (error: any) {
    message = error.message
    status = HTTP_CODE.INTERNAL_SERVER_ERROR
  } finally {
    return res.status(status).json({ message, status, token })
  }
}

export const destroyUser: Controller = async (req, res) => {
  let message: string = "Deleted account",
    status: number = HTTP_CODE.OK

  try {
    let id: string | undefined = req.params.id
    let userId

    if (id == "admin" || id == "reader" || id == "creator") {
      userId = await authService.filterByUsername(id)
      if (userId) id = userId._id
    }

    if (id) {
        authService.destroyUser(id)
        const result = await profileService.filterById(id)
        if (result) {
          profileService.delete(id)
        }
    }else{
        message: 'Id not found!'
        status = HTTP_CODE.NOT_FOUND
    }

  } catch (error: any) {
    message: error.message
    status = HTTP_CODE.INTERNAL_SERVER_ERROR
  } finally {
    return res.status(status).json({ message, status })
  }
}
