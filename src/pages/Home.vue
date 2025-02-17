<template>
    <div class="home-container">
        <h1>Bem-vindo ao Portal de Atendimento à Gestante</h1>
        <p>Gerencie gestantes, exames e prescrições médicas de forma eficiente.</p>
        <div class="navigation">
            <router-link to="/gestantes" class="nav-card">👩‍🍼 Gestantes</router-link>
            <router-link to="/exames" class="nav-card">🩺 Exames</router-link>
            <router-link to="/prescricoes" class="nav-card">💊 Prescrições</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
};
</script>

<style scoped>
.home-container {
    text-align: center;
    padding: 50px;
}

h1 {
    color: #007bff;
}

p {
    font-size: 18px;
    margin-bottom: 20px;
}

.navigation {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
}

.nav-card {
    display: inline-block;
    padding: 15px 30px;
    border-radius: 8px;
    text-decoration: none;
    color: white;
    font-size: 18px;
    background-color: #007bff;
    transition: background 0.3s;
}

.nav-card:hover {
    background-color: #0056b3;
}
</style>
