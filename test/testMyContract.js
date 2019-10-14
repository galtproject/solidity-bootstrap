const MyContract = artifacts.require('./MyContract.sol');

contract('MyContract', () => {
  describe('#foo() method', () => {
    it('should return foo', async function() {
      const myContract = await MyContract.new();

      assert.equal(await myContract.foo(), 'foo');
    });
  });
});
