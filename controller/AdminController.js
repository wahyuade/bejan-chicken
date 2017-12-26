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

    Admin.use('/api', ApiAdmin);
}