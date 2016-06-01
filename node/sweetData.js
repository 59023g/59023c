import Auth from './lib/components/Auth'


export const newPost = {
  user: Auth.user.id,
  title: null,
  content: null,
  abstract: null,
  tags: [],
  updatedAt: null
}

export const posts = [{
  id: 1,
  user: 'Michael',
  title: 'The first blog <h1>Post</h1>',
  content: 'Very excellent <h1>Post</h1> Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through',
  abstract: 'Who needs Abstract?',
  tags: ['trade', 'free', 'awesome'],
  updatedAt: Date.now()
}, {
  id: 2,
  user: 'James',
  title: 'The Second blog Post',
  content: 'Very excellent <h1>Post</h1> Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going ',
  abstract: 'Who needs Abstract?',
  tags: ['trade', 'free', 'awesome'],
  updatedAt: Date.now()
}, {
  id: 3,
  user: 'Colin',
  title: 'The third blog ',
  content: 'PostHampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage',
  abstract: 'Who needs Abstract?',
  tags: ['trade', 'free', 'awesome'],
  updatedAt: Date.now()
}]


// {
//   selectedSubreddit: 'frontend',
//   entities: {
//     users: {
//       2: {
//         id: 2,
//         name: 'Andrew'
//       }
//     },
//     posts: {
//       42: {
//         id: 42,
//         title: 'Confusion about Flux and Relay',
//         author: 2
//       },
//       100: {
//         id: 100,
//         title: 'Creating a Simple Application Using React JS and Flux Architecture',
//         author: 2
//       }
//     }
//   },
//   postsBySubreddit: {
//     frontend: {
//       isFetching: true,
//       didInvalidate: false,
//       items: []
//     },
//     reactjs: {
//       isFetching: false,
//       didInvalidate: false,
//       lastUpdated: 1439478405547,
//       items: [ 42, 100 ]
//     }
//   }
// }
