<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Este proyecto está en base al framewok de NestJS usando la arquiotectura hexagonal.

## Instalación

#### 1. Intalar las dependencias

 Eso depende si usas npm, yarn o pnpm el proceso es el mismo, en mi caso usaré pnpm

```bash
$ pnpm install
```

#### 2. Levantar nuestro contenedor

 Ya hay un archivo preparado en docker-compose.yml, deberán editar con las credenciales que deseen eliminando las "{ }" obviamente que serpán para poder acceder a tu base de datos de PostgreSQL.

 ![docker](https://i.imgur.com/Wnv1arv.png)

 Para levantar nuestro contenedor junto a las imágenes solo basta con ejecutar el siguiente comando:

```bash
$ docker compose up -d
```

## Ejecutar nuestro entorno de prisma
Para ello deberemos ejecutar el siguiente comando:

```bash
$ pnpm prisma generate

```

Este comando generará el servicio correspondiente de prisma el cual junto a las variables de entorno harán que nuestro proyecto se conecte a la base de datos.


## Agregar la conexión con nuestra base de datos PostgreSQL


Al ejecutar prisma nos generará una cadena de conexión los cuales deberemos editarlo con nuestra conexión que definimos en el docker.


![alt text](https://i.imgur.com/ll6sw9c.png)

NOTA: por defecto se usa PostgreSQL, pero puedes usar la base de datos que desees como MySQL, SQLite, entre otros. 



## Ejecutar nuestro proyecto de Nestjs

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## License

Nest is [MIT licensed](LICENSE).
