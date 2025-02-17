/*!
 * bcoin.js - a javascript bitcoin library.
 * Copyright (c) 2014-2015, Fedor Indutny (MIT License).
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/bcoin-org/bcoin
 */

/* eslint prefer-arrow-callback: "off" */

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
 * Define a module for lazy loading.
 * @param {String} name
 * @param {String} path
 */

bcoin.define = function define(name, path) {
  let cache = null;
  Object.defineProperty(bcoin, name, {
    enumerable: true,
    get() {
      if (!cache)
        cache = require(path);
      return cache;
    }
  });
};

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
// bcoin.define('blockchain', './blockchain');
// bcoin.define('blockstore', './blockstore');
// bcoin.define('Chain', './blockchain/chain');
// bcoin.define('ChainEntry', './blockchain/chainentry');

// BTC
bcoin.define('btc', './btc');
bcoin.define('Amount', './btc/amount');
bcoin.define('URI', './btc/uri');

// Client
// bcoin.define('client', './client');
// bcoin.define('NodeClient', './client/node');
// bcoin.define('WalletClient', './client/wallet');

// Coins
bcoin.define('coins', './coins');
bcoin.define('Coins', './coins/coins');
bcoin.define('CoinEntry', './coins/coinentry');
bcoin.define('CoinView', './coins/coinview');

// HD
bcoin.define('hd', './hd');
bcoin.define('HDPrivateKey', './hd/private');
bcoin.define('HDPublicKey', './hd/public');
bcoin.define('Mnemonic', './hd/mnemonic');

// Primitives
bcoin.define('primitives', './primitives');
bcoin.define('Address', './primitives/address');
bcoin.define('Block', './primitives/block');
bcoin.define('Coin', './primitives/coin');
bcoin.define('Headers', './primitives/headers');
bcoin.define('Input', './primitives/input');
bcoin.define('InvItem', './primitives/invitem');
bcoin.define('KeyRing', './primitives/keyring');
bcoin.define('MerkleBlock', './primitives/merkleblock');
bcoin.define('MTX', './primitives/mtx');
bcoin.define('Outpoint', './primitives/outpoint');
bcoin.define('Output', './primitives/output');
bcoin.define('TX', './primitives/tx');

// Protocol
bcoin.define('protocol', './protocol');
bcoin.define('consensus', './protocol/consensus');
bcoin.define('Network', './protocol/network');
bcoin.define('networks', './protocol/networks');
bcoin.define('policy', './protocol/policy');

// Script
bcoin.define('script', './script');
bcoin.define('Opcode', './script/opcode');
bcoin.define('Script', './script/script');
bcoin.define('ScriptNum', './script/scriptnum');
bcoin.define('SigCache', './script/sigcache');
bcoin.define('Stack', './script/stack');

// Utils
bcoin.define('utils', './utils');
bcoin.define('util', './utils/util');

// bcrypto
bcoin.define('bcrypto', './bcrypto/bcrypto');

// bfilter 
bcoin.define('bfilter', './bfilter/bfilter');

// b70 
bcoin.define('b70', './b70/b70');

// Package Info
bcoin.define('pkg', './pkg');
