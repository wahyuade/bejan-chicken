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
            nama:'',
            password:'',
            password_confirmation:'',
            alamat:'',
            jenis1:'',
            jenis2:''
        }
    },
    methods:{
        doRegister(){
            var user = {}
            user.no_telp = this.no_telp;
            user.nama = this.nama;
            user.password = this.password;
            user.alamat = this.alamat;
            if(this.jenis1){
                user.jenis = "T"
            }else{
                user.jenis = "P"
            }
            axios.post('/api/register', user).then((body)=>{
                console.log(body);
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
