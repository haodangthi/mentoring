import React, { useState, useEffect } from 'react'
import { StyledEngineProvider } from '@mui/material/styles'

import { Table, Filters, Sort, Search } from './components'
import { getImages, getUsers, getAccounts } from './mocks/api'

import styles from './App.module.scss'

import type { Image, User, Account, RowItem } from './types/types'

import { dataConverter } from './helpers/combine-data'
import { filterData } from './helpers/filter-data'
import { FilterType } from './enum/filter-type.enum'
import { sortData } from './helpers/sort-data'
import { searchData } from './helpers/search-data'
import { getUniqueArray } from './helpers/get-unique-array'
import { FilterModel } from './types/filter.model'

const initialFilterState: FilterModel = {
    [FilterType.withoutPosts]: false,
    [FilterType.moreThanPosts]: false,
}

function App() {
    const [data, setData] = useState<RowItem[]>(undefined)
    const [filter, setFilter] = useState<FilterModel>(initialFilterState)
    const [filteredUsers, setFilteredUsers] = useState<RowItem[]>([])
    const [searchedUsers, setSearchedUsers] = useState<RowItem[]>([])
    const [shownUsers, setShownUsers] = useState<RowItem[]>([])

    const handleFilterChange = (filterName: FilterType) => {
        const currFilter = {
            ...filter,
            [filterName]: !filter[filterName],
        }
        setFilter(currFilter)

        const users = filterData(currFilter, data)
        setFilteredUsers(users)

        setShownUsers(getUniqueArray([...searchedUsers, ...users]))
    }

    const handleSortChange = (filterName: FilterType) => {
        const users = shownUsers || data

        setShownUsers([...sortData(filterName, users)])
    }

    const handleSearch = (searchQuery: string) => {
        const users = searchData(searchQuery, data)

        setSearchedUsers(users)
        setShownUsers(getUniqueArray([...filteredUsers, ...users]))
    }

    useEffect(() => {
        Promise.all([getImages(), getUsers(), getAccounts()]).then(
            ([images, users, accounts]: [Image[], User[], Account[]]) => {
                const combinedData = dataConverter(images, users, accounts)

                setData(combinedData)
            }
        )
    }, [])

    return (
        <StyledEngineProvider injectFirst>
            <div className="App">
                <div className={styles.container}>
                    <div className={styles.sortFilterContainer}>
                        <Filters updateSelected={handleFilterChange} />
                        <Sort updateSelected={handleSortChange} />
                    </div>
                    <Search updateSelected={handleSearch} />
                </div>
                <Table rows={(shownUsers.length && shownUsers) || data} />
            </div>
        </StyledEngineProvider>
    )
}

export default App
