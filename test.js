'use strict'

if (!process.env.TRAVIS) process.env.CI = 'true'

var assert = require('assert')
var isCI = require('./')

assert.ok(isCI)
