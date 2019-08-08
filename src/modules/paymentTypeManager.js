const remoteURL = "http://localhost:3000"

export default {
    getPaymentType(id) {
        return fetch(`${remoteURL}/paymentTypes/${id}`).then(e => e.json())
    },

    getAllPaymentTypes() {
        return fetch(`${remoteURL}/paymentTypes`).then(e => e.json())
    },

    deletePaymentType(id) {
        return fetch(`${remoteURL}/paymentTypes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(e => e.json())
    },

    savePaymentType(obj) {
        return fetch(`${remoteURL}/paymentTypes`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    },

    editPaymentType(editedPaymentType) {
        return fetch(`${remoteURL}/paymentTypes/${editedPaymentType.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedPaymentType)
        }).then(data => data.json());
    }
}