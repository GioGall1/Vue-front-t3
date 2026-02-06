import type { Account } from '@/domain/models/account'
import { defineStore } from 'pinia'

import { ref, watch } from 'vue'
import { validateAccount } from '@/domain/validators/account.validator'

const STORAGE_KEY = 'accounts'

function loadFromStorage (): Account[] {
  const raw = localStorage.getItem(STORAGE_KEY)

  if (!raw) {
    return []
  }

  try {
    return JSON.parse(raw) as Account[]
  } catch {
    return []
  }
}

export const useAccountsStore = defineStore('accounts', () => {
  const accounts = ref<Account[]>(loadFromStorage())

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

  watch(
    accounts,
    value => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    },
    { deep: true },
  )

  return {
    accounts,
    addAccount,
    updateAccount,
    removeAccount,
  }
})
