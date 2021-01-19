import { writable } from 'svelte/store'

export const Toaster = function () {
    const { subscribe, update, set } = writable([] as ToasterList)

    function removeToast() {
        update(toasterList => {
            toasterList.pop()
            return toasterList
        })
    }

    let timeouts = []

    return {
        subscribe,
        add: (toast: Toast) => {
            update(toasterList => {
                toasterList.unshift(toast)

                if (toasterList.length > 3) {
                    toasterList.pop()
                } else {
                    timeouts.push(setTimeout(removeToast, 3000))
                }

                return toasterList
            })
        },
        clear: () => {
            set([])
            for (const timeout of timeouts) {
                clearTimeout(timeout)
            }
        }
    }
}()
