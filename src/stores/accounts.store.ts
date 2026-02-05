import type { Account } from '@/domain/models/account'
import { defineStore } from 'pinia'

import { ref } from 'vue'
import { validateAccount } from '@/domain/validators/account.validator'

export const useAccountsStore = defineStore('accounts', () => {
  const accounts = ref<Account[]>([])

  function addAccount (account: Account) {
    const validation = validateAccount(account)

    if (!validation.valid) {
      return validation
    }

    accounts.value.push(account)
    return validation
  }

  function updateAccount (account: Account) {
    const validation = validateAccount(account)

    if (!validation.valid) {
      return validation
    }

    const index = accounts.value.findIndex(a => a.id === account.id)

    if (index !== -1) {
      accounts.value[index] = account
    }

    return validation
  }

  function removeAccount (accountId: string) {
    accounts.value = accounts.value.filter(a => a.id !== accountId)
  }

  return {
    accounts,
    addAccount,
    updateAccount,
    removeAccount,
  }
})
