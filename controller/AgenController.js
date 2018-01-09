module.exports = (Agen, express, db)=>{
    const ApiAgen = express.Router();
    /**
     * Middleware Agen
     */
    Agen.use((req, res, next)=>{
        if(req.headers.cookie != undefined){
            db.query('SELECT jenis FROM users WHERE token=?', req.headers.cookie.slice(6), (err, result)=>{
                if(result.length === 1){
                    if(result[0].jenis === 'T'){
                        next();
                    }else{
                        res.redirect('/admin');
                    }
                }else{
                    res.redirect('/login');
                }
            })
        }else{
            res.redirect('/login');
        }
    });

    /**
     * Tampilan Agen
     */
    Agen.get('/', (req, res)=>{
        res.render('agen/index');
    })

    Agen.get('/pesanan', (req, res)=>{
        res.render('agen/index');
    })
    
    Agen.get('/profile', (req, res)=>{
        res.render('agen/index');
    })

    Agen.get('/history', (req, res)=>{
        res.render('agen/index');
    })

    Agen.get('/saldo', (req, res)=>{
        res.render('agen/index');
    })

    /**
     * API Agen
     */
    ApiAgen.get('/profile', (req, res)=>{
        db.query('SELECT nama, alamat, no_telp FROM users WHERE token=?', req.headers.cookie.slice(6), (err, result)=>{
            res.json(result[0]);
        })
    })

    ApiAgen.get('/pesanan', (req, res)=>{
        db.query('SELECT id_login, nama FROM users WHERE token=?', req.headers.cookie.slice(6), (err, users)=>{
            db.query('SELECT * FROM pesan WHERE id_login=?', users[0].id_login, (err, pesanan)=>{
                if(pesanan.length > 0){
                    res.json({success:true, message:'Berhasil mendapatkan data pesanan', data:pesanan});
                }else{
                    res.json({success:false, message:'Tidak ditemukan pesanan'});
                }
            })
        })
    })

    ApiAgen.get('/history', (req, res)=>{
        db.query('SELECT id_login, nama FROM users WHERE token=?', req.headers.cookie.slice(6), (err, users)=>{
            db.query('SELECT * FROM pesan WHERE id_login=?', users[0].id_login, (err, history)=>{
                if(history.length > 0){
                    res.json({success:true, message:'Berhasil mendapatkan data pesanan', data:history});
                }else{
                    res.json({success:false, message:'Tidak ditemukan pesanan'});
                }
            })
        })
    })
    
    ApiAgen.get('/saldo', (req, res)=>{
        db.query('SELECT id_login FROM users WHERE token=?', req.headers.cookie.slice(6), (err, users)=>{
            db.query('SELECT * FROM saldo WHERE id_login=?', users[0].id_login, (err,saldo)=>{
                if(saldo.length > 0){
                    res.json({success:true, message:'Berhasil mendapatkan data saldo', nama:users[0].nama, data:saldo});
                }else{
                    res.json({success:false, message:'Tidak ditemukan saldo'});
                }  
            })
        })
    })

    Agen.use('/api', ApiAgen);
}   