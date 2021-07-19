# Assumptions
* Customer account number - Only include number and should not be more than 5 digits
* LoyaltyEnrolled - customer has enrolled to loyalty programme , only no defaultor customers are eligible
* Last3MonthPaidBill - customer has paid bill regularly since last 3 months or not ?
* Eligible customer - Should have loyaltyenrolled and should have paid bill since last 3 months

# Data is placed in contants.js
There are 3 tables
* Customer table contains customer data and its eligibility parameters
* Portfolio table contains data of all customer and their subscribed channels
* ChannelRewardsLookup contains mapping of channels and rewards

# rewardService.test file contains different scenarios that tests the code
    - npm run test will run all test cases