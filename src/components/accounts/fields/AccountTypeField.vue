<template>
  <v-select
    :items="types"
    label="Тип записи"
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>

<script lang="ts" setup>
  defineProps<{
    modelValue: 'LOCAL' | 'LDAP'
  }>()

  const emit = defineEmits<{
    (e: 'update:modelValue', value: 'LOCAL' | 'LDAP'): void
  }>()

  const types = ['LOCAL', 'LDAP']
</script>
