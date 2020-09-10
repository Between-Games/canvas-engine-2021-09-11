// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
//    ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║         ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
//    ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║         ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║      ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
//    ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
//    ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
//    ║ ║   ║ ║║ ║║ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
//    ║ ║   ║ ║║ ║║ ║║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ╔══╝ ╚══╗║ ║║ ║║ ║║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚═╝╚═╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

import canvasEngine from '../dist/index.js';

import chai from 'chai';

const expect = chai.expect;

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝
//    ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║
//    ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║
//    ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║
//    ╚═╝   ╚═══════╝╚═══════╝   ╚═╝

describe('Test', function() {
    // ╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗╔════╗╔═╗         ╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗
    // ║ ╔═══╗ ║║ ╔═════╝╚══╗ ╔══╝║ ║   ║ ║║ ╔═══╗ ║║ ╔╗ ║║ ║         ╚══╗ ╔══╝║ ╔═══╗ ║║ ║   ║ ║║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═════╗   ║ ║   ║ ║   ║ ║║ ╚═══╝ ║║ ║║ ║║ ║╔═══════╗   ║ ║   ║ ╚═══╝ ║║ ║   ║ ║║ ╚═════╗
    // ║ ╔═╗ ╔═╝║ ╔═════╝   ║ ║   ║ ║   ║ ║║ ╔═╗ ╔═╝║ ║║ ║║ ║╚═══════╝   ║ ║   ║ ╔═╗ ╔═╝║ ║   ║ ║║ ╔═════╝
    // ║ ║ ║ ╚═╗║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║ ║ ╚═╗║ ║║ ╚╝ ║            ║ ║   ║ ║ ║ ╚═╗║ ╚═══╝ ║║ ╚═════╗
    // ╚═╝ ╚═══╝╚═══════╝   ╚═╝   ╚═══════╝╚═╝ ╚═══╝╚═╝╚════╝            ╚═╝   ╚═╝ ╚═══╝╚═══════╝╚═══════╝

    describe('#returnTrue()', function() {
        it('Should return true when function is called', () => {
            expect(canvasEngine.returnTrue()).to.equal(true);
        });
    });

    // ╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗╔════╗╔═╗         ╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗
    // ║ ╔═══╗ ║║ ╔═════╝╚══╗ ╔══╝║ ║   ║ ║║ ╔═══╗ ║║ ╔╗ ║║ ║         ║ ╔═════╝║ ╔═══╗ ║║ ║      ║ ╔═════╝║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═════╗   ║ ║   ║ ║   ║ ║║ ╚═══╝ ║║ ║║ ║║ ║╔═══════╗║ ╚═════╗║ ╚═══╝ ║║ ║      ║ ╚═════╗║ ╚═════╗
    // ║ ╔═╗ ╔═╝║ ╔═════╝   ║ ║   ║ ║   ║ ║║ ╔═╗ ╔═╝║ ║║ ║║ ║╚═══════╝║ ╔═════╝║ ╔═══╗ ║║ ║      ╚═════╗ ║║ ╔═════╝
    // ║ ║ ║ ╚═╗║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║ ║ ╚═╗║ ║║ ╚╝ ║         ║ ║      ║ ║   ║ ║║ ╚═════╗╔═════╝ ║║ ╚═════╗
    // ╚═╝ ╚═══╝╚═══════╝   ╚═╝   ╚═══════╝╚═╝ ╚═══╝╚═╝╚════╝         ╚═╝      ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝

    describe('#returnFalse()', function() {
        it('Should return false when function is called', () => {
            expect(canvasEngine.returnFalse()).to.equal(false);
        });
    });
});
