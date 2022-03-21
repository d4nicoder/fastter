#! /usr/bin/env node
import cluster from 'cluster'
import FastterCluster from '../index.js'
import FastterOptions from '../lib/options.js'
import FastterMaster from '../lib/master/index.js'

FastterCluster.setupCluster()

if (cluster.isMaster) {
  const options = FastterOptions.loadOptions()
  FastterMaster.initMaster(options)
}
