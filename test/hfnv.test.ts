import { digest, hex, base64, base64Url, base36 } from '../src/hfnv'

describe('FNV1a', () => {
  // Valid UUID should pass the check
  test('Hashes are consistent', () => {
    // Check the valid uuid
    const s = String.fromCharCode(100, 1000, 10000)
    const u1 = hex(digest(s))
    const u2 = hex(digest(s))

    // Expect rules
    expect(u1).toEqual(u2)
  })

  // Valid UUID should pass the check
  test('Hex output matches standard', () => {
    // Check the valid uuid
    const s = 'qwerty'
    const u1 = hex(digest(s))

    // Expect rules
    expect(u1).toEqual('24ac7f403a3c64bf6f48c2b048d6ae31')
  })

  // Valid UUID should pass the check
  test('Base64 output matches standard', () => {
    // Check the valid uuid
    const s = 'qwerty'
    const u1 = base64(digest(s))

    // Expect rules
    expect(u1).toEqual('JKx/QDo8ZL9vSMKwSNauMQ==')
  })

  // Valid UUID should pass the check
  test('Base64Url output matches standard', () => {
    // Check the valid uuid
    const s = 'qwerty'
    const u1 = base64Url(digest(s))

    // Expect rules
    expect(u1).toEqual('JKx_QDo8ZL9vSMKwSNauMQ')
  })

  // Valid UUID should pass the check
  test('Base36 output matches standard', () => {
    // Check the valid uuid
    const s = 'qwerty'
    const u1 = base36(digest(s))

    // Expect rules
    expect(u1).toEqual('265uihu41nkeln5blxxfzjb5d')
  })
})
