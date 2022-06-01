export const getParentIndex = (currIndex) => Math.floor(currIndex / 2)

export const getLeftIndex = (currIndex) => 2 * currIndex + 1

export const getRightIndex = (currIndex) => getLeftIndex(currIndex) + 1
