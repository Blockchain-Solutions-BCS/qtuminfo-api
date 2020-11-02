const path = require('path')

const CHAIN = Symbol('bcs.chain')

module.exports = {
  get chain() {
    this[CHAIN] = this[CHAIN] || this.bcsinfo.lib.Chain.get(this.config.bcs.chain)
    return this[CHAIN]
  },
  get bcsinfo() {
    return {
      lib: require(path.resolve(this.config.bcsinfo.path, 'lib')),
      rpc: require(path.resolve(this.config.bcsinfo.path, 'rpc'))
    }
  }
}
