import type { Labels } from '../valueObjects/labels'

export type AccountType = 'LDAP' | 'LOCAL'

export type Account = {
  id: string
  type: AccountType
  login: string
  password: string | null
  labels: Labels
}
