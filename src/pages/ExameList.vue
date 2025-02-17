<template>
    <div class="container mt-4">
        <h2 class="mb-3">Lista de Exames</h2>
        <button class="btn btn-primary mb-3" @click="$router.push('/exames/novo')">
            <i class="bi bi-plus"></i> Novo Exame
        </button>
        <table class="table table-bordered table-striped">
            <thead class="table-primary">
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
                    <td>{{ exame.Gestante.nome }}</td>
                    <td>{{ exame.tipo }}</td>
                    <td>{{ exame.dataRealizacao }}</td>
                    <td>{{ exame.resultado }}</td>
                    <td>
                        <button class="btn btn-info btn-sm me-2 text-white" @click="editarExame(exame.id)">
                            <i class="bi bi-pencil"></i> Editar
                        </button>
                        <button class="btn btn-danger btn-sm me-2 text-white" @click="excluirExame(exame.id)">
                            <i class="bi bi-trash"></i> Excluir
                        </button>
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
            try {
                const response = await exameService.getAll();
                this.exames = response.data;
            } catch (error) {
                console.error('Erro ao buscar exames:', error);
            }
        },
        editarExame(id) {
            this.$router.push(`/exames/${id}/editar`);
        },
        async excluirExame(id) {
            if (confirm('Tem certeza que deseja excluir este exame?')) {
                try {
                    await exameService.delete(id);
                    this.fetchExames();
                } catch (error) {
                    console.error('Erro ao excluir exame:', error);
                }
            }
        }
    }
};
</script>
