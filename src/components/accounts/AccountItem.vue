<template>
  <v-card class="mt-6 mb-3 pa-4">
    <v-row>
      <v-col cols="12" md="4">
        <AccountLoginField
          v-model="localAccount.login"
          @blur="emitUpdate"
        />
      </v-col>

      <v-col cols="12" md="3">
        <AccountTypeField
          v-model="localAccount.type"
          :items="types"
          @update:model-value="onTypeChange"
        />
      </v-col>

      <v-col cols="12" md="3">
        <AccountPasswordField
          v-model="localAccount.password"
          :visible="localAccount.type === 'LOCAL'"
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

  import AccountLoginField from './fields/AccountLoginField.vue'
  import AccountPasswordField from './fields/AccountPasswordField.vue'
  import AccountTypeField from './fields/AccountTypeField.vue'

  const props = defineProps<{
    account: Account
  }>()

  const emit = defineEmits<{
    (e: 'update', account: Account): void
    (e: 'remove'): void
  }>()

  const types = ['LOCAL', 'LDAP']

  const localAccount = reactive({ ...props.account })

  function emitUpdate () {
    emit('update', { ...localAccount })
  }

  function onTypeChange (type: Account['type']) {
    localAccount.type = type
    if (type === 'LDAP') {
      localAccount.password = null
    }
    emitUpdate()
  }

  function emitRemove () {
    emit('remove')
  }
</script>
