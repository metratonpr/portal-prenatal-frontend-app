<template>
    <nav class="navbar">
        <div class="logo">Portal Gestante</div>
        <ul class="nav-links">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/gestantes">Gestantes</router-link>
            </li>
            <li>
                <router-link to="/exames">Exames</router-link>
            </li>
            <li>
                <router-link to="/prescricoes">Prescrições</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
};
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background-color: #007bff;
    color: white;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
}

.nav-links li {
    display: inline;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
}

.nav-links a:hover {
    text-decoration: underline;
}
</style>
