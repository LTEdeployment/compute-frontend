let pub = {
  base_url: 'https://computebackend.xhinliang.com/'
}
if (process.env.NODE_ENV && process.env.NODE_ENV.startsWith('dev')) {
  pub.base_url = 'http://computebackend.webdev.com/'
}

module.exports = pub
