<template>
    <aside class="sidebar">
        <ul class="sidebar-links">
            <li>
                <router-link to="/">🏠 Home</router-link>
            </li>
            <li>
                <router-link to="/gestantes">🤰 Gestantes</router-link>
            </li>
            <li>
                <router-link to="/exames">🩺 Exames</router-link>
            </li>
            <li>
                <router-link to="/prescricoes">💊 Prescrições</router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
export default {
    name: 'Sidebar',
};
</script>

<style scoped>
.sidebar {
    width: 250px;
    height: 100vh;
    background-color: #007bff;
    color: white;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.sidebar-links {
    list-style: none;
    padding: 0;
}

.sidebar-links li {
    margin-bottom: 15px;
}

.sidebar-links a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 10px;
}

.sidebar-links a:hover {
    text-decoration: underline;
}
</style>
