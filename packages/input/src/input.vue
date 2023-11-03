<script setup lang="ts">
import { hello } from '@wonderful-element/shared';

withDefaults(
    defineProps<{
        modelValue?: string;
    }>(),
    {
        modelValue: '',
    }
);

const emit = defineEmits<{
    'update:modelValue': [val: string];
}>();

function inputHandler(e: Event) {
    const value: string = (e.target as HTMLInputElement).value;
    emit('update:modelValue', value);
    hello(value);
}
</script>

<template>
    <input
        type="text"
        class="w-input"
        :value="modelValue"
        @input="inputHandler"
    />
</template>

<style scoped lang="scss"></style>
