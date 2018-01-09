const Home = {
    template:'#home-template',
    data(){
        return{
            jenispakan : new Array()
        }
    }, 
    created(){
        this.getJenis();
    },
    methods:{
        getJenis(){
            axios.get('/peternak/api/home').then((response)=>{
                return response.data;
            }).then((response)=>{
                this.jenispakan = response;
                console.log(response);
            })
        }
    }
}

const Pesanan = {
    template:'#pesanan-template'
    /*data(){
        return{
            pesanan : new Array()
        }
    }, 
    created(){
        this.getPesanan();
    },
    methods:{
        getPesanan(){
            axios.get('/agen/api/pesanan').then((response)=>{
                return response.data;
            }).then((response)=>{
                this.pesanan = response;
            })
        }
    }*/
}

const History = {
	template:'#history-template'
}

const Produk = {
    template:'#pakan-template',
    data(){
        return{
            pakan : new Array()
        }
    }, 
    created(){
        this.getPakan();
    },
    methods:{
        getPakan(){
            axios.get('/peternak/api/produk').then((response)=>{
                return response.data;
            }).then((response)=>{
                this.pakan = response;
            })
            
        }
    }
}

const detailPakan = {
    template:'#detailPakan-template'
    /*data(){
        return{
            pesanan : new Array()
        }
    }, 
    created(){
        this.getPesanan();
    },
    methods:{
        getPesanan(){
            axios.get('/agen/api/pesanan').then((response)=>{
                return response.data;
            }).then((response)=>{
                this.pesanan = response;
            })
        }
    }*/
}

const Profile = {
    template:'#profile-template',
    data(){
        return{
            profile:{}
        }
    },
    created(){
        this.getDetailProfile();
    },
    methods:{
        getDetailProfile(){
            axios.get('/agen/api/profile').then((response)=>{
                return response.data;
            }).then((response)=>{
                this.profile = response;
                console.log(response);
            })
        }
    }
}

const router = new VueRouter({
    mode: 'history',
    routes:[
        {path: '/peternak/', component: Home},
        {path: '/peternak/home', component: Home},
        {path: '/peternak/produk', component: Produk},
        {path: '/peternak/detailproduk', component: detailPakan},
        {path: '/peternak/pesanan', component: Pesanan},
        {path: '/peternak/history', component: History},
        {path: '/peternak/profile', component: Profile}
    ]
});

const landingApp = new Vue({
    router,
    methods:{
        doSignOut(){
            //document.cookie='token=sdfsdf';
            router.go('/login');
        }
    }
}).$mount('#peternakApp');