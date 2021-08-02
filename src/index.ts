import express from 'express';
import morgan from 'morgan';
import exphbs from 'express-handlebars';
import _Handlebars from 'handlebars';
import path from 'path';
import {allowInsecurePrototypeAccess} from '@handlebars/allow-prototype-access'

const app = express();

import IndexRoute from './routes/index'
import './database'

//settings
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views'))
app.engine('.hbs',exphbs({
    handlebars: allowInsecurePrototypeAccess(_Handlebars),
    extname:'hbs',
    defaultLayout: 'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    helpers:require('./lib/helpers')
}))
app.set('view engine','.hbs')

//middlewares
app.use(morgan('dev'));
app.use(express.json());//para entender json
app.use(express.urlencoded({extended:true}))

//routes
app.get('/',(req,res)=>{
    res.render('index')
});
app.use('/books',IndexRoute)

//static files
app.use(express.static(path.join(__dirname,'public')))

//starting the server
app.listen(app.get('port'),()=>{
    console.log(`server on http://localhost:${app.get('port')}`);
});