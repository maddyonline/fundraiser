const FundraiserContract = artifacts.require("Fundraiser");

contract("Fundraiser", accounts => {
    let fundraiser;
    const name = "My Fundraiser";

    describe("initialization", () => {
        beforeEach(async () => {
            fundraiser = await FundraiserContract.new(name);
        });

        it("gets the beneficiary name", async () => {
            const actualName = await fundraiser.name();
            assert.equal(actualName, name);
        });
    });
});