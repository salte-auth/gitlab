<h3 align="center">
	NOTE: This repository is currently a work in progress and shouldn't be used!
</h3>

<h2 align="center">
  <div>
    <a href="https://github.com/salte-auth/gitlab">
      <img height="180px" src="https://raw.githubusercontent.com/salte-auth/logos/master/images/logo.svg?sanitize=true">
      <br>
      <br>
      <img height="50px" src="https://raw.githubusercontent.com/salte-auth/logos/master/images/%40salte-auth/gitlab.svg?sanitize=true">
    </a>
  </div>
</h2>

<h3 align="center">
	A Salte Auth provider for authenticating with GitLab!
</h3>

<p align="center">
	<strong>
		<a href="https://salte-auth.gitbook.io">Docs</a>
		•
		<a href="https://salte-auth-demo.glitch.me">Demo</a>
	</strong>
</p>

<div align="center">

  [![NPM Version][npm-version-image]][npm-url]
  [![NPM Downloads][npm-downloads-image]][npm-url]
  [![Travis][travis-ci-image]][travis-ci-url]
  [![Coveralls][coveralls-image]][coveralls-url]

  [![semantic-release][semantic-release-image]][semantic-release-url]
  [![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]

</div>

## Install

```sh
$ npm install @salte-auth/gitlab
```

## Usage

```js
import { SalteAuth } from '@salte-auth/salte-auth';
import { GitLab } from '@salte-auth/gitlab';
import { Redirect } from '@salte-auth/redirect';

const auth = new SalteAuth({
  providers: [
    new GitLab({
      clientID: '12345'
    })
  ],

  handlers: [
    new Redirect({
      default: true
    })
  ]
});

auth.login('gitlab');
```

[npm-version-image]: https://img.shields.io/npm/v/@salte-auth/gitlab.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/@salte-auth/gitlab.svg?style=flat
[npm-url]: https://npmjs.org/package/@salte-auth/gitlab

[travis-ci-image]: https://img.shields.io/travis/com/salte-auth/gitlab/master.svg?style=flat
[travis-ci-url]: https://travis-ci.com/salte-auth/gitlab

[coveralls-image]: https://img.shields.io/coveralls/salte-auth/gitlab/master.svg
[coveralls-url]: https://coveralls.io/github/salte-auth/gitlab?branch=master

[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: https://commitizen.github.io/cz-cli/

[semantic-release-url]: https://github.com/semantic-release/semantic-release
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg

[greenkeeper-image]: https://badges.greenkeeper.io/salte-auth/salte-auth.svg
[greenkeeper-url]: https://greenkeeper.io
