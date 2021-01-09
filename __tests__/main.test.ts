import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_TITLE'] = 'Release Candidate'
  process.env['INPUT_BODY'] = 'This is a nightly release candidate for some app'
  process.env['INPUT_LABEL-ID'] = 'app-name-rc'
  process.env['INPUT_FROM'] = 'main'
  process.env['INPUT_ONTO'] = 'production'
  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env,
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
})
