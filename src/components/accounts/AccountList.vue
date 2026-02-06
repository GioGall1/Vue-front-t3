<template>
  <div>
    <AccountItem
      v-for="account in accounts"
      :key="account.id"
      :account="account"
      @remove="$emit('remove', account.id)"
      @update="$emit('update', $event)"
    />
  </div>
</template>

<script lang="ts" setup>
  import type { Account } from '@/domain/models/account'
  import AccountItem from './AccountItem.vue'

  defineProps<{
    accounts: Account[]
  }>()

  defineEmits(['update', 'remove'])
</script>
