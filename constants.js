const eligibilityService = customerAccountNumber => {
    const accountCheck = /^\d{5}$/;
    if (accountCheck.test(customerAccountNumber)){
        const foundCustomer = data.customer.find(customer => (customer.accountNumber === customerAccountNumber));
        if (foundCustomer) {
            if(foundCustomer.last3MonthPaidBill && foundCustomer.loyaltyEnrolled) {
                return data.eligible;
            }
            return data.ineligible;
        }
        return data.customerNotFound;
    }
    return data.inValidAccount;
};
const data = {
    customer: [
        {
            accountNumber: '12345',
            last3MonthPaidBill: false,
            loyaltyEnrolled: false,
        },
        {
            accountNumber: '78279',
            last3MonthPaidBill: true,
            loyaltyEnrolled: false,
        },
        {
            accountNumber: '67262',
            last3MonthPaidBill: true,
            loyaltyEnrolled: true
        },
        {
            accountNumber: '21345',
            last3MonthPaidBill: true,
            loyaltyEnrolled: false
        },
        {
            accountNumber: '27894',
            last3MonthPaidBill: true,
            loyaltyEnrolled: true
        },
        {
            accountNumber: '79879',
            last3MonthPaidBill: true,
            loyaltyEnrolled: true
        },
        {
            accountNumber: '87987',
            last3MonthPaidBill: true,
            loyaltyEnrolled: false
        },
        {
            accountNumber: '87988',
            last3MonthPaidBill: true,
            loyaltyEnrolled: false
        },
        {
            accountNumber: '87908',
            last3MonthPaidBill: true,
            loyaltyEnrolled: true
        },
        {
            accountNumber: '67894',
            last3MonthPaidBill: true,
            loyaltyEnrolled: true
        },
    ],
    portfolio: [
        {
            accountNumber: '12345',
            channels: ['sports', 'kids', 'Sky One'],
        },
        {
            accountNumber: '78279',
            channels: ['music', 'news', 'movies'],
        },
        {
            accountNumber: '67262',
            channels: ['movies', 'kids', 'Sky One', 'music'],
        },
        {
            accountNumber: '21345',
            channels: ['sports', 'kids', 'movies', 'music', 'NEWS'],
        },
        {
            accountNumber: '27894',
            channels: ['arts', 'living', 'Sky One'],
        },
        {
            accountNumber: '79879',
            channels: ['kids', 'movies', 'fox'],
        },
        {
            accountNumber: '87987',
            channels: ['Comedy Central', 'kids', 'news'],
        },
        {
            accountNumber: '87988',
            channels: ['movies', 'news', 'music', 'sports'],
        },
        {
            accountNumber: '87908',
            channels: ['news'],
        },
        {
            accountNumber: '67894',
            channels: ['news', 'movies', 'music', 'sports', 'kids'],
        },
    ],
    channelRewardsLookup: [
        {
            channel: 'SPORTS',
            reward:  'CHAMPIONS_LEAGUE_FINAL_TICKET',
        },
        {
            channel: 'KIDS',
            reward: 'N/A',
        },
        {
            channel: 'MUSIC',
            reward:'KARAOKE_PRO_MICROPHONE',
        },
        {
            channel: 'NEWS',
            reward: 'N/A',
        },
        {
            channel: 'MOVIES',
            reward: 'PIRATES_OF_THE_CARIBBEAN_COLLECTION',
        },
    ],
    eligible: 'CUSTOMER_ELIGIBLE',
    ineligible: 'CUSTOMER_INELIGIBLE',
    inValidAccount: 'Invalid account number exception',
    customerNotFound: 'Technical failure exception',
    noRewards: 'No rewards',
    eligibilityService,
}

module.exports = data;