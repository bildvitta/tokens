import { companies } from './index'

export default function (domain) {
  for (const key in companies) {
    if (companies[key].domains.includes(domain)) { return companies[key] }
  }
}
