module.exports = (Admin, express, db)=>{
    const ApiAdmin = express.Router();
    /**
     * Middleware Admin
     */
    Admin.use((req, res, next)=>{
        if(req.headers.cookie != undefined){
            db.query('SELECT jenis FROM users WHERE token=?', req.headers.cookie.slice(6), (err, result)=>{
                if(result.length === 1){
                    if(result[0].jenis === 'A'){
                        next();
                    }else{
                        res.redirect('/agen');
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
     * Tampilan Admin
     */
    Admin.get('/', (req, res)=>{
        res.render('admin/index');
    });

    Admin.get('/pembeli', (req, res)=>{
        res.render('admin/index');
    });

    Admin.get('/kandang', (req, res)=>{
        res.render('admin/index');
    });

    Admin.get('/penjualan', (req, res)=>{
        res.render('admin/index');
    });

    Admin.get('/harga', (req, res)=>{
        res.render('admin/index');
    });

    Admin.get('/profile', (req, res)=>{
        res.render('admin/index');
    });

    /**
     * API Admin
     */

    ApiAdmin.get('/harga', (req, res)=>{
        db.query('SELECT * FROM harga', (err, harga)=>{
            res.json(harga);
        });
    });

    ApiAdmin.get('/kandang', (req, res)=>{
        db.query('SELECT * FROM kandang', (err, kandang)=>{
            res.json(kandang);
        });
    });

    ApiAdmin.get('/pembeli', (req, res)=>{
        db.query('SELECT * FROM users WHERE jenis="U"', (err, pembeli)=>{
            res.json(pembeli);
        });
    });

    ApiAdmin.get('/penjualan', (req, res)=>{
        db.query('SELECT penjualan.id_penjualan, users.nama, penjualan.jumlah, penjualan.tgl_pesan, penjualan.tgl_sampai, penjualan.jenis, penjualan.status, penjualan.harga FROM penjualan LEFT JOIN users ON penjualan.id_pembeli=users.id_login', (err, pembeli)=>{
            if(pembeli.length > 0){
                res.json({success:true, message:'Berhasil mengambil data penjualan', data:pembeli});
            }else{
                res.json({success:false, message:'Gagal mengambil data'});
            }
        });
    });

    ApiAdmin.get('/profile', (req, res)=>{
        db.query('SELECT * FROM users WHERE token=?', req.headers.cookie.slice(6), (err, admin)=>{
            res.json(admin[0]);
        })
    });

    Admin.use('/api', ApiAdmin);
}