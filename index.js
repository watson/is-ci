'use strict'

module.exports = !![
  // Generic environment variables
  'CI',                                         // Travis CI, CircleCI, GitlabCI, Appveyor, CodeShip, ...
  'CONTINUOUS_INTEGRATION',                     // Travis CI, ...
  'BUILD_NUMBER',                               // Jenkins, TeamCity, ...
  
  // Sever specific environment variables
  'JENKINS_URL',                                // Jenkins
  'bamboo_planKey',                             // Bamboo (by Atlassian)
  'TF_BUILD',                                   // Team Foundation Server (by Microsoft)
  'TEAMCITY_VERSION',                           // TeamCity (by JetBrains)
  'BUILDKITE',                                  // Buildkite
  'HUDSON_URL',                                 // Hudson
].reduce(function(isCi, envVarName) {
  return !!process.env[envVarName] || isCi;
},
  // This is down here because it's not the same format
  !!(process.env.TASK_ID && process.env.RUN_ID) // TaskCluster
);
