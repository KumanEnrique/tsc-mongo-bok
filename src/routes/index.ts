import {Router} from 'express'
const router = Router()
import {addBook,deleteBook,getBook,updateBook,formBook} from '../controllers/index.controllers'

router.get('/',getBook)
router.get('/add',formBook)
router.post('/add',addBook)
router.get('/delete/:id',deleteBook)
router.post('/update/:id',updateBook)

// router.route('/:id')
export default router