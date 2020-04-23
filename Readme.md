# AB-OPR

### Spike project

Prototype (v0.7) - Features - Browser and Mobile app to register digital signatures to a blockchain based backend

- User can register
- User can see a list of digital signatures
- User can register a new digital signatures
- Admin can see a list of all digital signatures


### Directory structure:


- `api` - koa api
- `api/opr` - lower level JS library - takes a digital signature and saves it to the blockchain
- `browser` - react app
- `mobile` - react app wrapped into a fullscreen mobile webview
- `stack/blockchain` - blockchain testnet / one mainne mainnet node / load balanced blockchain node
