const confFile = '/tmp/tezster/config.json',
      CONSEIL_JS = '../../lib/conseiljs',
      TESTNET_NAME = 'carthagenet',
      CONSEIL_SERVER_APIKEY = 'f979f858-1941-4c4b-b231-d40d41df5377',
      CONSEIL_SERVER_URL = 'https://conseil-dev.cryptonomic-infra.tech:443',
      IMAGE_TAG = 'tezsureinc/tezster:1.0.3-beta',
      CONTAINER_NAME = 'tezster',
      PROGRESS_REFRESH_INTERVAL = 1000,
      NODE_CONFIRMATION_TIMEOUT = 40000,
      NODE_CONFIRMATION_TIMEOUT_WIN = 125000,
      LOGS_ZIPFILE_NAME = 'tezster-node-logs.tar.gz',
      LOGS_ZIPFILE_PATH = '/tmp/tezster/tezster-logs/tezster-node-logs.tar.gz',
      COMMAND_LOGS_COLLECTION_FOLDER_PATH = '/tmp/tezster/tezster-logs/tezster-command-logs.log',
      LOG_FOLDER_PATH_INSIDE_DOCKER = '/usr/local/bin/tezster-logs',
      CONFIG_FILE_ABSOLUTE_PATH_INSIDE_NPM_PACKAGE = `__dirname, /../config.json`,
      TEMP_FOLDER = '/tmp/',
      TEZSTER_FOLDER_PATH_INSIDE_TEMP  = '/tmp/tezster',
      TEZSTER_LOGS_FOLDER_PATH_INSIDE_TEMP  = '/tmp/tezster/tezster-logs',
      COMMAND_LOG_FILE = '/tmp/tezster/tezster-logs/tezster-command-logs.log',
      LOCAL_NODE_URL = 'http://localhost:18731',
      START_NODES_PROGRESS_BAR_INTERVAL = 2.5,
      START_NODES_PROGRESS_BAR_INTERVAL_WIN = 0.80,
      WIN_PROCESS_PLATFORM = 'win32';
      

module.exports = { confFile, CONSEIL_JS, TESTNET_NAME, CONSEIL_SERVER_APIKEY, TEZSTER_LOGS_FOLDER_PATH_INSIDE_TEMP,
                   IMAGE_TAG, CONTAINER_NAME, LOCAL_NODE_URL, CONSEIL_SERVER_URL, COMMAND_LOG_FILE,
                   PROGRESS_REFRESH_INTERVAL, NODE_CONFIRMATION_TIMEOUT, TEZSTER_FOLDER_PATH_INSIDE_TEMP,
                   LOGS_ZIPFILE_PATH, LOG_FOLDER_PATH_INSIDE_DOCKER, LOGS_ZIPFILE_NAME, TEMP_FOLDER,
                   COMMAND_LOGS_COLLECTION_FOLDER_PATH, CONFIG_FILE_ABSOLUTE_PATH_INSIDE_NPM_PACKAGE, WIN_PROCESS_PLATFORM,
                   START_NODES_PROGRESS_BAR_INTERVAL, NODE_CONFIRMATION_TIMEOUT_WIN, START_NODES_PROGRESS_BAR_INTERVAL_WIN };