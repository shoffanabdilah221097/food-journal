import axios from "axios";

export const apiFood = axios.create({
    baseURL: "https://api-bootcamp.do.dibimbing.id/api/v1",
    headers: {
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1bWlsYW5nMTgyMDEzQGdtYWlsLmNvbSIsInVzZXJJZCI6IjU1NmZiOTQ0LTc0ZGUtNDQ0YS1iNmJiLTEyZjRlMThiZDk1ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4MzAzNzc3OX0.JQQ5Ldzt31QWdF2RypwfZ5K5O9Y5mfQHZLoI_hzmvEk"}`,
    }
})