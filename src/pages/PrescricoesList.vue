<template>
    <div class="container mt-4">
        <h2 class="mb-3">Lista de Prescrições</h2>
        <button class="btn btn-primary mb-3" @click="$router.push('/prescricoes/novo')">
            <i class="bi bi-plus"></i> Nova Prescrição
        </button>
        <table class="table table-bordered table-striped">
            <thead class="table-primary">
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
                    <td>{{ prescricao.Gestante.nome }}</td>
                    <td>{{ prescricao.medicamento }}</td>
                    <td>{{ prescricao.dosagem }}</td>
                    <td>{{ prescricao.instrucoes }}</td>
                    <td>
                        <button class="btn btn-info btn-sm me-2 text-white" @click="editarPrescricao(prescricao.id)">
                            <i class="bi bi-pencil"></i> Editar
                        </button>
                        <button class="btn btn-danger btn-sm me-2 text-white" @click="excluirPrescricao(prescricao.id)">
                            <i class="bi bi-trash"></i> Excluir
                        </button>
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
            try {
                const response = await prescricaoService.getAll();
                this.prescricoes = response.data;
            } catch (error) {
                console.error('Erro ao buscar prescrições:', error);
            }
        },
        editarPrescricao(id) {
            this.$router.push(`/prescricoes/${id}/editar`);
        },
        async excluirPrescricao(id) {
            if (confirm('Tem certeza que deseja excluir esta prescrição?')) {
                try {
                    await prescricaoService.delete(id);
                    this.fetchPrescricoes();
                } catch (error) {
                    console.error('Erro ao excluir prescrição:', error);
                }
            }
        }
    }
};
</script>
