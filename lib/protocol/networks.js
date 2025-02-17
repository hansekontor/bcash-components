/*!
 * network.js - bitcoin networks for bcoin
 * Copyright (c) 2014-2015, Fedor Indutny (MIT License)
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * Copyright (c) 2019-2020, Jonathan Gonzalez (MIT License).
 * https://github.com/cash-org/cashnode
 */

'use strict';

/**
 * @module protocol/networks
 */

const BN = require('../bcrypto/bn.js');

const network = exports;

/*
 * Helpers
 */

function b(hash) {
  return Buffer.from(hash, 'hex');
}

/**
 * Network type list.
 * @memberof module:protocol/networks
 * @const {String[]}
 * @default
 */

network.types = ['main', 'testnet', 'regtest', 'simnet'];

/**
 * Mainnet
 * @static
 * @lends module:protocol/networks
 * @type {Object}
 */

const main = {};

/**
 * Symbolic network type.
 * @const {String}
 * @default
 */

main.type = 'main';

/**
 * Default DNS seeds.
 * @const {String[]}
 * @default
 */

main.seeds = [
  'seed.flowee.cash',
  'seed-bch.bitcoinforks.org',
  'btccash-seeder.bitcoinunlimited.info',
  'seed.bchd.cash',
  'seed.bch.loping.net',
  'dnsseed.electroncash.de'
];

/**
 * Packet magic number.
 * @const {Number}
 * @default
 */

main.magic = 0xe8f3e1e3;

/**
 * Default network port.
 * @const {Number}
 * @default
 */

main.port = 8333;

/**
 * Checkpoint block list.
 * @const {Object}
 */

main.checkpointMap = {
  11111: b('1d7c6eb2fd42f55925e92efad68b61edd22fba29fde8783df744e26900000000'),
  33333: b('a6d0b5df7d0df069ceb1e736a216ad187a50b07aaa4e78748a58d52d00000000'),
  74000: b('201a66b853f9e7814a820e2af5f5dc79c07144e31ce4c9a39339570000000000'),
  105000: b('97dc6b1d15fbeef373a744fee0b254b0d2c820a3ae7f0228ce91020000000000'),
  134444: b('feb0d2420d4a18914c81ac30f494a5d4ff34cd15d34cfd2fb105000000000000'),
  168000: b('63b703835cb735cb9a89d733cbe66f212f63795e0172ea619e09000000000000'),
  193000: b('17138bca83bdc3e6f60f01177c3877a98266de40735f2a459f05000000000000'),
  210000: b('2e3471a19b8e22b7f939c63663076603cf692f19837e34958b04000000000000'),
  216116: b('4edf231bf170234e6a811460f95c94af9464e41ee833b4f4b401000000000000'),
  225430: b('32595730b165f097e7b806a679cf7f3e439040f750433808c101000000000000'),
  250000: b('14d2f24d29bed75354f3f88a5fb50022fc064b02291fdf873800000000000000'),
  279000: b('407ebde958e44190fa9e810ea1fc3a7ef601c3b0a0728cae0100000000000000'),
  295000: b('83a93246c67003105af33ae0b29dd66f689d0f0ff54e9b4d0000000000000000'),
  300255: b('b2f3a0f0de4120c1089d5f5280a263059f9b6e7c520428160000000000000000'),
  319400: b('3bf115fd057391587ca39a531c5d4989e1adec9b2e05c6210000000000000000'),
  343185: b('548536d48e7678fcfa034202dd45d4a76b1ad061f38b2b070000000000000000'),
  352940: b('ffc9520143e41c94b6e03c2fa3e62bb76b55ba2df45d75100000000000000000'),
  382320: b('b28afdde92b0899715e40362f56afdb20e3d135bedc68d0a0000000000000000'),
  401465: b('eed16cb3e893ed9366f27c39a9ecd95465d02e3ef40e45010000000000000000'),
  420000: b('a1ff746b2d42b834cb7d6b8981b09c265c2cabc016e8cc020000000000000000'),
  440000: b('9bf296b8de5f834f7635d5e258a434ad51b4dbbcf7c08c030000000000000000'),
  450000: b('0ba2070c62cd9da1f8cef88a0648c661a411d33e728340010000000000000000'),
  460000: b('8c25fc7e414d3e868d6ce0ec473c30ad44e7e8bc1b75ef000000000000000000'),
  470000: b('89756d1ed75901437300af10d5ab69070a282e729c536c000000000000000000'),
  // UAHF fork block:
  478559: b('ec5e1a193601f25ff1d94b421ddead0dbefcb99cf91e65000000000000000000'),
  480000: b('f93408ffca92d88a6e46d3b90046f97bde6be0c08e7ed40c0000000000000000'),
  490000: b('d1c65d766c6dc270b8ff4f1edb052fb71dc2b4750ede8a010000000000000000'),
  500000: b('01b2328355f4a4dc9efa5c610687304507b7df9f3f4de1050000000000000000'),
  // DAA fork block
  504031: b('9cabb6ee1b1a4c3b659d70be75810be83d0a0db665bf1e010000000000000000'),
  510000: b('040e6b1f2f4cb198a5780d366bf81e591de257642b9267030000000000000000'),
  525000: b('c994fba2bf168333fd969bcfa64f03ca1b62074f9a8f1b010000000000000000'),
  // Monolith Activation
  530359: b('0391c40195cf8ae3436f3955f1a8444f07468fd08bda1a010000000000000000'),
  // Magnetic Anomaly Activation:
  556767: b('6cd5e644acccee5743ce2e93c541d34169933b6eff2646000000000000000000'),
  // Great Wall Activation:
  582680: b('18cc7d8c39ca16dc749acb7278a471964f7dec6ae3b8b4010000000000000000'),
  // Graviton Activation:
  609136: b('b1c55b4f69aa2e3209c91ae413c355c65aacfa07b28bb4000000000000000000'),
  // Phonon Activation:
  635259: b('f73075b2c598f49b3a19558c070b52d5a5d6c21fefdf33000000000000000000'),
  // Axion Activation:
  661648: b('7d7510f907bdc9bd2907e56beceaef31f78f2c8b9d4c28040000000000000000'),
  664198: b('60824622a1d2b689fbb234ce2c5939ff92e8ed8c57902f0c0000000000000000'),
  680140: b('0b7c2ff6c3658cb3f846aa092145c44a1d45638b56482c230000000000000000'),
  // Tachyon Activation
  686621: b('45b7e5be980bd6e98a22f895fcdc80546d9f0a57f7e68f3c0000000000000000'),
  // Selectron Activation
  713661: b('8defaaea383ab73c75ceea3f08190f3ab5ccc70743f876060000000000000000'),
  // Gluon activation
  739536: b('617bfc596bce59b129242fe67b5afe0509560946cd04db060000000000000000'),
  // Jefferson activation
  766195: b('94e0246db72955957dedb431eb1096de9a5b715348c92b100000000000000000')
};

/**
 * Last checkpoint height.
 * @const {Number}
 * @default
 */

main.lastCheckpoint = 525000;

/**
 * @const {Number}
 * @default
 */

main.halvingInterval = 210000;

/**
 * Genesis block header.
 * @const {Object}
 */

main.genesis = {
  version: 1,
  hash: b('6fe28c0ab6f1b372c1a6a246ae63f74f931e8365e15a089c68d6190000000000'),
  prevBlock:
    b('0000000000000000000000000000000000000000000000000000000000000000'),
  merkleRoot:
    b('3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a'),
  time: 1231006505,
  bits: 486604799,
  nonce: 2083236893,
  height: 0
};

/**
 * The network's genesis block in a hex string.
 * @const {String}
 */

main.genesisBlock =
  '0100000000000000000000000000000000000000000000000000000000000000000000'
  + '003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a29ab'
  + '5f49ffff001d1dac2b7c01010000000100000000000000000000000000000000000000'
  + '00000000000000000000000000ffffffff4d04ffff001d0104455468652054696d6573'
  + '2030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66'
  + '207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01'
  + '000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f'
  + '61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f'
  + 'ac00000000';

/**
 * POW-related constants.
 * @enum {Number}
 * @default
 */

main.pow = {
  /**
   * Default target.
   * @const {BN}
   */

  limit: new BN(
    '00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    'hex'
  ),

  /**
   * Compact pow limit.
   * @const {Number}
   * @default
   */

  bits: 486604799,

  /**
   * Half Life value used in DAA.
   * Represents the value of two days in seconds
   * @const {Number}
   * @default
   */

  halfLife: 172800,

  /**
   * Minimum chainwork for best chain.
   * @const {BN}
   */

  chainwork: new BN(
    '0000000000000000000000000000000000000000013c95e14d4d9db91d671020',
    'hex'
  ),

  /**
   * Desired retarget period in seconds.
   * @const {Number}
   * @default
   */

  targetTimespan: 14 * 24 * 60 * 60,

  /**
   * Average block time.
   * @const {Number}
   * @default
   */

  targetSpacing: 10 * 60,

  /**
   * Retarget interval in blocks.
   * @const {Number}
   * @default
   */

  retargetInterval: 2016,

  /**
   * Whether to reset target if a block
   * has not been mined recently.
   * @const {Boolean}
   * @default
   */

  targetReset: false,

  /**
   * Do not allow retargetting.
   * @const {Boolean}
   * @default
   */

  noRetargeting: false
};

/**
 * Block constants.
 * @enum {Number}
 * @default
 */

main.block = {
  /**
   * Height at which bip34 was activated.
   * Used for avoiding bip30 checks.
   */

  bip34height: 227931,

  /**
   * Hash of the block that activated bip34.
   */

  bip34hash:
    b('b808089c756add1591b1d17bab44bba3fed9e02f942ab4894b02000000000000'),

  /**
   * Height at which bip65 was activated.
   */

  bip65height: 388381,

  /**
   * Hash of the block that activated bip65.
   */

  bip65hash:
    b('f035476cfaeb9f677c2cdad00fd908c556775ded24b6c2040000000000000000'),

  /**
   * Height at which bip66 was activated.
   */

  bip66height: 363725,

  /**
   * Hash of the block that activated bip66.
   */

  bip66hash:
    b('3109b588941188a9f1c2576aae462d729b8cce9da1ea79030000000000000000'),

  /**
   * Height at which UAHF was activated.
   */

  uahfHeight: 478558,

  /**
   * Hash of the block that activated UAHF.
   */

  uahfHash:
    b('432d350741fbf28f2e1486eabe2c4e143bfe2241af6518010000000000000000'),

  /**
   * Height at which DAA was activated.
   * November 13, 2017 hard fork
   */

  daaHeight: 504031,

  /**
   * Hash of the block that activated DAA
   */

  daaHash:
    b('9cabb6ee1b1a4c3b659d70be75810be83d0a0db665bf1e010000000000000000'),

  /**
   * Height at which Magnetic Anomaly was activated.
   * Nov 15, 2018 hard fork
   */

  magneticAnomalyHeight: 556767,

  /**
   * Hash of the block that activatd Magnetic Anomaly.
   * November 15, 2018
   */

  maaHash:
    b('6cd5e644acccee5743ce2e93c541d34169933b6eff2646000000000000000000'),

  /**
   * Height at which Great Wall was activated.
   * Wed, 15 May 2019 hard fork
   */

  greatWallActivationHeight: 582680,

  /**
   * Hash of the block that activated Great Wall.
   * May 15, 2019
   */

  gwaHash:
    b('18cc7d8c39ca16dc749acb7278a471964f7dec6ae3b8b4010000000000000000'),

  /**
   * Graviton Hard Fork activation time.
   * Nov 15, 2019 12:00:00 UTC
   */

  gravitonActivationTime: 1573819200,

  /**
   * Height at which Graviton was activated.
   * Friday, 15 November 2019 hard fork
   */

  gravitonHeight: 609136,

  /**
   * Hash of the block that activated Graviton.
   * November 15th, 2019
   */

  gravitonHash:
    b('b1c55b4f69aa2e3209c91ae413c355c65aacfa07b28bb4000000000000000000'),

  /**
   * Time at which Phonon was activated.
   * May 15, 2020 12:00:00 UTC
   */

  phononActivationTime: 1589544000,

  /**
  * Height at which Phonon Activation occured.
  * May 15, 2020
  */

  phononHeight: 635259,

  /**
  * Hash of the block that activated Phonon.
  * May 15th 2020
  */

  phononHash:
    b('f73075b2c598f49b3a19558c070b52d5a5d6c21fefdf33000000000000000000'),

  /**
   * Time at which Asert3d-2i was activated.
   * November 15, 2020 12:00:00 UTC
   */

  asertActivationTime: 1605441600,

  /**
   * Time at which Axion was activated.
   * November 15, 2020 12:00:00 UTC
   */

  axionActivationTime: 1605441600,

  /**
  * Height at which Axion Activation occured.
  * November 15, 2020
  */

  axionHeight: 661648,

  /**
  * Hash of the block that activated Axion.
  * November 15th 2020
  */

   axionHash:
   b('7d7510f907bdc9bd2907e56beceaef31f78f2c8b9d4c28040000000000000000'),

  /**
   * Time at which Tachyon was activated.
   * May 15, 2021 12:00:00 UTC
   */

  tachyonActivationTime: 1621080000,

  /**
  * Height at which Tachyon Activation occured.
  * May 15, 2021 12:00:00 UTC
  */

  tachyonHeight: 686621,

  /**
  * Hash of the block that activated Tachyon.
  * May 15, 2021 12:00:00 UTC
  */

  tachyonHash:
  b('45b7e5be980bd6e98a22f895fcdc80546d9f0a57f7e68f3c0000000000000000'),

  /**
   * Time at which Selectron was activated.
   * November 15, 2021 12:00:00 UTC
   */

  selectronActivationTime: 1636977600,

  /**
  * Height at which Selectron Activation occured.
  *  November 15, 2021 12:00:00 UTC
  */

  selectronHeight: 713661,

  /**
  * Hash of the block that activated Selectron.
  * November 15, 2021 12:00:00 UTC
  */

  selectronHash:
  b('8defaaea383ab73c75ceea3f08190f3ab5ccc70743f876060000000000000000'),

  /**
   * Time at which Gluon was activated.
   * May 15, 2022 12:00:00 UTC
   */

  gluonActivationTime: 1652572800,

  /**
  * Height at which Gluon activation occured.
  *  May 15, 2022 12:00:00 UTC
  */

  gluonHeight: 739536,

  /**
  * Hash of the block that activated Gluon.
  * May 15, 2022 12:00:00 UTC
  */

  gluonHash:
  b('617bfc596bce59b129242fe67b5afe0509560946cd04db060000000000000000'), 

  /**
   * Time at which Jefferson was activated.
   * November 15, 2022 12:00:00 UTC
   */

  jeffersonActivationTime: 1668470400,

  /**
  * Height at which Gluon activation occured.
  *  November 15, 2022 12:00:00 UTC
  */

  jeffersonHeight: 766195,

  /**
  * Hash of the block that activated Gluon.
  * November 15, 2022 12:00:00 UTC
  */

  jeffersonHash:
  b('94e0246db72955957dedb431eb1096de9a5b715348c92b100000000000000000'), 

  /**
   * Time at which Wellington was activated.
   * May 15, 2023 12:00:00 UTC
   */

  wellingtonActivationTime: 1684108800,

  /**
   * Safe height to start pruning.
   */

  pruneAfterHeight: 1000,

  /**
   * Safe number of blocks to keep.
   */

  keepBlocks: 288,

  /**
   * Age used for the time delta to
   * determine whether the chain is synced.
   */

  maxTipAge: 24 * 60 * 60,

  /**
   * Height at which block processing is
   * slow enough that we can output
   * logs without spamming.
   */

  slowHeight: 325000
};

/**
 * Map of historical blocks which create duplicate transactions hashes.
 * @see https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki
 * @const {Object}
 * @default
 */

main.bip30 = {
  91842: b('eccae000e3c8e4e093936360431f3b7603c563c1ff6181390a4d0a0000000000'),
  91880: b('21d77ccb4c08386a04ac0196ae10f6a1d2c2a377558ca190f143070000000000')
};

/**
 * For versionbits.
 * @const {Number}
 * @default
 */

main.activationThreshold = 1916; // 95% of 2016

/**
 * Confirmation window for versionbits.
 * @const {Number}
 * @default
 */

main.minerWindow = 2016; // nPowTargetTimespan / nPowTargetSpacing

/**
 * Deployments for versionbits.
 * @const {Object}
 * @default
 */

main.deployments = {
  csv: {
    name: 'csv',
    bit: 0,
    startTime: 1462060800, // May 1st, 2016
    timeout: 1493596800, // May 1st, 2017
    threshold: -1,
    window: -1,
    required: false,
    force: true
  },
  testdummy: {
    name: 'testdummy',
    bit: 28,
    startTime: 1199145601, // January 1, 2008
    timeout: 1230767999, // December 31, 2008
    threshold: -1,
    window: -1,
    required: false,
    force: true
  }
};

/**
 * Deployments for versionbits (array form, sorted).
 * @const {Array}
 * @default
 */

main.deploys = [
  main.deployments.csv,
  main.deployments.testdummy
];

/**
 * Key prefixes.
 * @enum {Number}
 * @default
 */

main.keyPrefix = {
  privkey: 0x80,
  xpubkey: 0x0488b21e,
  xprivkey: 0x0488ade4,
  xpubkey58: 'xpub',
  xprivkey58: 'xprv',
  coinType: 0
};

/**
 * {@link Address} prefixes.
 * @enum {Number}
 */

main.addressPrefix = {
  pubkeyhash: 0x00,
  scripthash: 0x05,
  cashaddr: 'ecash'
};

/**
 * Default value for whether the mempool
 * accepts non-standard transactions.
 * @const {Boolean}
 * @default
 */

main.requireStandard = true;

/**
 * Default http port.
 * @const {Number}
 * @default
 */

main.rpcPort = 8332;

/**
 * Default wallet port.
 * @const {Number}
 * @default
 */

main.walletPort = 8334;

/**
 * Default min relay rate.
 * @const {Rate}
 * @default
 */

main.minRelay = 1000;

/**
 * Default normal relay rate.
 * @const {Rate}
 * @default
 */

main.feeRate = 100000;

/**
 * Maximum normal relay rate.
 * @const {Rate}
 * @default
 */

main.maxFeeRate = 400000;

/**
 * Whether to allow self-connection.
 * @const {Boolean}
 */

main.selfConnect = false;

/**
 * Whether to request mempool on sync.
 * @const {Boolean}
 */

main.requestMempool = false;

/*
 * Testnet (v3)
 * https://en.bitcoin.it/wiki/Testnet
 */

const testnet = {};

testnet.type = 'testnet';

testnet.seeds = [
  'testnet-seed.bitcoinabc.org', // Bitcoin ABC seeder
  'testnet-seed-abc.bitcoinforks.org', // bitcoinforks seeders
  'testnet-seed.deadalnix.me', // Amaury SÉCHET
  'testnet-seed.bchd.cash'
];

testnet.magic = 0xf4f3e5f4;

testnet.port = 18333;

testnet.checkpointMap = {
  546: b('70cb6af7ebbcb1315d3414029c556c55f3e2fc353c4c9063a76c932a00000000'),
  10000: b('02a1b43f52591e53b660069173ac83b675798e12599dbb0442b7580000000000'),
  50000: b('0c6ceabe803cec55ba2831e445956d0a43ba9521743a802cddac7e0700000000'),
  90000: b('cafc21e17faf90461a5905aa03302c394912651ed9475ae711723e0d00000000'),
  100000: b('1e0a16bbadccde1d80c66597b1939e45f91b570d29f95fc158299e0000000000'),
  140000: b('92c0877b54c556889b72175ccbe0c91a1208f6ef7efb2c006101062300000000'),
  170000: b('508125560d202b89757889bb0e49c712477be20440058f05db4f0e0000000000'),
  210000: b('32365454b5f29a826bff8ad9b0448cad0072fc73d50e482d91a3dece00000000'),
  230000: b('b11a447e62643e0b27406eb0fc270cb8126d7b5b70822fb642d9513400000000'),
  270000: b('1c42b811cf9c163932f6e95ec55bf9b5e2cb5324e7e93001572e000000000000'),
  300000: b('a141bf3972424853f04367b47995e220e0b5a2706e5618766f22000000000000'),
  340000: b('67edd4d92e405608109164b15f92b193377d49325b0ed036739c010000000000'),
  350000: b('592b44bc0f7a4286cf07ead8497114c6952c1c7dea7305193deacf8e00000000'),
  390000: b('f217e183484fb6d695609cc71fa2ae24c3020943407e0150b298030000000000'),
  420000: b('de9e73a3b91fbb014e036e8583a17d6b638a699aeb2de8573d12580800000000'),
  460000: b('2e8baaffc107f15c87aebe01664b63d07476afa53bcbada1281a030000000000'),
  500000: b('06f60922a2aab2757317820fc6ffaf6a470e2cbb0f63a2aac0a7010000000000'),
  540000: b('8dd0bebfbc4878f5af09d3e848dcc57827d2c1cebea8ec5d8cbe420500000000'),
  570000: b('87acbd4cd3c40ec9bd648f8698ed226b31187274c06cc7a9af79030000000000'),
  600000: b('169a05b3bb04b7d13ad628915630900a5ed2e89f3a9dc6064f62000000000000'),
  630000: b('bbbe117035432a6a4effcb297207a02b031735b43e0d19a9217c000000000000'),
  670000: b('080bfe75caed8624fcfdfbc65973c8f962d7bdc495a891f5d16b7d0000000000'),
  700000: b('c14d3f6a1e7c7d66fd940951e44f3c3be1273bea4d2ab1786140000000000000'),
  740000: b('b3b423f0462fd78a01e4f1a59a2737a0525b5dbb9bba0b4634f9000000000000'),
  780000: b('0381582e34c3755964dc2813e2b33e521e5596367144e1670851050000000000'),
  800000: b('03b5f8ab257e02903f509f5ff2935220eec2e77b1819651d099b200000000000'),
  840000: b('dac1648107bd4394e57e4083c86d42b548b1cfb119665f179ea80a0000000000'),
  880000: b('ff90b4bb07eded8e96715bf595c09c7d21dd8c61b8306ff48705d60000000000'),
  900000: b('9bd8ac418beeb1a2cf5d68c8b5c6ebaa947a5b766e5524898d6f350000000000'),
  940000: b('c98f1651a475b00d12f8c25eb166ee843affaa90610e36a19d68030000000000'),
  980000: b('cc8e9774542d044a9698ca2336ae02d5987157e676f1c76aa3877c0000000000'),
  1010000:
    b('9d9fb11abc2712d80368229e97b8d827b2a07d27eb5335e5c924000000000000'),
  1050000:
    b('d8190cf0af7f08e179cab51d67db0b44b87951a78f7fdc31b4a01a0000000000'),
  1090000:
    b('41f83c47e02a8852d033ac884df7cca877726b384a461fb9e802000000000000'),
  1130000:
    b('b8d63c3830e3c5685d3f7d2c2271fdb2ce3315619a473c324ea1a4ce00000000'),
  // UAHF fork block.
  1155875:
    b('38f1ae7f0ea8c1b589884c5fbd0b83721e3ab6759a4b897206857cf100000000'),
  // DAA fork block.
  1188697:
    b('fb47e0ab0d2448f71192a09fe61bc9c46cd3b4e7bd778091d00e170000000000'),
  // GWA fork block.
  1303885:
    b('d323ee8d7ede5bef62f84db98f93cc8c47fae4f02e8938914700000000000000'),
  // Graviton fork block
  1341712:
    b('5ba3af2992073940ed9e5a9d9eef9194bbfba905d92b202eea44fcff00000000'),
  // Phonon fork block.
  1378461:
    b('d715e9fab7bbdf301081eeadbe6e931db282cf6b92b1365f9b50f59900000000')

};

testnet.lastCheckpoint = 1341712;

testnet.halvingInterval = 210000;

testnet.genesis = {
  version: 1,
  hash: b('43497fd7f826957108f4a30fd9cec3aeba79972084e90ead01ea330900000000'),
  prevBlock:
    b('0000000000000000000000000000000000000000000000000000000000000000'),
  merkleRoot:
    b('3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a'),
  time: 1296688602,
  bits: 486604799,
  nonce: 414098458,
  height: 0
};

testnet.genesisBlock =
  '0100000000000000000000000000000000000000000000000000000000000000000000'
  + '003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4adae5'
  + '494dffff001d1aa4ae1801010000000100000000000000000000000000000000000000'
  + '00000000000000000000000000ffffffff4d04ffff001d0104455468652054696d6573'
  + '2030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66'
  + '207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01'
  + '000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f'
  + '61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f'
  + 'ac00000000';

testnet.pow = {
  limit: new BN(
    '00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    'hex'
  ),
  bits: 486604799,
  chainwork: new BN(
    '00000000000000000000000000000000000000000000006956e7298fb096a1cc',
    'hex'
  ),
  halfLife: 172800,
  targetTimespan: 14 * 24 * 60 * 60,
  targetSpacing: 10 * 60,
  retargetInterval: 2016,
  targetReset: true,
  noRetargeting: false
};

testnet.block = {
  bip34height: 21111,
  bip34hash:
    b('f88ecd9912d00d3f5c2a8e0f50417d3e415c75b3abe584346da9b32300000000'),
  bip65height: 581885,
  bip65hash:
    b('b61e864fbec41dfaf09da05d1d76dc068b0dd82ee7982ff255667f0000000000'),
  bip66height: 330776,
  bip66hash:
    b('82a14b9e5ea81d4832b8e2cd3c2a6092b5a3853285a8995ec4c8042100000000'),

  uahfHeight: 1155875,
  uahfHash:
    b('38f1ae7f0ea8c1b589884c5fbd0b83721e3ab6759a4b897206857cf100000000'),

  daaHeight: 1188697,
  daaHash:
    b('fb47e0ab0d2448f71192a09fe61bc9c46cd3b4e7bd778091d00e170000000000'),

  magneticAnomalyHeight: 1267996,
  maaHash:
    b('244b485f4871816d3ca060f6f363abe81c6fa1bed45c09e0fa01000000000000'),

  greatWallActivationHeight: 1303885,
  gwaHash:
    b('d323ee8d7ede5bef62f84db98f93cc8c47fae4f02e8938914700000000000000'),

  gravitonActivationTime: 1573819200,

  gravitonHeight: 1341712,
  gravitonHash:
    b('5ba3af2992073940ed9e5a9d9eef9194bbfba905d92b202eea44fcff00000000'),

  phononActivationTime: 1589544000,
  asertActivationTime: 1605441600,
  pruneAfterHeight: 1000,
  keepBlocks: 10000,
  maxTipAge: 24 * 60 * 60,
  slowHeight: 950000
};

testnet.bip30 = {};

testnet.activationThreshold = 1512; // 75% for testchains

testnet.minerWindow = 2016; // nPowTargetTimespan / nPowTargetSpacing

testnet.deployments = {
  csv: {
    name: 'csv',
    bit: 0,
    startTime: 1456790400, // March 1st, 2016
    timeout: 1493596800, // May 1st, 2017
    threshold: -1,
    window: -1,
    required: false,
    force: true
  },
  testdummy: {
    name: 'testdummy',
    bit: 28,
    startTime: 1199145601, // January 1, 2008
    timeout: 1230767999, // December 31, 2008
    threshold: -1,
    window: -1,
    required: false,
    force: true
  }
};

testnet.deploys = [
  testnet.deployments.csv,
  testnet.deployments.testdummy
];

testnet.keyPrefix = {
  privkey: 0xef,
  xpubkey: 0x043587cf,
  xprivkey: 0x04358394,
  xpubkey58: 'tpub',
  xprivkey58: 'tprv',
  coinType: 1
};

testnet.addressPrefix = {
  pubkeyhash: 0x6f,
  scripthash: 0xc4,
  cashaddr: 'xectest'
};

testnet.requireStandard = false;

testnet.rpcPort = 18332;

testnet.walletPort = 18334;

testnet.minRelay = 1000;

testnet.feeRate = 20000;

testnet.maxFeeRate = 60000;

testnet.selfConnect = false;

testnet.requestMempool = false;

/*
 * Regtest
 */

const regtest = {};

regtest.type = 'regtest';

regtest.seeds = [
  '127.0.0.1'
];

regtest.magic = 0xfabfb5da;

regtest.port = 48444;

regtest.checkpointMap = {};
regtest.lastCheckpoint = 0;

regtest.halvingInterval = 150;

regtest.genesis = {
  version: 1,
  hash: b('06226e46111a0b59caaf126043eb5bbf28c34f3a5e332a1fc7b2b73cf188910f'),
  prevBlock:
    b('0000000000000000000000000000000000000000000000000000000000000000'),
  merkleRoot:
    b('3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a'),
  time: 1296688602,
  bits: 545259519,
  nonce: 2,
  height: 0
};

regtest.genesisBlock =
  '0100000000000000000000000000000000000000000000000000000000000000000000'
  + '003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4adae5'
  + '494dffff7f200200000001010000000100000000000000000000000000000000000000'
  + '00000000000000000000000000ffffffff4d04ffff001d0104455468652054696d6573'
  + '2030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66'
  + '207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01'
  + '000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f'
  + '61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f'
  + 'ac00000000';

regtest.pow = {
  limit: new BN(
    '7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    'hex'
  ),
  bits: 545259519,
  chainwork: new BN(
    '0000000000000000000000000000000000000000000000000000000000000002',
    'hex'
  ),
  halfLife: 172800,
  targetTimespan: 14 * 24 * 60 * 60,
  targetSpacing: 10 * 60,
  retargetInterval: 2016,
  targetReset: true,
  noRetargeting: true
};

regtest.block = {
  bip34height: 100000000,
  bip34hash: null,
  bip65height: 1351,
  bip65hash: null,
  bip66height: 1251,
  bip66hash: null,
  uahfHeight: 0,
  uahfHash: null,
  daaHeight: 0,
  daaHash: null,
  magneticAnomalyHeight: 0,
  maaHash: null,
  greatWallActivationHeight: 0,
  gwaHash: null,
  gravitonHeight: 0,
  gravitonHash: null,
  phononActivationTime: 0,
  asertActivationTime: 0,
  pruneAfterHeight: 1000,
  keepBlocks: 10000,
  maxTipAge: 0xffffffff,
  slowHeight: 0
};

regtest.bip30 = {};

regtest.activationThreshold = 108; // 75% for testchains

regtest.minerWindow = 144; // Faster than normal for regtest

regtest.deployments = {
  csv: {
    name: 'csv',
    bit: 0,
    startTime: 0,
    timeout: 0xffffffff,
    threshold: -1,
    window: -1,
    required: false,
    force: true
  },
  testdummy: {
    name: 'testdummy',
    bit: 28,
    startTime: 0,
    timeout: 0xffffffff,
    threshold: -1,
    window: -1,
    required: false,
    force: true
  }
};

regtest.deploys = [
  regtest.deployments.csv,
  regtest.deployments.testdummy
];

regtest.keyPrefix = {
  privkey: 0x5a,
  xpubkey: 0xeab4fa05,
  xprivkey: 0xeab404c7,
  xpubkey58: 'rpub',
  xprivkey58: 'rprv',
  coinType: 1
};

regtest.addressPrefix = {
  pubkeyhash: 0x3c,
  scripthash: 0x26,
  cashaddr: 'xecreg'
};

regtest.requireStandard = false;

regtest.rpcPort = 48332;

regtest.walletPort = 48334;

regtest.minRelay = 1000;

regtest.feeRate = 20000;

regtest.maxFeeRate = 60000;

regtest.selfConnect = true;

regtest.requestMempool = true;

/*
 * Simnet (btcd)
 */

const simnet = {};

simnet.type = 'simnet';

simnet.seeds = [
  '127.0.0.1'
];

simnet.magic = 0xf2faede4;

simnet.port = 18555;

simnet.checkpointMap = {};

simnet.lastCheckpoint = 0;

simnet.halvingInterval = 210000;

simnet.genesis = {
  version: 1,
  hash:
    b('f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68'),
  prevBlock:
    b('0000000000000000000000000000000000000000000000000000000000000000'),
  merkleRoot:
    b('3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a'),
  time: 1401292357,
  bits: 545259519,
  nonce: 2,
  height: 0
};

simnet.genesisBlock =
  '0100000000000000000000000000000000000000000000000000000000000000000000'
  + '003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a4506'
  + '8653ffff7f200200000001010000000100000000000000000000000000000000000000'
  + '00000000000000000000000000ffffffff4d04ffff001d0104455468652054696d6573'
  + '2030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66'
  + '207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01'
  + '000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f'
  + '61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f'
  + 'ac00000000';

simnet.pow = {
  limit: new BN(
    // High target of 0x207fffff (545259519)
    '7fffff0000000000000000000000000000000000000000000000000000000000',
    'hex'
  ),
  bits: 545259519,
  chainwork: new BN(
    '0000000000000000000000000000000000000000000000000000000000000002',
    'hex'
  ),
  halfLife: 172800,
  targetTimespan: 14 * 24 * 60 * 60,
  targetSpacing: 10 * 60,
  retargetInterval: 2016,
  targetReset: true,
  noRetargeting: false
};

simnet.block = {
  bip34height: 0,
  bip34hash:
    b('f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68'),
  bip65height: 0,
  bip65hash:
    b('f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68'),
  bip66height: 0,
  bip66hash:
    b('f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68'),
  uahfHeight: 0,
  uahfHash: null,
  daaHeight: 0,
  daaHash: null,
  magneticAnomalyActivationTime: 1542300000,
  greatWallActivationTime: 1557921600,
  pruneAfterHeight: 1000,
  keepBlocks: 10000,
  maxTipAge: 0xffffffff,
  slowHeight: 0
};

simnet.bip30 = {};

simnet.activationThreshold = 75; // 75% for testchains

simnet.minerWindow = 100; // nPowTargetTimespan / nPowTargetSpacing

simnet.deployments = {
  csv: {
    name: 'csv',
    bit: 0,
    startTime: 0, // March 1st, 2016
    timeout: 0xffffffff, // May 1st, 2017
    threshold: -1,
    window: -1,
    required: false,
    force: true
  },
  testdummy: {
    name: 'testdummy',
    bit: 28,
    startTime: 1199145601, // January 1, 2008
    timeout: 1230767999, // December 31, 2008
    threshold: -1,
    window: -1,
    required: false,
    force: true
  }
};

simnet.deploys = [
  simnet.deployments.csv,
  simnet.deployments.testdummy
];

simnet.keyPrefix = {
  privkey: 0x64,
  xpubkey: 0x0420bd3a,
  xprivkey: 0x0420b900,
  xpubkey58: 'spub',
  xprivkey58: 'sprv',
  coinType: 115
};

simnet.addressPrefix = {
  pubkeyhash: 0x3f,
  scripthash: 0x7b,
  cashaddr: 'xecsim'
};

simnet.requireStandard = false;

simnet.rpcPort = 18556;

simnet.walletPort = 18558;

simnet.minRelay = 1000;

simnet.feeRate = 20000;

simnet.maxFeeRate = 60000;

simnet.selfConnect = false;

simnet.requestMempool = false;

/*
 * Expose
 */

network.main = main;
  network.testnet = testnet;
  network.regtest = regtest;
  network.simnet = simnet;
