<template>
    <div class="list-container">
        <h2>Lista de Prescrições</h2>
        <button @click="$router.push('/prescricoes/novo')">+ Nova Prescrição</button>
        <table>
            <thead>
                <tr>
                    <th>Gestante</th>
                    <th>Medicamento</th>
                    <th>Dosagem</th>
                    <th>Instruções</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="prescricao in prescricoes" :key="prescricao.id">
                    <td>{{ prescricao.gestanteNome }}</td>
                    <td>{{ prescricao.medicamento }}</td>
                    <td>{{ prescricao.dosagem }}</td>
                    <td>{{ prescricao.instrucoes }}</td>
                    <td>
                        <button @click="editarPrescricao(prescricao.id)">✏️ Editar</button>
                        <button @click="excluirPrescricao(prescricao.id)" class="delete">🗑 Excluir</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import prescricaoService from '../services/prescricaoService';

export default {
    data() {
        return {
            prescricoes: []
        };
    },
    async created() {
        this.fetchPrescricoes();
    },
    methods: {
        async fetchPrescricoes() {
            const response = await prescricaoService.getAll();
            this.prescricoes = response.data;
        },
        editarPrescricao(id) {
            this.$router.push(`/prescricoes/${id}/editar`);
        },
        async excluirPrescricao(id) {
            if (confirm('Tem certeza que deseja excluir esta prescrição?')) {
                await prescricaoService.delete(id);
                this.fetchPrescricoes();
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
