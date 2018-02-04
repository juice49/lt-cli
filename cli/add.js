'use strict'

const { adjust } = require('lt-core')

module.exports = async function add ({ getDb, cli }) {
  const [ , id, value ] = cli.input
  const actions = await adjust({ getDb, id, value })

  actions.forEach(({ payload }) => {
    console.log(payload.message)
  })
}
