module.exports = (app, api, db, form)=>{
    /**
     * Return view
     */
    app.get('/', (req, res)=>{
        res.render('public/index');
    });
    app.get('/login', (req, res)=>{
        res.render('public/index');
    });
    app.get('/register', (req, res)=>{
        res.render('public/index');
    });

    /**
     * API Public
     */
    api.post('/login', form.array(), (req, res)=>{
        var no_telp = req.body.no_telp;
        var password = req.body.password;
        db.query('SELECT id_login, no_telp, jenis, token FROM users WHERE no_telp=? AND password=?', [no_telp, password], (err, result)=>{
            if(result.length === 1){
                var token = Math.random().toString(32).slice(2)+Math.random().toString(32).slice(2)+Math.random().toString(32).slice(2)+Math.random().toString(32).slice(2);
                db.query('UPDATE users SET token = ? WHERE id_login = ?',[token, result[0].id_login], (err, response)=>{
                    res.json({success:true, message:'Berhasil login', token:token, type:result[0].jenis});
                });
            }else{
                res.json({success:false, message:'No Telp dan Password Anda tidak ada yang cocok'});
            }
        })
    })

    api.post('/register', (req, res)=>{
        
    })
}