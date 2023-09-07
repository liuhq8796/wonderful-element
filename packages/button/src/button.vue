<script setup lang="ts">
import { hello } from '@wonderful-element/shared';

const props = withDefaults(
    defineProps<{
        text?: string;
    }>(),
    {
        text: 'World',
    }
);

function clickHandler() {
    hello(props.text);
}
</script>

<template>
    <button
        class="w-button"
        @click="clickHandler"
    >
        <slot></slot>
    </button>
</template>

<style scoped lang="scss"></style>
