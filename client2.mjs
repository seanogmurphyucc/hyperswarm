import DHT from '@hyperswarm/dht'
import b4a from 'b4a'

console.log('Connecting to:', process.argv[2])
const publicKey = DHT.keyPair(Buffer.alloc(32).fill('hyperswarm-server')).publicKey

const dht = new DHT()

const keyPair = DHT.keyPair()
console.log(keyPair.publicKey)

const conn = dht.connect(publicKey)
conn.once('open', () => console.log('got connection!'))

process.stdin.pipe(conn).pipe(process.stdout)