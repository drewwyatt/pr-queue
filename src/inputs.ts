import { getInput } from '@actions/core'

/**
 * The title of the new pull request.
 */
export const TITLE = getInput('title', { required: true })

/**
 * The contents of the pull request.
 */
export const BODY = getInput('body')

/**
 * A unique label that will be used to identify (and close) previous open pull requests created by this action.
 */
export const LABEL_ID = getInput('label-id', { required: true })

/**
 * The name of the branch where changes are implemented.
 */
export const FROM_BRANCH = getInput('from', { required: true })

/**
 * The name of the branch you want the changes pulled into.
 */
export const TARGET_BRANCH = getInput('onto', { required: true })
