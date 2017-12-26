module.exports = (app, api, db)=>{
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
        
    })

    api.post('/register', (req, res)=>{
        
    })
}