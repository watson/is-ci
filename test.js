'use strict'

var assert = require('assert')
var clearModule = require('clear-module')

process.env.CI = 'true'

var isCI = require('./')
assert(isCI)

delete process.env.CI
delete process.env.CONTINUOUS_INTEGRATION
delete process.env.BUILD_NUMBER
delete process.env.TRAVIS

clearModule('./')
clearModule('ci-info')
isCI = require('./')
assert(!isCI)
