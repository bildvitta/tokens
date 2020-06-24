import getCompanyByDomain from './getCompanyByDomain'

export default function (email) {
  return getCompanyByDomain(email.split('@')[1])
}
