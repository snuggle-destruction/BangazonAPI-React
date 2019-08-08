const remoteURL = "http://localhost:3000"

export default {
    getProduct(id) {
        return fetch(`${remoteURL}/products/${id}`).then(e => e.json())
    },

    getAllProducts() {
        return fetch(`${remoteURL}/products`).then(e => e.json())
    },

    deleteProduct(id) {
        return fetch(`${remoteURL}/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(e => e.json())
    },

    saveProduct(obj) {
        return fetch(`${remoteURL}/products`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    },

    editProduct(editedProduct) {
        return fetch(`${remoteURL}/products/${editedProduct.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedProduct)
        }).then(data => data.json());
    }
}