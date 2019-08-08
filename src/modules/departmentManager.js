const remoteURL = "http://localhost:5000"

export default {
    getDepartment(id) {
        return fetch(`${remoteURL}/api/departments/${id}`).then(e => e.json())
    },

    getAllDepartments() {
        return fetch(`${remoteURL}/api/departments`).then(e => e.json())
    },

    deleteDepartment(id) {
        return fetch(`${remoteURL}/api/departments/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(e => e.json())
    },

    saveDepartment(obj) {
        return fetch(`${remoteURL}/api/departments`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    },

    editDepartment(editedDepartment) {
        return fetch(`${remoteURL}/api/departments/${editedDepartment.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedDepartment)
        }).then(data => data.json());
    }
}