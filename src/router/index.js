import Vue from 'vue'
import Router from 'vue-router'
import Landing from '../components/Landing'
import BrainDump from '../components/BrainDump'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: Landing
        },
        {
            path: '/brainDump',
            name: 'BrainDump',
            component: BrainDump
        }
    ]
})