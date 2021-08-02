import { connect } from "mongoose";
import {mongodb} from './keys'

connect(mongodb.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(db=>console.log('db is connected'))
    .catch(error=>console.log(error))