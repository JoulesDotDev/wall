import { Toaster } from "../stores"

const error = () => Toaster.add({
    message: "Error, try again later",
    type: "warning"
})

export async function callApi({ url, body }: ApiRequest) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: body ? JSON.stringify(body) : undefined
    }).catch(() => { })

    if (response && response.ok) {
        const json = await response.json().catch(error)

        if (json.message) {
            Toaster.add({
                message: json.message,
                type: json.error ? "warning" : "default"
            })
        }

        return json.data
    } else {
        error()
    }
}