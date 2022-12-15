import { formatDistance } from 'date-fns'
import br from 'date-fns/locale/pt-BR'

export function FormatDistanceDate(date: string) {
  const result = formatDistance(new Date(date), new Date(), {
    locale: br,
  })

  return result
}
