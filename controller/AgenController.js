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

    Agen.use('/api', ApiAgen);
}