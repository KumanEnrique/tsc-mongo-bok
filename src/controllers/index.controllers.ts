import {Request,Response} from 'express';
import Book,{IBook} from '../models/Book'

export async function getBook(req:Request,res:Response){
    const books:IBook[] = await Book.find()
    // const book = books[0].title
    res.render('books/index',{
        books,
        names:[
            { "lastname":"coeman", nickname:"hidetoshi1" },
            { "lastname":"coeman", nickname:"hidetoshi2" },
            { "lastname":"coeman", nickname:"hidetoshi3" },
        ]
    })
}
export function formBook(req:Request,res:Response){
    res.render('books/add')
}
export async function addBook(req:Request,res:Response){
    // console.log(req.body)
    const {title,author,isbn} = req.body
    const book:IBook = new Book({title,author,isbn})
    await book.save()
    // res.send('successfully added')
    res.redirect('/books')
}
export async function deleteBook(req:Request,res:Response){
    const id = req.params.id
    await Book.findByIdAndDelete(id)
    console.log(id)
    res.redirect('/books')
    // res.send('succesfully deleted')
}
export async function updateBook(req:Request,res:Response){
    const id = req.params.id
    const {title,author,isbn} = req.body
    await Book.findByIdAndUpdate(id,{title,author,isbn},{new:true})
    res.redirect('/books')
}