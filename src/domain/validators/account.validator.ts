import type { Account } from '../models/account'

export type ValidationResult = {
  valid: boolean
  errors: Record<string, string>
}

export function validateAccount (_account: Account): ValidationResult {
  return {
    valid: true,
    errors: {},
  }
}
