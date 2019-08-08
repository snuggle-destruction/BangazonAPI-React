const remoteURL = "http://localhost:3000"

export default {
    getComputer(id) {
        return fetch(`${remoteURL}/computers/${id}`).then(e => e.json())
    },

    getAllComputers() {
        return fetch(`${remoteURL}/computers`).then(e => e.json())
    },

    deleteComputer(id) {
        return fetch(`${remoteURL}/computers/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(e => e.json())
    },

    saveComputer(obj) {
        return fetch(`${remoteURL}/computers`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    },

    editComputer(editedComputer) {
        return fetch(`${remoteURL}/computers/${editedComputer.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedComputer)
        }).then(data => data.json());
    }
}