
function helloMethod() {
    console.log('hello')
}


console.log(process.env)


exports.hello = helloMethod



/* 
`
{ TERM_PROGRAM: 'vscode',
  NVM_CD_FLAGS: '',
  TERM: 'xterm-256color',
  SHELL: '/bin/bash',
  TMPDIR: '/var/folders/br/dw2r38y95y90803_qzsc34pr0000gn/T/',
  Apple_PubSub_Socket_Render: '/private/tmp/com.apple.launchd.PoEYdfIm96/Render',
  TERM_PROGRAM_VERSION: '1.25.1',
  NVM_DIR: '/Users/wangzhichao/.nvm',
  USER: 'wangzhichao',
  SSH_AUTH_SOCK: '/private/tmp/com.apple.launchd.9xGXNaK1XU/Listeners',
  __CF_USER_TEXT_ENCODING: '0x1F5:0x19:0x34',
  PATH: '/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/wangzhichao/.nvm/versions/node/v8.11.1/bin',
  PWD: '/Users/wangzhichao/frontend_pra/node',
  
  LANG: 'zh_CN.UTF-8',
  XPC_FLAGS: '0x0',
  XPC_SERVICE_NAME: '0',
  SHLVL: '2',
  HOME: '/Users/wangzhichao',
  VSCODE_NLS_CONFIG: '{"locale":"zh-cn","availableLanguages":{"*":"zh-cn"},"_languagePackId":"b2a999fc509c8bbe09c27e781d92b27e.zh-cn","_translationsConfigFile":"/Users/wangzhichao/Library/Application Support/Code/clp/b2a999fc509c8bbe09c27e781d92b27e.zh-cn/tcf.json","_cacheRoot":"/Users/wangzhichao/Library/Application Support/Code/clp/b2a999fc509c8bbe09c27e781d92b27e.zh-cn","_resolvedLanguagePackCoreLocation":"/Users/wangzhichao/Library/Application Support/Code/clp/b2a999fc509c8bbe09c27e781d92b27e.zh-cn/1dfc5e557209371715f655691b1235b6b26a06be"}',
  LOGNAME: 'wangzhichao',
  VSCODE_IPC_HOOK: '/Users/wangzhichao/Library/Application Support/Code/1.25.1-main.sock',
  NVM_BIN: '/Users/wangzhichao/.nvm/versions/node/v8.11.1/bin',
  VSCODE_PID: '16137',
  VSCODE_NODE_CACHED_DATA_DIR_16137: '/Users/wangzhichao/Library/Application Support/Code/CachedData/1dfc5e557209371715f655691b1235b6b26a06be',
  _: '/Users/wangzhichao/.nvm/versions/node/v8.11.1/bin/node' }

  `

  */