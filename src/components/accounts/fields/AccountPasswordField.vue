<template>
  <v-text-field
    v-if="visible"
    label="Пароль"
    :model-value="modelValue"
    type="password"
    @blur="emit('blur')"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>

<script lang="ts" setup>
  defineProps<{
    modelValue: string | null
    visible: boolean
  }>()

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string | null): void
    (e: 'blur'): void
  }>()
</script>
