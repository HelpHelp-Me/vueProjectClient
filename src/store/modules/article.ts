// import { getAllTags } from '@/api/tags'
import axios from 'axios'
import { ActionContext } from 'vuex'

const PAGE_LENGTH = 5;

export interface Article {
  _id: String,
  articleTitle: String,
  articleIntroduction: String,
  articleCoverImage: String,
  articleContent: String,
  articleTags: String,
}

export interface State {
  isAllLoaded: Boolean,
  isLoadingData: Boolean,
  currentPage: number,
  articleList: Article[],
}

const state: State = {
  isAllLoaded: false,
  isLoadingData: false,
  currentPage: 0,
  articleList: [],
}

const mutations = {
  SET_LIST: (state: State, list: Article[]) => {
    state.currentPage += 1;
    // state.articleList = list`
    state.articleList.push(...list);
  },

  SET_LOADING_STATUS: (state: State, status: Boolean) => {
    state.isLoadingData = status;
  },

  SET_ALL_LOADED_STATUS: (state: State, status: Boolean) => {
    state.isAllLoaded = status;
  },
}

interface GetArticleParams {
  start: Number,
  count: Number
}

const actions = {
  getAllArticle(context: ActionContext<State, any>) {
    // const { start, count } = params
    const { currentPage, isLoadingData, isAllLoaded } = context.state
    if (isLoadingData || isAllLoaded) return
    context.commit('SET_LOADING_STATUS', true)
    axios.get('/api/richText/getAllArticle', {
      params: {
        count: PAGE_LENGTH,
        start: PAGE_LENGTH * currentPage, 
      }
    }).then(res => {
      if (res.status === 200) {
        context.commit('SET_LIST', res.data)
        if (res.data.length < PAGE_LENGTH) {
          context.commit('SET_ALL_LOADED_STATUS', true)
        }
      }
    }).finally(() => {
      context.commit('SET_LOADING_STATUS', false)
    })
  }
}

const getters = {
  getArticleById: (state: State) => (id: String) => {
    return state.articleList.find(article => article._id === id)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
