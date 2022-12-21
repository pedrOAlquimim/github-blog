import { formatDistanceToNow } from 'date-fns'
import br from 'date-fns/locale/pt-BR'

export function formatDistanceDate(date: string) {
  const result = formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: br,
  })

  return result
}

// import moment from 'moment'

// export function relativeDateFormatter(date: string) {
//   return moment(date).fromNow()
// }
