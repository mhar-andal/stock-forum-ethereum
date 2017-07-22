const ADD_FOO = 'ADD_FOO';
export function addFoo (foo) {
  return {type: ADD_FOO, foo: foo};
}
