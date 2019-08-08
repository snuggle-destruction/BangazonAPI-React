const remoteURL = "http://localhost:3000"

export default {
    getCustomer(id) {
        return fetch(`${remoteURL}/customers/${id}`).then(e => e.json())
    },

    getAllCustomers() {
        return fetch(`${remoteURL}/customers`).then(e => e.json())
    },

    deleteCustomer(id) {
        return fetch(`${remoteURL}/customers/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(e => e.json())
    },

    saveCustomer(obj) {
        return fetch(`${remoteURL}/customers`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    },

    editCustomer(editedCustomer) {
        return fetch(`${remoteURL}/customers/${editedCustomer.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedCustomer)
        }).then(data => data.json());
    }
}