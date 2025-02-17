<template>
    <div class="list-container">
        <h2>Lista de Gestantes</h2>
        <button @click="$router.push('/gestantes/novo')">+ Nova Gestante</button>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Data de Nascimento</th>
                    <th>CPF</th>
                    <th>Telefone</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="gestante in gestantes" :key="gestante.id">
                    <td>{{ gestante.nome }}</td>
                    <td>{{ gestante.dataNascimento }}</td>
                    <td>{{ gestante.cpf }}</td>
                    <td>{{ gestante.telefone }}</td>
                    <td>
                        <button @click="editarGestante(gestante.id)">✏️ Editar</button>
                        <button @click="excluirGestante(gestante.id)" class="delete">🗑 Excluir</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import gestanteService from '../services/gestanteService';

export default {
    data() {
        return {
            gestantes: []
        };
    },
    async created() {
        this.fetchGestantes();
    },
    methods: {
        async fetchGestantes() {
            const response = await gestanteService.getAll();
            this.gestantes = response.data;
        },
        editarGestante(id) {
            this.$router.push(`/gestantes/${id}/editar`);
        },
        async excluirGestante(id) {
            if (confirm('Tem certeza que deseja excluir esta gestante?')) {
                await gestanteService.delete(id);
                this.fetchGestantes();
            }
        }
    }
};
</script>

<style scoped>
.list-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
}

button {
    margin: 5px;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
}

button.delete {
    background-color: #dc3545;
    color: white;
}

button:hover {
    opacity: 0.8;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

thead {
    background-color: #007bff;
    color: white;
}

th,
td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
}
</style>
