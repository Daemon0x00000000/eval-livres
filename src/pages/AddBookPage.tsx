import {BookContext} from "../App.tsx";
import {FormEvent, useContext} from "react";
import  '../formStyles.css'


export const AddBookPage = () => {
    const {books, dispatch} = useContext(BookContext)

    const submit = (e: FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const title = form.titre.value
        const description = form.description.value
        const author = form.author.value
        const stock = form.stock.value
        dispatch({type: 'ADD_BOOK', payload: {
            bookid: books.length + 1,
            title,
            description,
            author,
            stock
        }})
    }
    return (
        <form onSubmit={submit} className='addForm'>
            <label htmlFor='titre'>Titre</label>
            <input type='text' name='titre' required />
            <label htmlFor='description'>Description</label>
            <input type='text' name='description' required/>
            <label htmlFor='author'>Auteur</label>
            <input type='text' name='author' required/>
            <label htmlFor='stock'>Stock</label>
            <input type='number' name='stock' required/>
            <button type='submit'>Ajouter</button>
        </form>
    )
}