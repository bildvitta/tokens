import babel from 'rollup-plugin-babel'
import remove from 'rollup-plugin-delete'
import { terser } from 'rollup-plugin-terser'

const options = {
  format: 'umd',
  name: 'Tokens'
}

export default [
  {
    input: 'src/companies/index.js',

    output: [
      { file: 'dist/companies/index.js', ...options },
      { file: 'dist/companies/index.min.js', sourcemap: true, ...options }
    ],

    plugins: [
      remove({ targets: 'dist/*' }),
      babel({ exclude: 'node_modules/**' }),
      terser({ include: [/^.+\.min\.js$/] })
    ]
  },

  {
    input: 'src/companies/getCompanyByDomain.js',

    output: [
      { file: 'dist/companies/getCompanyByDomain.js', ...options },
      { file: 'dist/companies/getCompanyByDomain.min.js', sourcemap: true, ...options }
    ],

    plugins: [
      remove({ targets: 'dist/*' }),
      babel({ exclude: 'node_modules/**' }),
      terser({ include: [/^.+\.min\.js$/] })
    ]
  },

  {
    input: 'src/companies/getCompanyByEmail.js',

    output: [
      { file: 'dist/companies/getCompanyByEmail.js', ...options },
      { file: 'dist/companies/getCompanyByEmail.min.js', sourcemap: true, ...options }
    ],

    plugins: [
      remove({ targets: 'dist/*' }),
      babel({ exclude: 'node_modules/**' }),
      terser({ include: [/^.+\.min\.js$/] })
    ]
  },

  {
    input: 'src/index.js',

    output: [
      { file: 'dist/index.js', ...options },
      { file: 'dist/index.min.js', sourcemap: true, ...options }
    ],

    plugins: [
      remove({ targets: 'dist/*' }),
      babel({ exclude: 'node_modules/**' }),
      terser({ include: [/^.+\.min\.js$/] })
    ]
  }
]
