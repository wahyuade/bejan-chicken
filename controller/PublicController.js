module.exports = (app, api)=>{
    /**
     * Return view
     */
    app.get('/', (req, res)=>{
        res.render('public/index', {title:'Wahyu Ade', message:'hallo gan'});
    })
    app.get('/:rute', (req, res)=>{
        res.render('public/index', {title:'Wahyu Ade', message:'hallo gan'});
    })

    /**
     * API Public
     */
    api.post('/login', (req, res)=>{
        res.json({success:true, message:'Berhasil login', data:req.body});
    })

    api.post('/register', (req, res)=>{
        res.json({success:true, message:'Berhasil mendaftar', data:req.body})
    })
}