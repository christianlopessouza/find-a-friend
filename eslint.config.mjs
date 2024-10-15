import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'


export default [
    {
        files: ['**/*.{js,mjs,cjs,ts}']
    },
    {
        languageOptions: { globals: { ...globals.browser, ...globals.node } }
    },
    {
        rules: {
            'quotes': ['error', 'single'],  // Força o uso de aspas simples
            'semi': ['error', 'never'],  // Exige ponto e vírgula
            'indent': ['error', 4],  // Define indentação de 2 espaços
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
]