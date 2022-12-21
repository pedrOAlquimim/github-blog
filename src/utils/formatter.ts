// import { formatDistance } from 'date-fns'

// export function FormatDistanceDate(date: string) {
//   const result = formatDistance(new Date(date), new Date(), {
//     addSuffix: true,
//   })

//   return result
// }

import moment from 'moment'

export function relativeDateFormatter(date: string) {
  return moment(date).fromNow()
}
