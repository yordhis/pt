interface Profile {
    name?: string
    lastname?: string
    phone?: string
    address?: string
}

export interface User extends Profile {
  id?: string
  username: string
  email: string
  password?: string
  rol: string
  permissions: [] | null
  modules: [] | null
  profile?: Profile
  token?: string
}
