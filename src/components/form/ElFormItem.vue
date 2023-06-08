<script setup lang="ts">
import Schema from 'async-validator';
import { key, type FormItem } from './type';
import { emitter } from '@/emitter';

export interface FormItemProps {
    label?: string;
    prop?: string;
}

const props = withDefaults(defineProps<FormItemProps>(), {
    label: '',
    prop: ''
})

const error = ref("")

const formData = inject(key)

const o: FormItem = {
    validate,
}

defineExpose(o)

function validate() {
    if (formData?.rules === undefined) {
        return Promise.resolve({result: true})
    }

    const rules = formData.rules[props.prop]
    const value = formData.model[props.prop]
    const schema = new Schema({[props.prop]: rules})
    return schema.validate({[props.prop]: value}, (errors)=>{
        if (errors) {
            error.value = errors[0].message || '校验错误'
        } else {
            error.value = ''
        }
    })
}

onMounted(()=>{
    if (props.prop) {
        emitter.on("validate", () => {
            validate()
        })
        emitter.emit("addFormItem", o)
    }
})
</script>

<template>
    <div class="el-form-item">
        <label v-if="label">{{props.label}}</label>
        <slot />
        <p v-if="error" class="error">{{ error }}</p>
    </div>
</template>

<style lang="scss">
@import '@/styles/mixin.scss';

@include b(form-item) {
    margin-bottom: 22px;
    label {
        line-height: 1.2;
        margin-bottom: 5px;
        display: inline-block;
    }
    & .el-form-item {
        margin-bottom: 0;
    }
}
.error {
    color: red;
}
</style>