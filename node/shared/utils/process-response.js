import { Schema, arrayOf, normalize } from 'normalizr'

const postSchema = new Schema('posts', {
  idAttribute: 'id'
})

const postAuthorSchema = new Schema('postAuthors', {
  idAttribute: 'id'
})



postSchema.define({
  author: postAuthorSchema
})

// Schemas for Github API responses.
// export const Schemas = {
//   USER: postAuthorSchema,
//   USER_ARRAY: arrayOf(postAuthorSchema),
//   POST: postSchema,
//   POST_ARRAY: arrayOf(postSchema)
// }

export default function processResponse (response) {
  let isOk = response.ok
  console.log('normalbody?', normalize(response.body, postSchema))

  return response.text()

  .then(body => {
    try { body = JSON.parse(body) }
    catch (error) { if (isOk) isOk = false }

    console.log('normal?', normalize(body, postSchema))
    console.log('body', body)
    if (isOk) return normalize(body, postSchema)

    throw { ...body, statusCode: response.status }
  })
}
