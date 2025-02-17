/*!
 * bcoin.js - a javascript bitcoin library.
 * Copyright (c) 2014-2015, Fedor Indutny (MIT License).
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/bcoin-org/bcoin
 */

'use strict';

/**
 * A bcoin "environment" which exposes all
 * constructors for primitives, the blockchain,
 * mempool, wallet, etc. It also exposes a
 * global worker pool.
 *
 * @exports bcoin
 * @type {Object}
 */

const bcoin = exports;

/**
 * Set the default network.
 * @param {String} network
 */

bcoin.set = function set(network) {
  bcoin.Network.set(network);
  return bcoin;
};

/*
 * Expose
 */

// Blockchain
// bcoin.blockchain = require('./blockchain');
// bcoin.Chain = require('./blockchain/chain');
// bcoin.ChainEntry = require('./blockchain/chainentry');

// BTC
bcoin.btc = require('./btc');
bcoin.Amount = require('./btc/amount');
bcoin.URI = require('./btc/uri');

// Coins
bcoin.coins = require('./coins');
bcoin.Coins = require('./coins/coins');
bcoin.CoinEntry = require('./coins/coinentry');
bcoin.CoinView = require('./coins/coinview');

// HD
bcoin.hd = require('./hd');
bcoin.HDPrivateKey = require('./hd/private');
bcoin.HDPublicKey = require('./hd/public');
bcoin.Mnemonic = require('./hd/mnemonic');

// Primitives
bcoin.primitives = require('./primitives');
bcoin.Address = require('./primitives/address');
bcoin.Block = require('./primitives/block');
bcoin.Coin = require('./primitives/coin');
bcoin.Headers = require('./primitives/headers');
bcoin.Input = require('./primitives/input');
bcoin.InvItem = require('./primitives/invitem');
bcoin.KeyRing = require('./primitives/keyring');
bcoin.MerkleBlock = require('./primitives/merkleblock');
bcoin.MTX = require('./primitives/mtx');
bcoin.Outpoint = require('./primitives/outpoint');
bcoin.Output = require('./primitives/output');
bcoin.TX = require('./primitives/tx');

// Protocol
bcoin.protocol = require('./protocol');
bcoin.consensus = require('./protocol/consensus');
bcoin.Network = require('./protocol/network');
bcoin.networks = require('./protocol/networks');
bcoin.policy = require('./protocol/policy');

// Script
bcoin.script = require('./script');
bcoin.Opcode = require('./script/opcode');
bcoin.Script = require('./script/script');
bcoin.ScriptNum = require('./script/scriptnum');
bcoin.SigCache = require('./script/sigcache');
bcoin.Stack = require('./script/stack');

// Utils
bcoin.utils = require('./utils');
bcoin.util = require('./utils/util');

// bcrypto
bcoin.bcrypto = require('./bcrypto/bcrypto');

// bfilter
bcoin.bfilter = require('./bfilter/bfilter');

// b70 
bcoin.b70 = require('./b70/b70');

// Package Info
bcoin.pkg = require('./pkg');
