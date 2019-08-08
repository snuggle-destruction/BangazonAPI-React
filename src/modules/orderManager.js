const remoteURL = "http://localhost:3000"

export default {
    getOrder(id) {
        return fetch(`${remoteURL}/orders/${id}`).then(e => e.json())
    },

    getAllOrders() {
        return fetch(`${remoteURL}/orders`).then(e => e.json())
    },

    deleteOrder(id) {
        return fetch(`${remoteURL}/orders/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(e => e.json())
    },

    saveOrder(obj) {
        return fetch(`${remoteURL}/orders`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    },

    editOrder(editedOrder) {
        return fetch(`${remoteURL}/orders/${editedOrder.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedOrder)
        }).then(data => data.json());
    }
}