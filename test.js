'use strict'

const assert = require('assert')
const clearModule = require('clear-module')

process.env.CI = 'true'

let isCI = require('./')
assert(isCI)

delete process.env.CI
delete process.env.CONTINUOUS_INTEGRATION
delete process.env.BUILD_NUMBER
delete process.env.TRAVIS
delete process.env.GITHUB_ACTIONS

clearModule('./')
clearModule('ci-info')
isCI = require('./')
assert(!isCI)
