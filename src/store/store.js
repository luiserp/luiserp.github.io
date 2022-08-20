import { createStore } from 'vuex'
import data from '../data/proyectos.json'

export const store = createStore({
    state: {
        projects: [], 
    },
    mutations: { //Mutations are like setters
        set_projects: (state, projects) => { //capitalization is good-practice for vuex-mutations
            state.projects = projects;
        }
    },
    getters: {
        getprojectbyId: (state) => (id) => {
          return state.projects.filter(project => project.id == id)[0]
        },
        getlatestprojects: (state) => () => {
          return state.projects.slice(-4)
        },
        getprojectbyTitle: (state) => (title) => {
          return state.projects.filter(project => project.title == title)[0]
        }
      }
  })

  const setProyecstToStore = () => {
    store.commit('set_projects', data.projects);
}

setProyecstToStore();