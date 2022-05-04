// just a file to debug

import { Pages } from './pages'
import { Page } from './page'
import { Book } from './book'
import { PagesFactory } from './pageFactory/PageFactory'

const book = new Book(
    'Harry Potter',
    'J. K. Rowling',
    new Pages([
        new Page(1, 'with text', 'simple paper'),
        new Page(2, 'with text', 'simple paper'),
        new Page(3, 'with text', 'simple paper'),
        new Page(4, 'with text', 'simple paper'),
    ])
)

for (const page of book) {
    console.log(page)
}

const booksConfig = new Set([
    [1, 'with text', 'simple paper'],
    [2, 'with text', 'simple paper'],
    [3, 'with text', 'simple paper'],
    [4, 'with text', 'simple paper'],
])

const pagesInstance = PagesFactory.build(booksConfig)

console.log(pagesInstance.pages)
