export  async function getUserByEmail(email) {
    try {
        const response = await fetch(`http://localhost:3000/users?email=${email}`)
        const data = await response.json()
        if (data.length === 0) throw new Error()
        return data[0]
    } catch (error) {
        return undefined
    }
}