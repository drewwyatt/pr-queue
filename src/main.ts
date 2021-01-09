import * as core from '@actions/core'
import { TITLE, BODY, LABEL_ID, FROM_BRANCH, TARGET_BRANCH } from './inputs'

async function run(): Promise<void> {
  try {
    core.debug('PR-QUEUE')
    core.debug('listing inputs...')
    core.debug(`TITLE: ${TITLE}`)
    core.debug(`BODY: ${BODY}`)
    core.debug(`LABEL_ID: ${LABEL_ID}`)
    core.debug(`FROM_BRANCH: ${FROM_BRANCH}`)
    core.debug(`TARGET_BRANCH: ${TARGET_BRANCH}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
