const LandingAdmin = {
    template:'#landing-admin-template'
}

const Pembeli = {
    template:'#pembeli-template'
}

const Kandang = {
    template:'#kandang-template'
}

const Penjualan = {
    template:'#penjualan-template'
}

const Harga = {
    template:'#harga-template'
}

const Profile = {
    template:'#profile-template'
}

const router = new VueRouter({
    mode: 'history',
    routes:[
        {path: '/admin', component: LandingAdmin},
        {path: '/admin/pembeli', component: Pembeli},
        {path: '/admin/kandang', component: Kandang},
        {path: '/admin/penjualan', component: Penjualan},
        {path: '/admin/harga', component: Harga},
        {path: '/admin/profile', component: Profile}
    ]
});

const landingApp = new Vue({
    router
}).$mount('#adminApp');