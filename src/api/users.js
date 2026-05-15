export async function getUserByEmail(email) {
    try {
        const response = await fetch(`http://localhost:3000/users?email=${email}`)
        const data = await response.json()
        if (data.length === 0) throw new Error()
        return data[0]
    } catch (error) {
        return undefined
    }
}

export async function deleteById(id) {
    try {
        const response = await fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" })
        const data = await response.json()
        if (!response.ok || !data) throw new Error("cant delete");
        return true
    } catch (error) {
        return false
    }
}

export async function getUsers() {
    try {
        const response = await fetch(`http://localhost:3000/users`)
        const data = await response.json()
        if (!response.ok || !data || data.length === 0) throw new Error("")
        return data
    } catch (error) {
        return undefined
    }
}