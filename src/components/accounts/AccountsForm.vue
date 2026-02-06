<template>
  <v-container class="mt-4">
    <v-row align="center" justify="space-between">
      <h2>Учетные записи</h2>
      <v-btn color="primary" @click="onAdd">
        +
      </v-btn>
    </v-row>

    <AccountList
      :accounts="accounts"
      @remove="onRemove"
      @update="onUpdate"
    />
  </v-container>
</template>

<script lang="ts" setup>
  import type { Account } from '@/domain/models/account'
  import { storeToRefs } from 'pinia'
  import { useAccountsStore } from '@/stores/accounts.store'
  import AccountList from './AccountList.vue'

  const store = useAccountsStore()
  const { accounts } = storeToRefs(store)

  function onAdd () {
    store.addAccount({
      id: crypto.randomUUID(),
      type: 'LOCAL',
      login: 'test',
      password: '123',
      labels: [],
    })
  }

  function onUpdate (account: Account) {
    store.updateAccount(account)
  }

  function onRemove (id: string) {
    store.removeAccount(id)
  }
</script>
