<template>
    <div class="container mt-4">
        <h2 class="mb-3">{{ isEditing ? "Editar Exame" : "Cadastrar Exame" }}</h2>
        <div class="card">
            <div class="card-body">
                <form @submit.prevent="submitForm">
                    <div class="mb-3">
                        <label class="form-label">Gestante</label>
                        <select class="form-select" v-model="exame.gestanteId" required>
                            <option v-for="gestante in gestantes" :key="gestante.id" :value="gestante.id">
                                {{ gestante.nome }}
                            </option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Tipo de Exame</label>
                        <input class="form-control" v-model="exame.tipo" type="text" required />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Data de Realização</label>
                        <input class="form-control" v-model="exame.dataRealizacao" type="date" required />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Resultado</label>
                        <textarea class="form-control" v-model="exame.resultado" rows="3"></textarea>
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
import exameService from '../services/exameService';
import gestanteService from '../services/gestanteService';

export default {
    data() {
        return {
            exame: {
                gestanteId: '',
                tipo: '',
                dataRealizacao: '',
                resultado: ''
            },
            gestantes: [],
            isEditing: false
        };
    },
    async created() {
        await this.fetchGestantes();
        const id = this.$route.params.id;
        if (id) {
            this.isEditing = true;
            await this.fetchExame(id);
        }
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
        async fetchExame(id) {
            try {
                const response = await exameService.getById(id);
                this.exame = response.data;
            } catch (error) {
                console.error('Erro ao buscar exame:', error);
            }
        },
        async submitForm() {
            try {
                if (this.isEditing) {
                    await exameService.update(this.$route.params.id, this.exame);
                    alert('Exame atualizado com sucesso!');
                } else {
                    await exameService.create(this.exame);
                    alert('Exame cadastrado com sucesso!');
                }
                this.$router.push('/exames');
            } catch (error) {
                console.error('Erro ao salvar exame:', error);
            }
        }
    }
};
</script>
