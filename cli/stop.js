'use strict'

const { stop } = require('lt-core')

module.exports = async function ({ getDb, cli }) {
  const actions = await stop({ getDb })

  actions.forEach(({ payload }) => {
    console.log(payload.message)
  })
}
