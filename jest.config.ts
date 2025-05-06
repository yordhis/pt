import { type Config } from 'jest'
import { createDefaultEsmPreset, type JestConfigWithTsJest } from 'ts-jest'



const jestConfig: JestConfigWithTsJest = {
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.ts$': '$1',
  },

  transform: {
    ...createDefaultEsmPreset().transform,
   
  },
  modulePathIgnorePatterns: ['<rootDir>/build/'],
  extensionsToTreatAsEsm: ['.ts'],
  transformIgnorePatterns: ['/node_modules/(?!(foo|bar)/)', '/bar/'],
  verbose:true,
  collectCoverage: true,
}

export default jestConfig