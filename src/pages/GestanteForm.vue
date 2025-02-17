<template>
    <div>
        <h2>Cadastrar Gestante</h2>
        <form @submit.prevent="submitForm">
            <input v-model="gestante.nome" placeholder="Nome" required />
            <input v-model="gestante.dataNascimento" type="date" required />
            <input v-model="gestante.cpf" placeholder="CPF" required />
            <button type="submit">Salvar</button>
        </form>
    </div>
</template>

<script>
import gestanteService from '../services/gestanteService';

export default {
    data() {
        return { gestante: { nome: '', dataNascimento: '', cpf: '' } };
    },
    methods: {
        async submitForm() {
            await gestanteService.create(this.gestante);
            alert('Gestante cadastrada!');
        }
    }
};
</script>
