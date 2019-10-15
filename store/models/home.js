import request from '../../service/request'

export default {
  state: {
    user: { name: 'admin' },
    list: []
  },
  reducers: {
    updateState(state, payload) {
      console.log('updateState')
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: {
    async query(payload){
      const res = await request.get('/logger/get', { page: 1, pageSize: 10 })
      // console.log('list-query', res.data.data)
      console.log('this', this)
      this.updateState({ list: res.data.data.list })
    }
  }
}