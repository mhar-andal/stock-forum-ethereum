const ADD_FOO = 'ADD_FOO';

export function getPosts (posts) {
  return {
    type: ADD_FOO,
    posts: posts
  };
};
