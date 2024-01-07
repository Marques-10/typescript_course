// import { areaRetangulo } from './retangulos'
// import { areaCircunferencia } from './circunferencia'
import areaRetangulo from './retangulos'
import { areaCircunferencia as circ } from './circunferencia'

console.log('Módulo carregado...')
console.log(areaRetangulo(10, 20))
console.log(circ(2))

const { digaOi } = require('./novo')
console.log(digaOi('Ana'))