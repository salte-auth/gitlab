import { SalteAuth } from '@salte-auth/salte-auth';
import { Redirect } from '@salte-auth/redirect';
import { GitLab } from '../src/gitlab';

const auth = new SalteAuth({
  providers: [
    new GitLab({
      clientID: 'c9551083bd333a37e069fc5d828e06a27d4d3e52f5ac2f0a9ff7e214e81aca37',
      responseType: 'code'
    })
  ],

  handlers: [
    new Redirect({
      default: true
    })
  ]
});

const button = document.createElement('button');
button.innerHTML = `Login`;
button.addEventListener('click', () => {
  auth.login({
    provider: 'gitlab'
  });
});

document.body.appendChild(button);
