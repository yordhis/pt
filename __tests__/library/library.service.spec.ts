import { LibrariesType } from "../../src/modules/library/types/Library.type"
import Library from "../../src/modules/library/libraryModel"
import LibraryService from "../../src/modules/library/libraryService"

jest.mock('../../src/modules/library/libraryService')
jest.mock('../../src/modules/library/libraryModel')



describe('Testing unit of the library services', () =>{
  describe('Testing the geters ', () =>{
    test('Should return a array of object library', async () => {
   


      // const mockMethod = jest.fn<() => Promise<LibrariesType>, any>()( async () => {
      //     return [
      //     {name:"titulo 1"}, 
      //     {name: "titulo 2"}
      //   ]
      // })

      const MokedLibraryService = jest.mocked(LibraryService)
      MokedLibraryService.mockReturnValue([{name:"titulo 1"}])
   
        
    })
  })
})


