module.exports = (app)=>{
    app.get('/', (req, res)=>{
        res.render('public/landing', {title:'Wahyu Ade', message:'hallo gan'});
    })
    app.get('/:rute', (req, res)=>{
        res.render('public/landing', {title:'Wahyu Ade', message:'hallo gan'});
    })
}