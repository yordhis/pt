import globals from 'globals'
import pluginJs from '@eslint/js'


export default [
  {files: ['**/*.js'], languageOptions: {sourceType: 'commonjs'}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    rules: {
      'quotes':[
        'error',
        'single' // Lo que quiero permitir
      ],
      'semi':['error', 'never'],
      'no-unused-vars': 'error',
      'no-undef': 'error',
    }
  }
]