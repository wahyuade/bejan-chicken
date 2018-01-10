const Landing = {
    template:'#landing-template'
}

const Login = {
    template:'#login-template',
    data(){
        return{
            no_telp:'',
            password:''
        }
    },
    methods:{
        doLogin(){
            axios.post('/api/login', {no_telp:this.no_telp, password:this.password}).then((body)=>{
                if(body.data.success){
                    document.cookie='token='+body.data.token;
                    if(body.data.jenis === "A"){
                        location.href = 'admin';
                    }else{
                        location.href = 'peternak';
                    }
                }else{
                    console.log(body.data.message);
                }
            })
        }
    }
}

const Register = {
    template:'#register-template',
    data(){
        return{
            no_telp:'',
            name:'',
            password:'',
            password_confirmation:'',
            alamat:'',
            jenis:''
        }
    },
    methods:{
        doRegister(){
            axios.post('/api/register', {no_telp:this.no_telp, name:this.name, password:this.password, alamat:this.alamat, jenis:this.jenis}).then((body)=>{
                console.log(body.data);
            })
        }
    }
}

const router = new VueRouter({
    mode: 'history',
    routes:[
        {path: '/', component: Landing},
        {path: '/login', component: Login},
        {path: '/register', component: Register}
    ]
});

const landingApp = new Vue({
    router
}).$mount('#landingApp');
