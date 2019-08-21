const DocStamp = artifacts.require('./DocStamp.sol')

contract('DocStamp', function(accounts) {
  it('should issue a certificate', async function() {
    const account = accounts[0]

    try {
      const instance = await DocStamp.deployed()

      await instance.issueCertificate("John", "graduate")

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

      const verified = await instance.verifyCertificate("John", "graduate", "0x837e31a66aa8eec0d7adfd41f84175803ddcae69afd451598f2672f652b2c153")

      assert.equal(verified, true)
    } catch(error) {
      assert.equal(error, undefined)
    }
  })
})

