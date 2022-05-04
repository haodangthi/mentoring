export const PageIterable = (superclass: any) =>
    class extends superclass {
        [Symbol.iterator]() {
            const { pages } = this.pagesInstance
            const context = this
            let step = 0

            const iterator = {
                next() {
                    step++
                    if (step < pages.length) {
                        return { value: (context as any).toString(step), done: false }
                    }

                    return { value: null, done: true }
                },
            }

            return iterator
        }
    }
