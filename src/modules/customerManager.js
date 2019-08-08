const remoteURL = "http://localhost:5000"

export default {
    getCustomer(id) {
        return fetch(`${remoteURL}/api/customers/${id}`).then(e => e.json())
    },

    getAllCustomers() {
        return fetch(`${remoteURL}/api/customers`).then(e => e.json())
    },

    getAllCustomersPayments() {
        return fetch(`${remoteURL}/api/customers?_include=payments`).then(e => e.json())
    },

    getAllCustomersProducts() {
        return fetch(`${remoteURL}/api/customers?_include=products`).then(e => e.json())
    },

    deleteCustomer(id) {
        return fetch(`${remoteURL}/api/customers/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(e => e.json())
    },

    saveCustomer(obj) {
        return fetch(`${remoteURL}/api/customers`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    },

    editCustomer(editedCustomer) {
        return fetch(`${remoteURL}/api/customers/${editedCustomer.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedCustomer)
        }).then(data => data.json());
    }
}