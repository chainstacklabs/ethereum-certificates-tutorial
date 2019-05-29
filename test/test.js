const DocStamp = artifacts.require('./DocStamp.sol')

contract('DocStamp', function(accounts) {
  it('should issue a certificate', async function() {
    const account = accounts[0]

    try {
      const instance = await DocStamp.deployed()

      await instance.issueCertificate("rahul", "developer")

      const authority = await instance.owningAuthority()
      assert.equal(authority, account)
    } catch(error) {
      assert.equal(error, undefined)
    }
  })

  it('should verify a certificate', async function() {
    const account = accounts[0]

    try {
      const instance = await DocStamp.deployed()

      const verified = await instance.verifyCertificate("rahul", "developer", "0x3893c7e8b4091794fa54e4b22cc506042f2b00e07d965aa3927aff7f12163955")

      assert.equal(verified, true)
    } catch(error) {
      assert.equal(error, undefined)
    }
  })


})

