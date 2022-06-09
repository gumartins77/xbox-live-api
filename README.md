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

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Repository cloning

```bash
$ git clone https://github.com/gumartins77/xbox-live-api.git
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API functionality and routes

`CRUD USERS [AUTH]`: Create a user to be able to use the site, the same will be required to create the profiles.
`CRUD PROFILES [AUTH]`: When creating a profile, the user must also relate the profile to the user, and the same user can have several profiles, but a profile can only have one user. In this same profile, the user will be able to create their own list of favorite games and games, with an exclusive homepage for each profile.
`CRUD GAMES [AUTH] [ADMIN]`: All functional game crud can be performed only by those who have the admin key, which will only be the one selected in the database, but then only the same admin can transform other users into admin.
In games crud, it is created, where there is a relationship with the genre table, being possible only to create a game with an existing genre in the API. You can also edit the game, view it by id and delete it. For the profile, you have the functionality to add the game to the profile and even favorite it.
`CRUD GENRES [AUTH] [ADMIN]`: Also being only functional to those who are admin, it works in the same way as games crud, being able to add, edit and delete them, the advantage here is that, with the relation with the games, you can filter the games by genre, bringing a list of genres and their related games.
`HOMEPAGE [AUTH] [GET]`: The Homepage is linked to each unique profile, bringing the games added, favorited and by genre, being able to favorite and unfavorite and exclude the games you want from the homepage

## Application swagger

- Swagger - [Xbox-Live-Api](http://localhost:3005/api/)


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Xbox-Live-Api author contact

- Author - [Gustavo Martins](mailto:gugumartin77@gmail.com)
- Linkedin - [gustavomartins.linkedin](https://www.linkedin.com/in/gustavo-martins-681921229/)
