<template>
    <div class="list-container">
        <h2>Lista de Exames</h2>
        <button @click="$router.push('/exames/novo')">+ Novo Exame</button>
        <table>
            <thead>
                <tr>
                    <th>Gestante</th>
                    <th>Tipo</th>
                    <th>Data</th>
                    <th>Resultado</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="exame in exames" :key="exame.id">
                    <td>{{ exame.gestanteNome }}</td>
                    <td>{{ exame.tipo }}</td>
                    <td>{{ exame.dataRealizacao }}</td>
                    <td>{{ exame.resultado }}</td>
                    <td>
                        <button @click="editarExame(exame.id)">✏️ Editar</button>
                        <button @click="excluirExame(exame.id)" class="delete">🗑 Excluir</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import exameService from '../services/exameService';

export default {
    data() {
        return {
            exames: []
        };
    },
    async created() {
        this.fetchExames();
    },
    methods: {
        async fetchExames() {
            const response = await exameService.getAll();
            this.exames = response.data;
        },
        editarExame(id) {
            this.$router.push(`/exames/${id}/editar`);
        },
        async excluirExame(id) {
            if (confirm('Tem certeza que deseja excluir este exame?')) {
                await exameService.delete(id);
                this.fetchExames();
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
