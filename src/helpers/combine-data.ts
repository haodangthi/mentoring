const convertToArray = (dataMap) => Array.from(dataMap).map(([_, user]) => user)

const setUser = (map) => {
    return (userInfo) => {
        return map.set(userInfo.userID, { ...map.get(userInfo.userID), ...userInfo })
    }
}

const mergeArray = (dataMap) => {
    return (dataArray) => {
        dataArray.forEach(setUser(dataMap))
    }
}

export const dataConverter = (...dataArrays) => {
    const dataMap = new Map()
    dataArrays.forEach(mergeArray(dataMap))

    return convertToArray(dataMap)
}
