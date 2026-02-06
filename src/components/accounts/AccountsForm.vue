<template>
  <v-container>
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
  import { useAccountsStore } from '@/stores/accounts.store'
  import AccountList from './AccountList.vue'

  const store = useAccountsStore()
  const accounts = store.accounts

  function onAdd () {
    store.addAccount({
      id: crypto.randomUUID(),
      type: 'LOCAL',
      login: '',
      password: '',
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
