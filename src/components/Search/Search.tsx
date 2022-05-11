import { useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

import styles from './Search.module.scss'

interface SearchProps {
    selected?: {}
    updateSelected?: (val) => void
}

export function Search(props: SearchProps) {
    const [searchedValue, setSearchedValue] = useState<string>('')

    const onChange = (value) => {
        props.updateSelected(value)
        setSearchedValue(value)
    }

    return (
        <OutlinedInput
            className={styles.input}
            placeholder="Search by country/name/username"
            value={searchedValue}
            type="search"
            onChange={(e) => onChange(e.target.value)}
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            }
        />
    )
}
