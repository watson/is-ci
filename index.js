'use strict'

module.exports = !!(
  process.env.CI ||
  process.env.CONTINUOUS_INTEGRATION ||
  process.env.JENKINS_URL ||
  process.env.bamboo_planKey ||
  process.env.TF_BUILD ||
  process.env.TEAMCITY_VERSION
)
