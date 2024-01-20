## Curso de Typescript

### Capítulo 1:
- Introdução

### Capítulo 2:
- Usando Tipos

### Capítulo 3:
- Entendendo o compilador TypeScript

### Capítulo 4:
- TypeScript e os novos recursos ECMAScript

### Capítulo 5:
- Usando Classes Para Criar Objetos

### Capítulo 6:
- Módulos e Namespaces

### Capítulo 7:
- Interfaces

### Capítulo 8:
- Genéricos

### Capítulo 9:
- Decorators

<br><hr><br>

### Como iniciar o Typescript:
- tsc --init

### Como compilar arquivo:
- tsc introducao/basico.ts

### Testando arquivo compilado:
- node introducao/basico.js

### Instalar o live-server:
- npm i -s live-server

### Adicionar ao package.json > scripts:
- "start": "live-server"

### Executar live-server:
- npm start

### Monitorar alterações em arquivos .ts e compilar automaticamente:
- tsc -w

### Compilar múltiplos arquivos em um único(utilizando namespaces)
- tsc -w --outFile [arquivo_de_saida.js] [arquivo_1.ts] [arquivo_2.ts] [arquivo_3.ts]

#### OBS: O "live-server" e o "tsc -w" trabalham em conjunto. Sem o "tsc -w" as alterações nos arquivos .ts não surtiram efeito no live-server.

