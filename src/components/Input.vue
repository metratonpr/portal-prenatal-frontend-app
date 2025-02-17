<template>
    <div class="input-wrapper">
        <label v-if="label" :for="id">{{ label }}</label>
        <input :id="id" :type="type" :placeholder="placeholder" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" :disabled="disabled"
            :class="['input', { 'input-disabled': disabled }]" />
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style scoped>
.input-wrapper {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 5px;
    font-weight: bold;
}

.input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    transition: border 0.3s ease;
}

.input:focus {
    border-color: #007bff;
    outline: none;
}

.input-disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
}
</style>
