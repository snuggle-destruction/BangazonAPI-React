const remoteURL = "http://localhost:5000"

export default {
    getComputer(id) {
        return fetch(`${remoteURL}/api/computers/${id}`).then(e => e.json())
    },

    getAllComputers() {
        return fetch(`${remoteURL}/api/computers`).then(e => e.json())
    },

    deleteComputer(id) {
        return fetch(`${remoteURL}/api/computers/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(e => e.json())
    },

    saveComputer(obj) {
        return fetch(`${remoteURL}/api/computers`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    },

    editComputer(editedComputer) {
        return fetch(`${remoteURL}/api/computers/${editedComputer.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedComputer)
        }).then(data => data.json());
    }
}