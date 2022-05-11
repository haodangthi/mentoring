import { FilterType } from '../enum/filter-type.enum'
import { RowItem } from '../types/types'
import { FilterModel } from '../types/filter.model'

export const filterData = (filter: FilterModel, users: RowItem[]) => {
    return users.filter((user) => {
        return (
            (filter[FilterType.withoutPosts] && !user.posts) ||
            (filter[FilterType.moreThanPosts] && user.posts > 100) ||
            (!filter[FilterType.withoutPosts] && !filter[FilterType.moreThanPosts] && user)
        )
    })
}
