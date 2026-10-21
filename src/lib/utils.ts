import classnames, { type ArgumentArray } from 'classnames'

/**
 * Lightweight className joiner built on `classnames`.
 * Matches the `cn` helper convention used by shadcn-style components.
 */
export function cn(...inputs: ArgumentArray): string {
  return classnames(...inputs)
}
