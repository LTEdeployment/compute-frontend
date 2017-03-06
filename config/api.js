let pub = {
  base_url: 'https://computebackend.xhinliang.com/'
}
if (process.env.DEV_ENV) {
  pub.base_url = 'http://computebackend.webdev.com/'
}
pub.base_url = 'http://computebackend.webdev.com/'

module.exports = pub
