<script setup lang="ts">
import type { Rules } from 'async-validator';

const formModel = ref({
  name: 'John Doe',
  email: ''
})

const rules = ref<Rules>({
  name: {
    required: true,
    message: '请输入用户名',
  },
  email: {
    required: true,
    message: '请输入邮箱',
  }
})
</script>

<template>
  <main>
  <el-form :model="formModel" :rules="rules" ref="form">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="formModel.name"></el-input>
      <!-- <el-input :model-value="" @update:model-value=""></el-input> -->
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input type="textarea" v-model="formModel.email"></el-input>
    </el-form-item>
  </el-form>
  </main>
</template>
