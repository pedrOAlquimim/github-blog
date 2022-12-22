import moment from 'moment'

export function formatDistanceDate(date: string) {
  return moment(date).fromNow()
}
