import {createContext, Dispatch, useEffect, useReducer, useState} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage.tsx";
import {AddBookPage} from "./pages/AddBookPage.tsx";
import {Nav} from "./components/Nav.tsx";

interface Book {
  bookid:number
  title: string
  description: string
  author: string
  stock: number
}

interface BookContextType {
  books: Book[],
  dispatch: Dispatch<RBookAction>
}

export const BookContext = createContext({} as BookContextType)

type payload = {
  title:string,
  value:number
}
type RBookAction = {
  type: string,
  payload: payload | Book
}

const BookReducer = (state,action: RBookAction) => {
  switch (action.type) {
    case 'INCR_STOCK':
      return [
        ...state.map((book:Book) => {
          if (book.title === action.payload.title) {
            book.stock += (action.payload as payload).value
          }
          return book
        })
      ]
    case 'DECR_STOCK':
      return [
        ...state.map((book:Book) => {
          if (book.title === action.payload.title) {
            book.stock -= (action.payload as payload).value
          }
          return book
        })
      ]
    case 'ADD_BOOK':
        return [...state, action.payload]
  }
}

function App() {

  const initialBooks = [
    {
      bookid: 1,
      title: 'Le Petit Prince',
      description: 'Un livre pour enfants écrit par Antoine de Saint-Exupéry',
      stock: 5,
    },
    {
      bookid: 2,
      title: 'Les Misérables',
      description: 'Un roman écrit par Victor Hugo',
      stock: 0,
    },
    {
      bookid: 3,
      title: 'Le Rouge et le Noir',
      description: 'Un roman écrit par Stendhal',
      stock: 3,
    },
    {
      bookid: 4,
      title: 'Les Trois Mousquetaires',
      description: 'Un roman écrit par Alexandre Dumas',
      stock: 10,
    }
  ]
  /*

   */


  const [books, dispatch] = useReducer(BookReducer, initialBooks, () => {
    try {
      const stringBooks = localStorage.getItem('books')
      if (stringBooks) {
        return JSON.parse(stringBooks) as Book[]
      }
      return [
        {
          bookid: 1,
          title: 'Le Petit Prince',
          description: 'Un livre pour enfants écrit par Antoine de Saint-Exupéry',
          stock: 5,
        },
        {
          bookid: 2,
          title: 'Les Misérables',
          description: 'Un roman écrit par Victor Hugo',
          stock: 0,
        },
        {
          bookid: 3,
          title: 'Le Rouge et le Noir',
          description: 'Un roman écrit par Stendhal',
          stock: 3,
        },
        {
          bookid: 4,
          title: 'Les Trois Mousquetaires',
          description: 'Un roman écrit par Alexandre Dumas',
          stock: 10,
        }
      ] as Book[]
    } catch {
      return [
        {
          bookid: 1,
          title: 'Le Petit Prince',
          description: 'Un livre pour enfants écrit par Antoine de Saint-Exupéry',
          stock: 5,
        },
        {
          bookid:2,
          title: 'Les Misérables',
          description: 'Un roman écrit par Victor Hugo',
          stock: 0,
        },
        {
          bookid:3,
          title: 'Le Rouge et le Noir',
          description: 'Un roman écrit par Stendhal',
          stock: 3,
        },
        {
          bookid:4,
          title: 'Les Trois Mousquetaires',
          description: 'Un roman écrit par Alexandre Dumas',
          stock: 10,
        }
      ] as Book[]
    }
  })
  const [firstRender, setFirstRender] = useState(true)

  useEffect(() => {
    if (!firstRender) {
      localStorage.setItem('books', JSON.stringify(books))
    }
    setFirstRender(false)
  }, [books, firstRender])

  return (
    <BookContext.Provider value={{books: books as Book[], dispatch}}>
      <BrowserRouter>
        <Nav/>
        <button onClick={() => localStorage.clear()} style={{
          position: 'fixed',
          top: '0',
          right: '0',
          margin: '10px',
          padding: '10px',
          border: 'none',
          background: 'red',
          color: 'white',
          cursor: 'pointer'
        }}>Clear</button>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/add' element={<AddBookPage/>}/>
        </Routes>
      </BrowserRouter>
    </BookContext.Provider>
  )
}

export default App
