<template>
  <button class="we-button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'WeButton'
}
</script>

<style>
.we-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    line-height: 1;
    height: 32px;
    white-space: nowrap;
    cursor: pointer;
    color: #606266;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    transition: 0.1s;
    font-weight: 500;
    user-select: none;
    vertical-align: middle;
    -webkit-appearance: none;
    appearance: none;
    background-color: #ffffff;
    border: 1px solid #dcdfe6;
    border-color: #dcdfe6;
    padding: 8px 15px;
    font-size: 14px;
    border-radius: 4px;
}
</style>
