<template>
    <div class="input-wrapper">
        <label v-if="label" :for="id" class="form-label">{{ label }}</label>
        <input :id="id" :type="type" :placeholder="placeholder" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" :disabled="disabled"
            :class="['form-control', { 'form-control-disabled': disabled }]" />
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
    margin-bottom: 1rem;
}

.form-label {
    margin-bottom: 0.5rem;
    font-weight: 500;
    font-size: 0.875rem;
    color: #212529;
}

.form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.form-control-disabled {
    background-color: #e9ecef;
    opacity: 1;
    cursor: not-allowed;
}

.form-control::placeholder {
    color: #6c757d;
    opacity: 1;
}
</style>
