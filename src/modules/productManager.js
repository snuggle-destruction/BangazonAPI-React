const remoteURL = "http://localhost:5000"

export default {
    getProduct(id) {
        return fetch(`${remoteURL}/api/products/${id}`).then(e => e.json())
    },

    getAllProducts() {
        return fetch(`${remoteURL}/api/products`).then(e => e.json())
    },

    deleteProduct(id) {
        return fetch(`${remoteURL}/api/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(e => e.json())
    },

    saveProduct(obj) {
        return fetch(`${remoteURL}/api/products`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    },

    editProduct(editedProduct) {
        return fetch(`${remoteURL}/api/products/${editedProduct.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedProduct)
        }).then(data => data.json());
    }
}