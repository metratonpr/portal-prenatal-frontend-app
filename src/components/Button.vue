<template>
    <button :class="['btn', variant, size]" :disabled="disabled" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: 'btn-primary',
        },
        size: {
            type: String,
            default: 'btn-md',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped>
.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s ease;
}

.btn-primary {
    background-color: #007bff;
    color: white;
}

.btn-secondary {
    background-color: #6c757d;
    color: white;
}

.btn-danger {
    background-color: #dc3545;
    color: white;
}

.btn-md {
    font-size: 16px;
    padding: 10px 20px;
}

.btn-lg {
    font-size: 18px;
    padding: 12px 24px;
}

.btn-sm {
    font-size: 14px;
    padding: 8px 16px;
}

.btn:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>
