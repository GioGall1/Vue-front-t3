<template>
  <v-card class="mt-6 mb-3 pa-4">
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="localAccount.login"
          label="Логин"
          @blur="emitUpdate"
        />
      </v-col>

      <v-col cols="12" md="3">
        <v-select
          v-model="localAccount.type"
          :items="types"
          label="Тип записи"
          @update:model-value="emitUpdate"
        />
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field
          v-if="localAccount.type === 'LOCAL'"
          v-model="localAccount.password"
          label="Пароль"
          type="password"
          @blur="emitUpdate"
        />
      </v-col>

      <v-col class="d-flex align-center" cols="12" md="2">
        <v-btn color="error" @click="emitRemove">
          Удалить
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>
  import type { Account } from '@/domain/models/account'
  import { reactive, watch } from 'vue'

  const props = defineProps<{
    account: Account
  }>()

  const emit = defineEmits<{
    (e: 'update', account: Account): void
    (e: 'remove'): void
  }>()

  const types = ['LOCAL', 'LDAP']

  const localAccount = reactive({ ...props.account })

  watch(
    () => props.account,
    newAccount => {
      Object.assign(localAccount, newAccount)
    },
  )

  function emitUpdate () {
    emit('update', { ...localAccount })
  }

  function emitRemove () {
    emit('remove')
  }
</script>
