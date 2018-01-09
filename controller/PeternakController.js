module.exports = (Peternak, express, db) => {
	const ApiPeternak = express.Router();
    /**
     * Middleware Admin
     */
    Peternak.use((req, res, next)=>{
    	//next();
        if(req.headers.cookie != undefined){
            db.query('SELECT jenis FROM users WHERE token=?', req.headers.cookie.slice(6), (err, result)=>{
                if(result.length === 1){
                    if(result[0].jenis === 'P'){
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

    /*
    	FRONT END
    */
	Peternak.get('/', (req, res)=>{
		res.render('peternak/index');
	});

	Peternak.get('/home', (req, res)=>{
		res.render('peternak/index');
	});

	Peternak.get('/produk', (req, res)=>{
		res.render('peternak/index');
	});

	Peternak.get('/detailproduk', (req, res)=>{
		res.render('peternak/index');
	});

	Peternak.get('/pesanan', (req, res)=>{
		res.render('peternak/index');
	});

	Peternak.get('/history  ', (req, res)=>{
		res.render('peternak/index');
	});

	Peternak.get('/profile', (req, res)=>{
		res.render('peternak/index');
	});

	/*
		API
	*/
	ApiPeternak.get('/home', (req, res)=>{
		db.query('SELECT * FROM jenispakan', (err, jenis)=>{
			console.log(jenis);
			console.log(err);
			res.json(jenis);
		});
	});

	ApiPeternak.get('/produk', (req, res)=>{
		db.query('SELECT * FROM pakan', (err, produk)=>{
			console.log(produk);
			console.log(err);
			res.json(produk);
		});
	});

	ApiPeternak.get('/detailproduk', (req, res)=>{
		db.query('SELECT * FROM produk', (err, produk)=>{
			res.json(produk);
		});
	});

	ApiPeternak.get('/pesanan', (req, res)=>{
		db.query('SELECT * FROM pesan', (err, pesanan)=>{
			res.json(pesanan);
		});
	});

	ApiPeternak.get('/history', (req, res)=>{
		db.query('SELECT * FROM pesan WHERE status="N"', (err, history)=>{
			res.json(history);
		});
	});

	ApiPeternak.get('/profil', (req, res)=>{
		db.query('SELECT * FROM users WHERE token=?', req.headers.cookie.slice(6), (err, peternak)=>{
			res.json(peternak[0]);
		});
	});

	Peternak.use('/api', ApiPeternak);
}