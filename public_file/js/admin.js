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
    template:'#penjualan-template',
    data(){
        return{
            penjualan : new Array()
        }
    }, 
    created(){
        this.getPenjualan();
    },
    methods:{
        getPenjualan(){
            axios.get('/admin/api/penjualan').then((response)=>{
                return response.data;
            }).then((response)=>{
                this.penjualan = response;
            })
        }
    }
}

const Harga = {
    template:'#harga-template'
}

const Profile = {
    template:'#profile-template',
    data(){
        return{
            profile:{}
        }
    },
    created(){
        this.getProfile();
    },
    methods:{
        getProfile(){
            axios.get('/admin/api/profile').then((response)=>{
                return response.data;
            }).then((response)=>{
                this.profile = response;
            })
        }
    }
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