<template>
    <div class="form-container">
        <h2>Cadastrar Exame</h2>
        <form @submit.prevent="submitForm">
            <label for="gestanteId">Gestante</label>
            <select v-model="exame.gestanteId" required>
                <option v-for="gestante in gestantes" :key="gestante.id" :value="gestante.id">
                    {{ gestante.nome }}
                </option>
            </select>

            <label for="tipo">Tipo de Exame</label>
            <input v-model="exame.tipo" type="text" required />

            <label for="dataRealizacao">Data de Realização</label>
            <input v-model="exame.dataRealizacao" type="date" required />

            <label for="resultado">Resultado</label>
            <textarea v-model="exame.resultado"></textarea>

            <button type="submit">Salvar</button>
        </form>
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
        async submitForm() {
            await exameService.create(this.exame);
            alert('Exame cadastrado com sucesso!');
            this.$router.push('/exames');
        }
    }
};
</script>

<style scoped>
.form-container {
    max-width: 500px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
}

label {
    display: block;
    margin-top: 10px;
    font-weight: bold;
}

input,
select,
textarea {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    margin-top: 15px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #0056b3;
}
</style>
