import { getNetwork } from '@babbage/sdk-ts'

const acceptedNetwork =
  window.location.href.indexOf('local') !== -1 || window.location.href.indexOf('staging') !== -1
    ? 'testnet'
    : 'mainnet'

export default async function checkForMetaNetClient() {
  try {
    const result = await getNetwork()
    if (result === acceptedNetwork) {
      return 1
    } else {
      return -1
    }
  } catch (e) {
    return 0
  }
}
