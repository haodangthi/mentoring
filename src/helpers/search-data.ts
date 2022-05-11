import { RowItem } from '../types/types'

const containsString = (str: string, substr: string): boolean => str.toLowerCase().includes(substr.toLowerCase())

export const searchData = (searchQuery: string, users: RowItem[]): RowItem[] => {
    if (!searchQuery) {
        return []
    }

    return users.filter(
        (user) => containsString(user.country, searchQuery) || containsString(user.username, searchQuery)
    )
}
