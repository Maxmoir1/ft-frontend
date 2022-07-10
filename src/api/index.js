const apiURL = `https://fitnesstrac-kr.herokuapp.com/api/`;

export const registerUser = async (username, password) => {
    try {
        const response = await fetch(`${apiURL}users/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("error", error);
    }
};

export const userLogin = async (username, password) => {
    try {
        const response = await fetch(`${apiURL}users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("error", error);
    }
};

export const myData = async (token) => {
    if (token) {
        try {
            const response = await fetch(`${apiURL}users/me`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = response.json();
            return data;
        } catch (error) {
            console.error("error", error);
        }
    }
};

export const userRoutine = async (username, token) => {
    try {
        if (token) {
            const response = await fetch(`${apiURL}users/${username}/routines`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = response.json();
            return data;
        } else {
            const response = await fetch(`${apiURL}users/${username}/routines`, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = response.json();
            return data;
        }
    } catch (error) {
        console.error("error");
    }
};

export const getActivities = async () => {
    try {
        const response = await fetch(`${apiURL}activities`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = response.json();
        return data;
    } catch (error) {
        console.error("error", error);
    }
};

export const getRoutines = async () => {
    try {
        const response = await fetch(`${apiURL}routines`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = response.json();
        return data;
    } catch (error) {
        console.error("error", error);
    }
};

export const createActivities = async (token, name, description) => {
    try {
        const response = await fetch(`${apiURL}activities`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name,
                description,
            }),
        });

        const data = response.json();
        return data;
    } catch (error) {
        console.error("error", error);
    }
};

export const createRoutine = async (token, name, goal, isPublic) => {
    try {
        const response = await fetch(`${apiURL}routines`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name,
                goal,
                isPublic,
            }),
        });

        const data = response.json();
        return data;
    } catch (error) {
        console.error("error", error);
    }
};

export const updateActivity = async (token, name, description, activityId) => {
    try {
        const response = await fetch(`${apiURL}activities/${activityId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name,
                description,
            }),
        });

        const data = response.json();
        return data;
    } catch (error) {
        console.error("error", error);
    }
};

export const updateRoutine = async (token, name, goal, isPublic, routineId) => {
    try {
        const response = await fetch(`${apiURL}routines/${routineId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name,
                goal,
                isPublic,
            }),
        });

        const data = response.json();
        return data;
    } catch (error) {
        console.error("error", error);
    }
};

export const deleteRoutine = async (token, routineId) => {
    try {
        const response = await fetch(`${apiURL}routines/${routineId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = response.json();
        return data;
    } catch (error) {
        console.error("error", error);
    }
};

export const getPublicRoutinesByActivity = async (activityId) => {
    try {
        const response = await fetch(
            `${apiURL}}activities/${activityId}/routines`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = response.json();
        return data;
    } catch (error) {
        console.error("error", error);
    }
};