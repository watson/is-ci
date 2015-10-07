'use strict'

module.exports = !!(
  process.env.CI ||
  process.env.CONTINUOUS_INTEGRATION ||
  process.env.JENKINS_URL
)
