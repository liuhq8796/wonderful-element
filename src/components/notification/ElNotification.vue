<script setup lang="ts">
const props = defineProps<{
    title: string
    message: string
    position: string
    verticalOffset: number
}>()

const verticalProperty = computed(()=>{
    return props.position.startsWith('top') ? 'top' : 'bottom'
})

const positionStyle = computed(()=>{
    return {
        [verticalProperty.value]: `${props.verticalOffset}px`
    }
})

defineExpose({
    verticalProperty
})
</script>

<template>
    <div class="el-notification" :style="positionStyle">
        <div class="el-notification__title">
            {{ title }}
        </div>

        <div class="el-notification__content">
            {{ message }}
        </div>
    </div>
</template>