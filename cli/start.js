'use strict'

const { start } = require('lt-core')

module.exports = async function ({ getDb, cli }) {
  const id = cli.input[1]
  const actions = await start({ getDb, id })

  actions.forEach(({ payload }) => {
    console.log(payload.message)
  })
}
