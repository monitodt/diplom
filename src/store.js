import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ip: [],
        users: [],
        companies: [],
        error: null,
        admin: {
            isAuthenticated: false,
            uid: null,
        }
    },
    mutations: {
        SET_PROCESSING(state, payload) {
            state.proccesing = payload
        },
        SET_ERROR(state, payload) {
            state.error = payload
        },
        SET_ADMIN(state, payload) {
            state.admin.isAuthenticated = true
            state.admin.uid = payload.uid
        },
        SET_USERS_REQUESTS(state, payload) {
            state.users = payload
        },
        SET_IP_REQUESTS(state, payload) {
            state.ip = payload
        },
        SET_COMPANY_REQUESTS(state, payload) {
            state.companies = payload
        },
        UNSET_ADMIN(state) {
            state.admin = {
                isAuthenticated: false,
                uid: null
            }
        },
        DELETE_USER_REQUEST_STATE(state, payload) {
            let index = state.users.findIndex(user => user.id == payload.id)
            state.users.splice(index, 1)
        },
        DELETE_COMPANY_REQUEST_STATE(state, payload) {
            let index = state.companies.findIndex(company => company.id == payload.id)
            state.companies.splice(index, 1)
        },
        DELETE_IP_REQUEST_STATE(state, payload) {
            let index = state.ip.findIndex(i => i.id == payload.id)
            state.ip.splice(index, 1)
        },
    },
    actions: {
        SIGNIN({ commit }, payload) {
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then((user) => {
                    commit('SET_ADMIN', user.uid)
                })
                .catch(function (error) {
                    commit('SET_ERROR', error)
                })
        },
        SEND_IP({ commit }, payload) {
            let ref = Vue.$db.collection('ipRequests').doc(payload.ip)
            ref.set({
                ip: payload.ip,
                city: payload.city,
                region: payload.region
            }, { merge: true })
                .then(() => {
                })
                .catch((error) => {
                    commit('SET_ERROR', error)
                })
        },
        SEND_FORM({ commit }, payload) {
            let ref
            if (payload.company != undefined) {
                ref = Vue.$db.collection('companyRequests').doc(payload.company)
                ref.set({
                    company: payload.company,
                    number: payload.number,
                    address: payload.address,
                    ip: payload.ip.ip,
                    city: payload.city,
                    region: payload.region
                }, { merge: true })
                    .then(() => {
                    })
                    .catch((error) => {
                        commit('SET_ERROR', error)
                    })
            }
            if (payload.fullname != undefined) {
                ref = Vue.$db.collection('userRequests').doc(payload.fullname)
                ref.set({
                    fullname: payload.fullname,
                    number: payload.number,
                    address: payload.address,
                    ip: payload.ip.ip,
                    city: payload.city,
                    region: payload.region
                }, { merge: true })
                    .then(() => {
                    })
                    .catch((error) => {
                        commit('SET_ERROR', error)
                    })
            }


        },
        STATE_CHANGED({ commit, dispatch }, payload) {
            if (payload) {
                console.log(payload)
                commit('SET_ADMIN', payload.uid)
                dispatch("LOAD_USERS_REQUESTS")
                dispatch("LOAD_COMPANY_REQUESTS")
                dispatch("LOAD_IP_REQUESTS")
            } else {
                commit('UNSET_ADMIN')
            }
        },
        LOAD_USERS_REQUESTS({ commit }) {
            Vue.$db.collection('userRequests')
                .get()
                .then(querySnapshot => {
                    let users = []
                    querySnapshot.forEach(s => {
                        const data = s.data()
                        let user = {
                            fullname: data.fullname,
                            number: data.number,
                            address: data.address,
                            ip: data.ip,
                            city: data.city,
                            region: data.region
                        }
                        users.push(user)
                    })
                    commit('SET_USERS_REQUESTS', users)
                })
                .catch(error => {
                    commit('SET_ERROR', error)
                    throw error
                }
                )
        },
        LOAD_IP_REQUESTS({ commit }) {
            Vue.$db.collection('ipRequests')
                .get()
                .then(querySnapshot => {
                    let ip = []
                    querySnapshot.forEach(s => {
                        const data = s.data()
                        let i = {
                            ip: data.ip,
                            city: data.city,
                            region: data.region
                        }
                        ip.push(i)
                    })
                    commit('SET_IP_REQUESTS', ip)
                    console.log(ip)
                })
                .catch(error => {
                    commit('SET_ERROR', error)
                    throw error
                }
                )
        },
        LOAD_COMPANY_REQUESTS({ commit }) {
            Vue.$db.collection('companyRequests')
                .get()
                .then(querySnapshot => {
                    let companies = []
                    querySnapshot.forEach(s => {
                        const data = s.data()
                        let company = {
                            company: data.company,
                            number: data.number,
                            address: data.address,
                            ip: data.ip,
                            city: data.city,
                            region: data.region
                        }
                        companies.push(company)
                    })
                    commit('SET_COMPANY_REQUESTS', companies)
                })
                .catch(error => {
                    commit('SET_ERROR', error)
                    throw error
                }
                )
        },
        SIGNOUT() {
            firebase.auth().signOut();
        },

        DELETE_USER_REQUEST({ commit }, payload) {
            Vue.$db.collection('userRequests').doc(payload.user.fullname).delete()
                .then(() => commit('DELETE_USER_REQUEST_STATE', payload))
        },
        DELETE_COMPANY_REQUEST({ commit }, payload) {
            Vue.$db.collection('companyRequests').doc(payload.company.company).delete()
                .then(() => commit('DELETE_COMPANY_REQUEST_STATE', payload))
        },
        DELETE_IP_REQUEST({ commit }, payload) {
            Vue.$db.collection('ipRequests').doc(payload.ip.ip).delete()
                .then(() => commit('DELETE_IP_REQUEST_STATE', payload))
        }
    },
    getters: {
        getProcessing: (state) => state.processing,
        getError: (state) => state.error,
        isAuthenticated: (state) => state.admin.isAuthenticated,
        uid: (state) => state.admin.uid,
        users: (state) => state.users,
        companies: (state) => state.companies,
        ip: (state) => state.ip
    }
})