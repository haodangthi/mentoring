import { FilterType } from '../enum/filter-type.enum'
import { RowItem } from '../types/types'

export const sortData = (sortType: FilterType = FilterType.desc, users: RowItem[]): RowItem[] => {
    users.sort((a, b) => (sortType === FilterType.asc ? a.posts - b.posts : b.posts - a.posts))

    return users
}
