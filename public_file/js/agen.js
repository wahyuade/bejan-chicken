const Agen = {
    template:'#agen-template'
}

const Pesanan = {
    template:'#pesanan-template',
    data(){
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
    }
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
        {path: '/agen', component: Agen},
        {path: '/agen/pesanan', component: Pesanan},
        {path: '/agen/profile', component: Profile}
    ]
});

const landingApp = new Vue({
    router,
    methods:{
        doSignOut(){
            document.cookie='token=sdfsdf';
            router.go('/login');
        }
    }
}).$mount('#agenApp');