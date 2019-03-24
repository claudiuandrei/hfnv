# Hfnv

## FNV-1a 128bit hashing utility with no external dependencies

Hfnv is a functional FNV-1a 128bit hashing utility written in TypeScript. It runs in the browser, or on the server using node.js.

### Setup

```bash
yarn add hfnv
```

or

```bash
npm install --save hfnv
```

### Usage

Before you start import the functions from the library

```javascript
import { digest, hex, base64, base64Url, base36 } from 'hfnv'
```

#### Basic usage

```javascript
// Create random UUIDs
const hash = digest('qwerty')

// Create the output
hex(hash) // 24ac7f403a3c64bf6f48c2b048d6ae31
base64(hash) // JKx/QDo8ZL9vSMKwSNauMQ==
base64Url(hash) // JKx_QDo8ZL9vSMKwSNauMQ
base36(hash) // 265uihu41nkeln5blxxfzjb5d
```

## License

[MIT](LICENSE)
