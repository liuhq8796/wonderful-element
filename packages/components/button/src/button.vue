<template>
  <button
    :class="[
      ns.b(),
      ns.m(type)
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { useNamespace } from '@liuhq8796/wonderful-element-hooks'

export type ButtonTypes = 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | ''

export interface ButtonProps {
  type?: ButtonTypes
}

defineOptions({
  name: 'WeButton',
})

withDefaults(defineProps<ButtonProps>(), {
  type: '',
})

const ns = useNamespace('button')
</script>

<style lang="scss">
$input-height: 32px;

.we-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    line-height: 1;
    height: $input-height;
    white-space: nowrap;
    cursor: pointer;
    color: var(--we-button-text-color);
    text-align: center;
    box-sizing: border-box;
    outline: none;
    transition: 0.1s;
    font-weight: var(--we-button-font-weight);
    user-select: none;
    vertical-align: middle;
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--we-button-bg-color);
    border: var(--we-border);
    border-color: var(--we-button-border-color);
    padding: 8px 15px;
    font-size: 14px;
    border-radius: 4px;

    & + & {
      margin-left: 12px;
    }
}

.we-button {
  --we-button-text-color: var(--we-text-color-regular);
  --we-button-font-weight: 500;
  --we-button-bg-color: var(--we-color-white);
  --we-button-border-color: #dcdfe6;

  &--primary {
    --we-button-bg-color: var(--we-color-primary);
    --we-button-text-color: var(--we-text-color-white)
  }
  &--success {
    --we-button-bg-color: var(--we-color-success);
    --we-button-text-color: var(--we-text-color-white)
  }
  &--info {
    --we-button-bg-color: var(--we-color-info);
    --we-button-text-color: var(--we-text-color-white)
  }
  &--warning {
    --we-button-bg-color: var(--we-color-warning);
    --we-button-text-color: var(--we-text-color-white)
  }
  &--danger {
    --we-button-bg-color: var(--we-color-danger);
    --we-button-text-color: var(--we-text-color-white)
  }
}

:root {
  // Color
  --we-color-white: #ffffff;
  --we-color-black: #000000;
  --we-color-primary: #409eff;
  --we-color-success: #67c23a;
  --we-color-warning: #e6a23c;
  --we-color-danger: #f56c6c;
  --we-color-error: #f56c6c;
  --we-color-info: #909399;
  --we-border: 1px solid #dcdfe6;
  --we-text-color-regular: #606266;
  --we-text-color-white: #ffffff;
}
</style>
