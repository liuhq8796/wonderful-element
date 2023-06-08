<script setup lang="ts">
import { emitter } from '@/emitter';

defineProps<{
    modelValue: string;
}>()

const emit = defineEmits<{
    (e: "update:modelValue", value: string): void;
}>()

function onInput(e: Event) {
    const target = e.target as HTMLInputElement
    const value = target.value
    emit("update:modelValue", value)
    emitter.emit("validate")
}
</script>

<template>
    <div>
        <input :value="modelValue" class="el-input--inner" @input="onInput">
    </div>
</template>

<style lang="scss">
@import '@/styles/mixin';
@include b(input) {

  @include m(inner){
   -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }

}

</style>