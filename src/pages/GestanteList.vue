<template>
    <div class="container mt-4">
        <h2 class="mb-3">Lista de Gestantes</h2>
        <button class="btn btn-primary mb-3" @click="$router.push('/gestantes/novo')">
            + Nova Gestante
        </button>
        <table class="table table-bordered table-striped">
            <thead class="table-primary">
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
                        <button class="btn btn-info btn-sm me-2 text-white" @click="editarGestante(gestante.id)">
                            Editar
                        </button>
                        <button class="btn btn-danger btn-sm me-2 text-white" @click="excluirGestante(gestante.id)">
                            Excluir
                        </button>
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
            try {
                const response = await gestanteService.getAll();
                this.gestantes = response.data;
            } catch (error) {
                console.error('Erro ao buscar gestantes:', error);
            }
        },
        editarGestante(id) {
            this.$router.push(`/gestantes/${id}/editar`);
        },
        async excluirGestante(id) {
            if (confirm('Tem certeza que deseja excluir esta gestante?')) {
                try {
                    await gestanteService.delete(id);
                    this.fetchGestantes();
                } catch (error) {
                    console.error('Erro ao excluir gestante:', error);
                }
            }
        }
    }
};
</script>
