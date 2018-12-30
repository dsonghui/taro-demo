import MyTools from "./tools";
import moment from "./moment";

let expect = require('chai').expect;
/* eslint-env mocha */


describe('MyTool', () => {
  it('generateLetterByIndex', () => {
    expect(MyTools.generateLetterByIndex(3)).to.equal('D');
    expect(MyTools.generateLetterByIndex(26)).to.equal('AA');
    expect(MyTools.generateLetterByIndex(52)).to.equal('BA');
    expect(MyTools.generateLetterByIndex(56)).to.equal('BE');
    expect(MyTools.generateLetterByIndex('A')).to.equal(null);
  });

  it('addZero', () => {
    expect(MyTools.addZero('3')).to.equal('03');
    expect(MyTools.addZero('11')).to.equal('11');
  });

  it('mapGetData', () => {
    const A = {a: '', 'b': '', d: '', e: null, f: 'is f'};
    const B = {a: 'isa', 'b': 'isB', 'c': 'isc', d: null, e: {e: 'ise'}};
    MyTools.mapGetData(A, B);
    expect(A.a).to.equal('isa');
    expect(A.c).to.equal(undefined);
    expect(A.d).to.equal(null);
    expect(A.e.e).to.equal('ise');
    B.e = {e: 'is new e'};
    expect(A.e.e).to.equal('ise');
    expect(A.f).to.equal('is f');

    expect(MyTools.mapGetData(null, B)).to.not.be.ok;
    expect(MyTools.mapGetData({}, B)).to.be.ok;
  });

  it('cloneObjA', () => {
    const A = {a: 'isa', 'b': 'isB', 'c': {'t': 'at'}};
    let B = MyTools.cloneObj(A);
    B.c = {'t': 'bt'};
    expect(A.a).to.equal(B.a);
    expect(A.c.t).to.equal('at');

    let C = MyTools.cloneObj(A, true);
    C.c = {'t': 'bt'};
    expect(A.a).to.equal(C.a);
    expect(A.c.t).to.equal('at');

    expect(MyTools.cloneObj(3)).to.equal(undefined);

  });


  it('moment ', () => {
    expect(moment('2017-12-25').format()).to.equal('2017-12-25');
    expect(moment('2016-12-20').add(1, 'years').format())
      .to.equal('2017-12-20');
    expect(moment('2017-01-20').add(3, 'days').format())
      .to.equal('2017-01-23');
    expect(moment('2016-12-20').add(1, 'months').format())
      .to.equal('2017-01-20');
    expect(moment('2016-12-20').isValid())
      .to.equal(true);
    try {
      moment('2016-12-20').add(1, '2')
    } catch (e) {

    }
  })
});
