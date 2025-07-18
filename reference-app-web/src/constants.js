/** @fileoverview A collection of shared constants across modules. */

export const OmidPartnerName = 'Referenceapp';
export const OmidPartnerVersion = '0.0.0';

export const UniversalAdIdValue = 'CNPA0484000H';
export const UniversalAdIdRegistry = 'universal.id.org';

/**
  * Keys used to identify creative and measurement settings.
  * @const @enum {string}
  */
export const VerificationSettingsKeys = {
  ACCESS_MODE: 'accessMode',
  CONTENT_URL: 'contentUrl',
  MEDIA_URL: 'mediaUrl',
  OMSDK_URL: 'omsdkUrl',
  TEST_CASE_PAGE_NAME: 'testCasePageName',
  VENDOR_KEY: 'vendorKey',
  VERIFICATION_PARAMETERS: 'verificationParameters',
  VERIFICATION_SCRIPT_URL: 'verificationScriptUrl',
};

/**
 * Access modes in which to run verification scripts.
 * @const @enum {string}
 */
export const AccessMode = {
  LIMITED: 'limited',
  CREATIVE: 'creative',
  FULL: 'full',
};

/**
 * Keys used in post message data.
 * @const @enum {string}
 */
export const MessageKeys = {
  DATA: 'data',
  TYPE: 'type',
};

/**
 * Types of post messages.
 * @const @enum {string}
 */
export const MessageTypes = {
  CREATIVE_DID_INIT: 'creativeDidInit',
  LOAD_CREATIVE: 'loadCreative',
};

/**
 * Types of creative ad sessions.
 * @const @enum {string}
 */
export const CreativeType = {
  HTML_DISPLAY: 'htmlDisplay',
  VIDEO: 'video',
  AUDIO: 'audio',
};
