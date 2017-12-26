const Agen = {
    template:'#agen-template'
}

const Pesanan = {
    template:'#pesanan-template'
}

const Profile = {
    template:'#profile-template'
}

const router = new VueRouter({
    mode: 'history',
    routes:[
        {path: '/agen', component: Agen},
        {path: '/agen/pesanan', component: Pesanan},
        {path: '/agen/profile', component: Profile}
    ]
});

const landingApp = new Vue({
    router
}).$mount('#agenApp');