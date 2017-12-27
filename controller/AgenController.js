module.exports = (Agen, express, db)=>{
    const ApiAgen = express.Router();
    /**
     * Middleware Agen
     */
    Agen.use((req, res, next)=>{
        if(req.headers.cookie != undefined){
            db.query('SELECT jenis FROM users WHERE token=?', req.headers.cookie.slice(6), (err, result)=>{
                if(result.length === 1){
                    if(result[0].jenis === 'U'){
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

    /**
     * API Agen
     */
    ApiAgen.get('/profile', (req, res)=>{
        db.query('SELECT nama, no_telp, alamat FROM users WHERE token=?', req.headers.cookie.slice(6), (err, result)=>{
            res.json(result[0]);
        })
    })

    ApiAgen.get('/pesanan', (req, res)=>{
        db.query('SELECT id_login, nama FROM users WHERE token=?', req.headers.cookie.slice(6), (err, users)=>{
            db.query('SELECT * FROM penjualan WHERE id_pembeli=?', users[0].id_login, (err, pesanan)=>{
                if(pesanan.length > 0){
                    res.json({success:true, message:'Berhasil mendapatkan data pesanan', nama:users[0].nama, data:pesanan});
                }else{
                    res.json({success:false, message:'Tidak ditemukan pesanan'});
                }
            })
        })
    })

    Agen.use('/api', ApiAgen);
}