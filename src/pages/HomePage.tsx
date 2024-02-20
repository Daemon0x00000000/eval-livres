import {useContext} from "react";
import {BookContext} from "../App.tsx";


export const HomePage = () => {
    const {books, dispatch} = useContext(BookContext)


    return (
        <div style={{
            display: "flex",
            width:'100%',
            height:'100vh',
            justifyContent:'start',
            alignItems:'center',
            flexDirection:'column'
        }}>
            <h1 style={{
                color: "darkgreen"
            }}>Liste des livres </h1>
            <ul style={{
                listStyle: 'none',
                border: '.5px dotted darkgrey',
                padding: '10px'
            }}>
                {books.map(book => {
                    return <li key={book.title} style={{
                        display:'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}>

                        <span style={{
                            marginRight: '10px',
                            color:`${book.stock > 0 ? 'green' : 'red'}`
                        }}>
                            {book.stock}
                        </span>
                        <span style={{
                            width: '20vw'
                        }}>
                        {book.title}
                        </span>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems:'center',
                            width: '3vw'
                        }}>
                            <button style={{
                                border: "none",
                                background: 'green',
                                borderRadius: '50%',
                                cursor: 'pointer'
                            }} onClick={() => dispatch({type: 'INCR_STOCK', payload: {title: book.title, value: 1}})}>
                                +
                            </button>
                            <button style={{
                                border: "none",
                                background: 'red',
                                borderRadius: '50%',
                                cursor: 'pointer'
                            }} onClick={() => dispatch({type: 'DECR_STOCK', payload: {title: book.title, value: 1}})}>
                                -
                            </button>
                        </div>
                    </li>
                })}
            </ul>

        </div>
    )
}