const fs = require('fs')
const path = require('path')
const http = require('http')

const filePath = process.argv[2] || path.join(__dirname, 'public', 'test.png')
const boundary = '----FormBoundary' + Math.random().toString(36).slice(2)

const fileData = fs.readFileSync(filePath)
const payload = Buffer.concat([
  Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="image"; filename="test.png"\r\nContent-Type: image/png\r\n\r\n`),
  fileData,
  Buffer.from(`\r\n--${boundary}--\r\n`),
])

const req = http.request(
  {
    hostname: 'localhost',
    port: 3000,
    path: '/api/pets/generate',
    method: 'POST',
    headers: {
      'Content-Type': `multipart/form-data; boundary=${boundary}`,
      'Content-Length': payload.length,
    },
  },
  (res) => {
    let data = ''
    res.on('data', (chunk) => (data += chunk))
    res.on('end', () => {
      console.log('HTTP', res.statusCode)
      try {
        console.log(JSON.stringify(JSON.parse(data), null, 2))
      } catch {
        console.log(data.slice(0, 500))
      }
    })
  }
)

req.on('error', (err) => {
  console.error('Request error:', err.message)
})

req.write(payload)
req.end()
