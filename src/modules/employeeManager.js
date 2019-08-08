const remoteURL = "http://localhost:3000"

export default {
    getEmployee(id) {
        return fetch(`${remoteURL}/employees/${id}`).then(e => e.json())
    },

    getAllEmployees() {
        return fetch(`${remoteURL}/employees`).then(e => e.json())
    },

    deleteEmployee(id) {
        return fetch(`${remoteURL}/employees/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(e => e.json())
    },

    saveEmployee(obj) {
        return fetch(`${remoteURL}/employees`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    },

    editEmployee(editedEmployee) {
        return fetch(`${remoteURL}/employees/${editedEmployee.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedEmployee)
        }).then(data => data.json());
    }
}