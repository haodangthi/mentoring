import { RowItem } from '../types/types'

const convertToArray = (dataMap) => Array.from(dataMap).map(([_, user]) => user)

const setUser = (map): ((userInfo: RowItem) => void) => {
    return (userInfo) => {
        return map.set(userInfo.userID, { ...map.get(userInfo.userID), ...userInfo })
    }
}

const mergeArray = (dataMap): ((dataArray: any[]) => void) => {
    return (dataArray) => {
        dataArray.forEach(setUser(dataMap))
    }
}

export const dataConverter = (...dataArrays): any[] => {
    const dataMap = new Map()
    dataArrays.forEach(mergeArray(dataMap))

    return convertToArray(dataMap)
}
