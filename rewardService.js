const data = require('./constants');

function rewardsService({ customerAccountNumber, portfolio, eligibilityService }) {
    // Check customer's eligibility status
    const eligibilityCheck = eligibilityService(customerAccountNumber);

    if (eligibilityCheck === data.eligible) {
        //Find customer's subscribed channels
        const { channels } = portfolio.find(customer => customer.accountNumber === customerAccountNumber);
        
        //Fetch rewards based on customer's subscribed channels
        const rewards = data.channelRewardsLookup.filter(element => channels.includes(element.channel.toLowerCase()) && element.reward !== 'N/A');
        
        //Return no rewards if 0 rewards are found
        if (rewards.length === 0) {
            return data.noRewards;
        }

        //Return rewards list for eligible customers
        const rewardsList = rewards.map(foo => foo.reward);
        return rewardsList.length > 0 ? rewardsList : data.noRewards;
    }
    if (eligibilityCheck === data.inValidAccount) {
        return data.inValidAccount;
    }
    return data.noRewards;
};

module.exports = rewardsService;