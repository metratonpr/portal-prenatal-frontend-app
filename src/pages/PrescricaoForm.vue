<template>
    <div class="container mt-4">
        <h2 class="mb-3">{{ isEditing ? "Editar Prescrição" : "Cadastrar Prescrição" }}</h2>
        <div class="card">
            <div class="card-body">
                <form @submit.prevent="submitForm">
                    <div class="mb-3">
                        <label class="form-label">Gestante</label>
                        <select class="form-select" v-model="prescricao.gestanteId" required>
                            <option v-for="gestante in gestantes" :key="gestante.id" :value="gestante.id">
                                {{ gestante.nome }}
                            </option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Medicamento</label>
                        <input class="form-control" v-model="prescricao.medicamento" type="text" required />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Dosagem</label>
                        <input class="form-control" v-model="prescricao.dosagem" type="text" required />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Instruções</label>
                        <textarea class="form-control" v-model="prescricao.instrucoes" rows="3"></textarea>
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
import prescricaoService from '../services/prescricaoService';
import gestanteService from '../services/gestanteService';

export default {
    data() {
        return {
            prescricao: {
                gestanteId: '',
                medicamento: '',
                dosagem: '',
                instrucoes: ''
            },
            gestantes: [],
            isEditing: false
        };
    },
    async created() {
        try {
            await this.fetchGestantes();
            const id = this.$route.params.id;
            if (id) {
                this.isEditing = true;
                await this.fetchPrescricao(id);
            }
        } catch (error) {
            console.error('Erro ao carregar os dados iniciais:', error);
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
        async fetchPrescricao(id) {
            try {
                const response = await prescricaoService.getById(id);
                if (response.data) {
                    this.prescricao = response.data;
                } else {
                    console.warn('Prescrição não encontrada.');
                }
            } catch (error) {
                console.error('Erro ao buscar prescrição:', error);
            }
        },
        async submitForm() {
            try {
                if (this.isEditing) {
                    await prescricaoService.update(this.$route.params.id, this.prescricao);
                    alert('Prescrição atualizada com sucesso!');
                } else {
                    await prescricaoService.create(this.prescricao);
                    alert('Prescrição cadastrada com sucesso!');
                }
                this.$router.push('/prescricoes');
            } catch (error) {
                console.error('Erro ao salvar prescrição:', error);
            }
        }
    }
};
</script>
