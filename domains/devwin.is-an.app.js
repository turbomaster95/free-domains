addSubDomain({
  description: 'DevWindows11 is a New Windows Version for developers', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'devwin', // desired subdomain name
  owner: {
    repo: 'https://github.com/turbomaster95/devwindows11',
    email: 'dev@deva.is-cool.dev',
  },
  record: {
    CNAME: 'turbomaster95.github.io'
  },
  proxy: true
})
