import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (             
        <div className="book-list" style={{ color: theme.syntax, background: theme.bg}}>
            <ul>
                <li style={{ background: theme.ui }}>Lord of the Rigns</li>
                <li style={{ background: theme.ui }}>Galaxy</li>
                <li style={{ background: theme.ui }}>Cats</li>
            </ul>
        </div>)
}

export default BookList
