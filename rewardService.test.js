const rewardService = require('./rewardService');
const mockData = require('./constants');

describe('Rewards service', () => {
    describe('Eligibility check should return correct status', () => {
        it('should return CUSTOMER_INELIGIBLE when customer is ineligible', () => {
            const eligibilityCheck = mockData.eligibilityService('12345');
            expect(eligibilityCheck).toEqual(mockData.ineligible);
        });
    
        it('should return Technical failure exception when customer is not found in database', () => {
            const eligibilityCheck = mockData.eligibilityService('99999');
            expect(eligibilityCheck).toEqual(mockData.customerNotFound);
        });
    
        it('should return Invalid account number exception when account number is invalid', () => {
            const eligibilityCheck = mockData.eligibilityService('999sds');
            expect(eligibilityCheck).toEqual(mockData.inValidAccount);
        });
    
        it('should return CUSTOMER_ELIGIBLE when customer is eligible', () => {
            const eligibilityCheck = mockData.eligibilityService('67894');
            expect(eligibilityCheck).toEqual(mockData.eligible);
        });
    });
    describe('Reward service should return correct information', () => {
        it('should return no rewards when customer is ineligible', () => {
            const rewardStatus = rewardService({customerAccountNumber: '12345', portfolio: mockData.portfolio, eligibilityService: mockData.eligibilityService });
            expect(rewardStatus).toEqual(mockData.noRewards);
        });
    
        it('should return no rewards when customer is not found in the database', () => {
            const rewardStatus = rewardService({customerAccountNumber: '99999', portfolio: mockData.portfolio, eligibilityService: mockData.eligibilityService });
            expect(rewardStatus).toEqual(mockData.noRewards);
        });
    
        it('should return no rewards when invalid account number is entered', () => {
            const rewardStatus = rewardService({customerAccountNumber: '123sd', portfolio: mockData.portfolio, eligibilityService: mockData.eligibilityService });
            expect(rewardStatus).toEqual(mockData.inValidAccount);
        });
    
        it('should return no rewards when customer is eligible but no not subscribed to any channel that contains rewards', () => {
            const rewardStatus = rewardService({customerAccountNumber: '27894', portfolio: mockData.portfolio, eligibilityService: mockData.eligibilityService });
            expect(rewardStatus).toEqual(mockData.noRewards);
        });
    
        
        it('should return rewards when customer is eligible and subscribed to any channel that contains rewards', () => {
            const rewards = ["KARAOKE_PRO_MICROPHONE", "PIRATES_OF_THE_CARIBBEAN_COLLECTION"];
            const rewardStatus = rewardService({customerAccountNumber: '67262', portfolio: mockData.portfolio, eligibilityService: mockData.eligibilityService });
            expect(rewardStatus).toEqual(rewards);
        });
    
        it('should return rewards when customer is eligible and subscribed to all channel that contains rewards', () => {
            const rewards = ["CHAMPIONS_LEAGUE_FINAL_TICKET","KARAOKE_PRO_MICROPHONE", "PIRATES_OF_THE_CARIBBEAN_COLLECTION"];
            const rewardStatus = rewardService({customerAccountNumber: '67894', portfolio: mockData.portfolio, eligibilityService: mockData.eligibilityService });
            expect(rewardStatus).toEqual(rewards);
        });
    });
})
