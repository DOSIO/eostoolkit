const networksConfig = [
  {
    "name": "SMG Mainnet",
    "description": "SMG Mainnet",
    "owner": "SMG Mainnet",
    "chainId": "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f",
    "type": "SMG mainnet",
    "prefix":"EOS",
    "network": "eos",
    "endpoints": [
      {
        "name": "SMG mainnet",
        "protocol": "http",
        "port": 8888,
        "url": "47.107.41.135",
        "description": "EOS BlockSmith SMG Mainnet API"
      }
    ]
  },
  {
    "name": "EOS Mainnet",
    "description": "The EOS Mainnet",
    "owner": "The EOS community",
    "chainId": "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
    "type": "mainnet",
    "prefix":"EOS",
    "network": "eos",
    "endpoints": [
      {
        "name": "EOS BlockSmith",
        "protocol": "https",
        "port": 443,
        "url": "eos-mainnet.eosblocksmith.io",
        "description": "EOS BlockSmith EOS Mainnet API"
      },
      {
        "name": "franceos",
        "protocol": "https",
        "port": 443,
        "url": "api.franceos.fr",
        "description": "API Node"
      },
      {
        "name": "EOS API PROXY",
        "protocol": "https",
        "port": 443,
        "url": "proxy.eosnode.tools",
        "description": "API Node"
      },
      {
        "name": "EOS Nation",
        "protocol": "https",
        "port": 443,
        "url": "api.eosn.io",
        "description": "API Node"
      },
      {
        "name": "EOS New York",
        "protocol": "https",
        "port": 443,
        "url": "api.eosnewyork.io",
        "description": "API Node"
      },
      {
        "name": "Greymass",
        "protocol": "https",
        "port": 443,
        "url": "eos.greymass.com",
        "description": "API Node"
      },
      {
        "name": "Cypherglass",
        "protocol": "https",
        "port": 443,
        "url": "api.cypherglass.com",
        "description": "API Node"
      },
      {
        "name": "GenerEOS",
        "protocol": "https",
        "port": 443,
        "url": "mainnet.genereos.io",
        "description": "Public node provided by GenerEOS"
      },
      {
        "name": "Scatter Load Balancer",
        "protocol": "https",
        "port": 443,
        "url": "nodes.get-scatter.com",
        "description": "Load balancer of various public nodes provided by scatter"
      }
    ]
  },
  {
    "name": "Jungle Testnet v2",
    "description": "Welcome to the Jungle",
    "owner": "cryptolions",
    "chainId": "e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473",
    "type": "testnet",
    "prefix":"EOS",
    "network": "eos",
    "endpoints": [
      {
        "name": "EOS BlockSmith",
        "protocol": "https",
        "port": 443,
        "url": "eos-jungle.eosblocksmith.io",
        "description": "EOS BlockSmith Jungle Testnet v2 API"
      },
      {
        "name": "Aloha EOS",
        "protocol": "https",
        "port": 443,
        "url": "api.jungle.alohaeos.com",
        "description": "Public node provided by Aloha EOS"
      },
      {
        "name": "EOS Costa Rica",
        "protocol": "https",
        "port": 443,
        "url": "jungle.eosio.cr",
        "description": "Public node provided by EOS Costa Rica"
      },
      {
        "name": "EOSMetal",
        "protocol": "https",
        "port": 443,
        "url": "junglenodes.eosmetal.io",
        "description": "HA Proxy node provided by EOSMetal"
      }
    ]
  },
  {
    "name": "Kylin Testnet",
    "description": "CryptoKylin Testnet",
    "owner": "CryptoKylin",
    "chainId": "5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191",
    "type": "testnet",
    "prefix":"EOS",
    "network": "eos",
    "endpoints": [
      {
        "name": "Aloha EOS",
        "protocol": "https",
        "port": 443,
        "url": "api.kylin.alohaeos.com",
        "description": "Public node provided by Aloha EOS"
      },
      {
        "name": "eospace",
        "protocol": "https",
        "port": 443,
        "url": "api.kylin-testnet.eospace.io",
        "description": "HTTPS API"
      },
      {
        "name": "eosasia",
        "protocol": "https",
        "port": 443,
        "url": "api-kylin.eosasia.one",
        "description": "HTTPS API"
      },
      {
        "name": "eoslaomao",
        "protocol": "https",
        "port": 443,
        "url": "api-kylin.eoslaomao.com",
        "description": "HTTPS API"
      }
    ]
  },
  {
    "name": "WORBLI Testnet",
    "description": "WORBLI Testnet",
    "owner": "WORBLI",
    "chainId": "0d1ba39b44e70e9c36b74d60677ef3b686bd4347ade092b816886a6a35ddb6f7",
    "type": "testnet",
    "prefix":"WBI",
    "network": "worbli",
    "endpoints": [
      {
        "name": "EOS BlockSmith",
        "protocol": "https",
        "port": 443,
        "url": "worbli-testnet.eosblocksmith.io",
        "description": "EOS BlockSmith Worbli Testnet API"
      },
      {
        "name": "EOSphere",
        "protocol": "https",
        "port": 443,
        "url": "worbli-testnet.eosphere.io",
        "description": "HTTPS API"
      }
    ]
  },
  {
    "name": "WORBLI Mainnet",
    "description": "WORBLI Mainnet",
    "owner": "WORBLI",
    "chainId": "73647cde120091e0a4b85bced2f3cfdb3041e266cbbe95cee59b73235a1b3b6f",
    "type": "mainnet",
    "prefix":"WBI",
    "network": "worbli",
    "endpoints": [
      {
        "name": "EOS BlockSmith",
        "protocol": "https",
        "port": 443,
        "url": "worbli-mainnet.eosblocksmith.io",
        "description": "EOS BlockSmith Worbli Mainnet API"
      },
      {
        "name": "Worbli",
        "protocol": "https",
        "port": 443,
        "url": "api.worbli.io",
        "description": "HTTPS API"
      }
    ]
  },
  {
    "name": "TELOS Testnet",
    "description": "TELOS Testnet",
    "owner": "TELOS",
    "chainId": "e17615decaecd202a365f4c029f206eee98511979de8a5756317e2469f2289e3",
    "type": "testnet",
    "prefix":"TLOS",
    "network": "telos",
    "endpoints": [
      {
        "name": "EOS BlockSmith",
        "protocol": "https",
        "port": 443,
        "url": "telos-testnet.eosblocksmith.io",
        "description": "EOS BlockSmith Telos Testnet API"
      },
      {
        "name": "EOS Miami",
        "protocol": "https",
        "port": 17441,
        "url": "api.eos.miami",
        "description": "HTTPS API"
      },
      {
        "name": "CalEOS",
        "protocol": "https",
        "port": 443,
        "url": "testnet.telos.caleos.io",
        "description": "Public node provided by CalEOS"
      },
      {
        "name": "Telos Foundation",
        "protocol": "https",
        "port": 443,
        "url": "api-test.telosfoundation.io",
        "description": "Load balancer of various public nodes provided by the Telos Foundation"
      }
    ]
  }
]

export default networksConfig;
