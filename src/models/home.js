import {getUser} from '../services/home'

export default {
  namespace: 'home',
  state: {
    name: 'leehow'
  },
  effects: {
    *fetchUser({payload}, {call, put}) {
      const response = yield call(getUser)
      console.log('response', response)
    }
  }
}