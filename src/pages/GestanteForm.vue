<template>
    <div class="container mt-4">
        <h2 class="mb-3">{{ isEditing ? "Editar Gestante" : "Cadastrar Gestante" }}</h2>
        <div class="card">
            <div class="card-body">
                <form @submit.prevent="submitForm">
                    <div class="mb-3">
                        <label class="form-label">Nome</label>
                        <input v-model="gestante.nome" type="text" class="form-control" placeholder="Nome" required />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Data de Nascimento</label>
                        <input v-model="gestante.dataNascimento" type="date" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">CPF</label>
                        <input v-model="gestante.cpf" type="text" class="form-control" placeholder="CPF" required />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Telefone</label>
                        <input v-model="gestante.telefone" type="text" class="form-control" placeholder="Telefone"
                            required />
                    </div>
                    <button type="submit" class="btn btn-primary w-100">
                        {{ isEditing ? "Atualizar" : "Salvar" }}
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import gestanteService from '../services/gestanteService';

export default {
    data() {
        return {
            gestante: {
                nome: '',
                dataNascimento: '',
                cpf: '',
                telefone: ''
            },
            isEditing: false
        };
    },
    async created() {
        const id = this.$route.params.id;
        if (id) {
            this.isEditing = true;
            this.fetchGestante(id);
        }
    },
    methods: {
        async fetchGestante(id) {
            try {
                const response = await gestanteService.getById(id);
                this.gestante = response.data;
            } catch (error) {
                console.error('Erro ao buscar gestante:', error);
            }
        },
        async submitForm() {
            try {
                if (this.isEditing) {
                    await gestanteService.update(this.$route.params.id, this.gestante);
                    alert('Gestante atualizada com sucesso!');
                } else {
                    await gestanteService.create(this.gestante);
                    alert('Gestante cadastrada com sucesso!');
                }
                this.$router.push('/gestantes');
            } catch (error) {
                console.error('Erro ao salvar gestante:', error);
            }
        }
    }
};
</script>
