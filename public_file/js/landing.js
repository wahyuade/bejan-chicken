const Landing = {
    template:'#landing-template'
}

const Login = {
    template:'#login-template',
    methods:{
        doLogin(){
            console.log("login gan");
        }
    }
}

const router = new VueRouter({
    mode: 'history',
    routes:[
        {path: '/', component: Landing},
        {path: '/login', component: Login}
    ]
});

const landingApp = new Vue({
    router
}).$mount('#landingApp');
