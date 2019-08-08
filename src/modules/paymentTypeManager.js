const remoteURL = "http://localhost:5000"

export default {
    getPaymentType(id) {
        return fetch(`${remoteURL}/api/paymentTypes/${id}`).then(e => e.json())
    },

    getAllPaymentTypes() {
        return fetch(`${remoteURL}/api/paymentTypes`).then(e => e.json())
    },

    deletePaymentType(id) {
        return fetch(`${remoteURL}/api/paymentTypes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(e => e.json())
    },

    savePaymentType(obj) {
        return fetch(`${remoteURL}/api/paymentTypes`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    },

    editPaymentType(editedPaymentType) {
        return fetch(`${remoteURL}/api/paymentTypes/${editedPaymentType.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedPaymentType)
        }).then(data => data.json());
    }
}