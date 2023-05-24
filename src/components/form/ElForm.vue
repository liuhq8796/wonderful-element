<script setup lang="ts">
defineOptions({
  name: 'ElForm'
})

import type { Rules } from 'async-validator'

const props = defineProps<{
  model: Record<string, any>
  rules?: Rules
}>()
</script>
