module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '66e8f253db3143cbab546f96a61bfa2c',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Swiftly Singh',
  domain: 'swiftlysingh.com',
  author: 'Pushpinder Pal Singh',

  // open graph metadata (optional)
  description: 'I am a Software Developer, trying to find my purpose on this beautiful big blue ball',
  socialImageTitle: 'SwiftlySingh',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'swiftlysingh',
  github: 'swiftlysingh',
  linkedin: 'pushpinderpalsingh',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
