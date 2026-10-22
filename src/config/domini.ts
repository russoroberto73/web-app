type Area = 'app' | 'admin' | 'parlino' | 'test'

export function getDomainArea() {
  const hostname = window.location.hostname
  let area: Area = 'app'
  switch (hostname) {
    case 'admin.russoroberto73.it':
      area = 'admin'
      break
    case 'parlino.russoroberto73.it':
      area = 'parlino'
      break
    case 'test.russoroberto73.it':
      area = 'test'
      break
    default:
      area = 'app'
      break
  }

  return area
}
