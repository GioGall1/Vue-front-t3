import type { Account } from '../models/account'

export type ValidationResult = {
  valid: boolean
  errors: Record<string, string>
}

export function validateAccount (account: Account): ValidationResult {
  const errors: Record<string, string> = {}

  if (!account.login) {
    errors.login = 'Требуется авторизация.'
  }
  if (account.type === 'LOCAL' && !account.password) {
    errors.password = 'Для доступа к учетной записи требуется пароль.'
  }
  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}
