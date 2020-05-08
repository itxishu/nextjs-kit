import request from '../../utils/request';

export default {
  state: {
    user: {}
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
    async getUser(payload, state) {
      const res = await request.get('');
      this.updateState({ user: res.data });
    }
  }
};
