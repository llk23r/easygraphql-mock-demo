'use strict'

const easygqlmock = require('easygqlmock')

const user = {
  createUser: ({ input }, { schemaCode }) => {
    const mock = easygqlmock(schemaCode)

    return mock.Me
  },

  login: ({ input }, { schemaCode }) => {
    const mock = easygqlmock(schemaCode)

    return mock.Me
  },

  updatePassword: ({ input }, { schemaCode }) => {
    const mock = easygqlmock(schemaCode)

    return mock.Me
  },

  getMe: async (args, { schemaCode }) => {
    const mock = easygqlmock(schemaCode,  {
      User: {
        email: 'test@test.com'
      }
    })

    return mock.Me
  },

  getUserByUsername: async (args, { schemaCode }) => {
    const mock = easygqlmock(schemaCode,  {
      User: {
        username: args.username
      }
    })

    return mock.User
  }
}

module.exports = user
