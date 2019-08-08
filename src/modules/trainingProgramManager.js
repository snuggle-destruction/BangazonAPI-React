const remoteURL = "http://localhost:5000"

export default {
    getTrainingProgram(id) {
        return fetch(`${remoteURL}/api/trainingPrograms/${id}`).then(e => e.json())
    },

    getAllTrainingPrograms() {
        return fetch(`${remoteURL}/api/trainingPrograms`).then(e => e.json())
    },

    deleteTrainingProgram(id) {
        return fetch(`${remoteURL}/api/trainingPrograms/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(e => e.json())
    },

    saveTrainingProgram(obj) {
        return fetch(`${remoteURL}/api/trainingPrograms`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    },

    editTrainingProgram(editedTrainingProgram) {
        return fetch(`${remoteURL}/api/trainingPrograms/${editedTrainingProgram.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedTrainingProgram)
        }).then(data => data.json());
    }
}