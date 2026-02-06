<template>
  <v-text-field
    label="Логин"
    :model-value="modelValue"
    @blur="emit('blur')"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>

<script lang="ts" setup>
  const props = defineProps<{
    modelValue: string
  }>()

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'blur'): void
  }>()
</script>
