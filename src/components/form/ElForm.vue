<script setup lang="ts">
import type { Rules } from 'async-validator';
import { key, type FormItem } from './type';
import { emitter } from '@/emitter';

defineOptions({
  name: 'ElForm'
})

const props = defineProps<{
  model: Record<string, any>;
  rules: Rules
}>()

provide(key, {
  model: props.model,
  rules: props.rules
})

const items = ref<FormItem[]>([])

emitter.on("addFormItem", (item: FormItem) => {
  items.value.push(item)
})

function validate(cb: (isValid: boolean) => void) {
  const tasks = items.value.map(item => item.validate())
  Promise.all(tasks).then(()=>{cb(true)}).catch(()=>{cb(false)})
}

defineExpose({
  validate,
})
</script>

<template>
  <div class="el-form">
    <slot />
  </div>
</template>

<style lang="scss">
@import '@/styles/mixin.scss';

@include b(form) {
  margin-top: 20px;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 300px;
}
</style>
