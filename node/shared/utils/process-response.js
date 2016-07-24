import { Schema, arrayOf, normalize } from 'normalizr'

const userSchema = new Schema('authors', {
  idAttribute: 'id'
})

const postSchema = new Schema('posts', {
  idAttribute: 'id'
})

postSchema.define({
  author: userSchema
})

export const Schemas = {
  USER: userSchema,
  USER_ARRAY: arrayOf(userSchema),
  POST: postSchema,
  POST_ARRAY: arrayOf(postSchema)
}


export function processResponse (response, schema) {
  console.log('response', response, 'schema,', schema)
  return response.json()
  .then(json => ({ json, response }))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json)
    }
    console.log('json', json, 'response', response)

    return Object.assign({},
      normalize(json, schema), {}
    )
  })
}
