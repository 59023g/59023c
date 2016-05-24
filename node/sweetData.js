import Auth from './lib/components/Auth'


export var newPost = {
  user: Auth.user.id,
  title: null,
  content: null,
  abstract: null,
  tags: [],
  updated_at: null
}

export var posts = [{
  id: 1,
  user: 'Michael',
  title: 'The first blog <h1>Post</h1>',
  content: 'Very excellent <h1>Post</h1> Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through',
  abstract: 'Who needs Abstract?',
  tags: ['trade', 'free', 'awesome'],
  updated_at: Date.now()
}, {
  id: 2,
  user: 'James',
  title: 'The Second blog Post',
  content: 'Very excellent <h1>Post</h1> Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going ',
  abstract: 'Who needs Abstract?',
  tags: ['trade', 'free', 'awesome'],
  updated_at: Date.now()
}, {
  id: 3,
  user: 'Colin',
  title: 'The third blog ',
  content: 'PostHampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage',
  abstract: 'Who needs Abstract?',
  tags: ['trade', 'free', 'awesome'],
  updated_at: Date.now()
}]
