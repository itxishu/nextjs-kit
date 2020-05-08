import request from '../../utils/request';

export default {
  state: {
    list: []
  },
  reducers: {
    updateState(state, payload) {
      return {
        ...state,
        ...payload
      };
    }
  },
  effects: {
    async query(payload, state) {
      const res = await request.get('');
      this.updateState({ list: res.data });
    }
  }
};
