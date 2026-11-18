// ==UserScript==
// @name         GitHub - Dim notifications for done items
// @namespace    https://github.com/mokagio/userscripts
// @description  Tint merged and closed rows in the GitHub notifications inbox, in light mode only
// @version      1.0.0
// @author       mokagio
// @license      MIT
// @match        https://github.com/notifications*
// @grant        GM_addStyle
// @downloadURL  https://raw.githubusercontent.com/mokagio/userscripts/main/github-notifications-tint.user.js
// @updateURL    https://raw.githubusercontent.com/mokagio/userscripts/main/github-notifications-tint.user.js
// ==/UserScript==

const row = mode => `html[data-color-mode="${mode}"] .notifications-list-item:has(
  .octicon-git-merge, .octicon-git-pull-request-closed, .octicon-issue-closed, .octicon-skip)`;

const tint = mode => `
  ${row(mode)} { background: #fbefff !important; }
  ${row(mode)}:hover { background: #f5e6ff !important; }
`;

GM_addStyle(`
  ${tint('light')}
  @media (prefers-color-scheme: light) { ${tint('auto')} }
`);
