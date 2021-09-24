#!/usr/bin/env node
'use strict'

process.exit(require('is-ci') ? 0 : 1)
