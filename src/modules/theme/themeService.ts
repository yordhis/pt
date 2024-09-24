import { ThemeInterface } from './interfaces/Theme.interface'
import Theme from './themeModel'
import { ThemeType } from './types/theme.type'

class ThemeService {
    
    async all(): Promise<ThemeInterface[]>{
        return await Theme.find({})
    }

    async filterById(id: string): Promise<ThemeType>{
        return await Theme.findOne({ _id: id })
    }

    async filterByName(name: string): Promise<ThemeType>{
        return await Theme.findOne({ name })
    }

    async update(id: string, data: ThemeInterface): Promise<ThemeType>{
        return await Theme.findByIdAndUpdate( { _id:id }, data )
    }

    async register(data: ThemeInterface): Promise<ThemeType>{
        const theme = new Theme(data)
        return await theme.save()
    }

    async destroy(id: string): Promise<boolean>{
        const result = await Theme.deleteOne({ _id: id})
        return result ? true : false
    }


}

export default ThemeService