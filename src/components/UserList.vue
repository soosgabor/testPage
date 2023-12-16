<template>
    <div class="card">
        <div class="card-header text-center">
            <h3>Users</h3>
            <ul class="list-group list-group-flush">
                <li class="list-group-item list-group-item-action" v-for="user in users">{{ user.username }}</li>
            </ul>
        </div>
        <div class="card-footer">
            <button class="btn btn-outline-secondary btn-sm" v-if="actPage !== 1" @click="loadPrevious">&lt; previous</button>
            <button class="btn btn-outline-secondary btn-sm float-end" v-if="actPage < totalPages" @click="loadNext">next &gt;</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
const responseData = ref()
const users = ref([])
const actPage = ref(0)
const totalPages = ref(0)

onMounted(async () => {
    loadUsers(1, 3)
})

const loadNext = () => {
    loadUsers(actPage.value + 1, 3)
}

const loadPrevious = () => {
    loadUsers(actPage.value - 1, 3)
}

const loadUsers = async (page, limit) => {
    try {
        responseData.value = await axios.get('https://hoaxify-backend.onrender.com/api/users', {
            params: {
                page,
                limit
            }
        })
        if (responseData.value.status === 200) {
            users.value = responseData.value.data.content
            actPage.value = responseData.value.data.page
            totalPages.value = responseData.value.data.total_page
        }
        console.log(users.value);
    } catch (error) {
        console.log(error)
    }
}
</script>