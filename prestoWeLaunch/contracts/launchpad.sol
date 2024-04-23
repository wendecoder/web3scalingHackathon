pragma solidity ^0.8.0;

// SPDX-License-Identifier: UNLICENSED

import "./Ownable/Ownable.sol";

//SeedifyFundsContract

contract LaunchContract is Ownable {

  //token attributes
  string public constant NAME = "WeLaunch.funds"; //name of the contract
  uint public immutable maxCap; // Max cap in Eth
  uint256 public immutable saleStartTime; // start sale time
  uint256 public immutable saleEndTime; // end sale time
  uint256 public totalEthReceivedInAllTier = 0; // total eth received
  uint256 public totalEthInTierOne; // total Eth for tier one
  uint256 public totalEthInTierTwo; // total Eth for tier Tier
  uint256 public totalEthInTierThree; // total Eth for tier Three
  uint256 public totalEthInTierFour;  // total Eth for tier Four

  uint public totalparticipants; // total participants in ido
  address payable public projectOwner; // project Owner
  
  // max cap per tier
  uint public tierOneMaxCap;
  uint public tierTwoMaxCap;
  uint public tierThreeMaxCap;
  uint public tierFourMaxCap; 

  
  //total users per tier
  uint public totalUserInTierOne;
  uint public totalUserInTierTwo;
  uint public totalUserInTierThree;
  uint public totalUserInTierFour;
  
  //max allocations per user in a tier
  uint public maxAllocaPerUserTierOne;
  uint public maxAllocaPerUserTierTwo; 
  uint public maxAllocaPerUserTierThree;
  uint public maxAllocaPerUserTierFour;
 
  
   //min allocation per user in a tier
  uint public minAllocaPerUserTierOne;
  uint public minAllocaPerUserTierTwo; 
  uint public minAllocaPerUserTierThree;
  uint public minAllocaPerUserTierFour;
 
 
  // address array for tier one whitelist
  address[] private whitelistTierOne; 
  
  // address array for tier two whitelist
  address[] private whitelistTierTwo; 
  
  // address array for tier three whitelist
  address[] private whitelistTierThree; 
  
      // address array for tier Four whitelist
  address[] private whitelistTierFour;
  

  //mapping the user purchase per tier
  mapping(address => uint) public buyInOneTier;
  mapping(address => uint) public buyInTwoTier;
  mapping(address => uint) public buyInThreeTier;
  mapping(address => uint) public buyInFourTier;

  //mapping the user purchase per tier
  mapping(address => uint) public minBuyInOneTier;
  mapping(address => uint) public minBuyInTwoTier;
  mapping(address => uint) public minBuyInThreeTier;
  mapping(address => uint) public minBuyInFourTier;
 

  // CONSTRUCTOR  
  constructor(uint _maxCap, uint256 _saleStartTime, uint256 _saleEndTime, address payable _projectOwner,
               uint256 _tierOneValue, uint256 _tierTwoValue, uint256 _tierThreeValue,uint256 _tierFourValue
               ) {
    maxCap = _maxCap;
    saleStartTime = _saleStartTime;
    saleEndTime = _saleEndTime;
    
    projectOwner = _projectOwner;
    tierOneMaxCap =_tierOneValue;
    tierTwoMaxCap = _tierTwoValue;
    tierThreeMaxCap =_tierThreeValue;
    tierFourMaxCap =_tierFourValue;
    
    minAllocaPerUserTierOne = 0.01 ether;
    minAllocaPerUserTierTwo = 0.1 ether;
    minAllocaPerUserTierThree = 1 ether;
    minAllocaPerUserTierFour = 5 ether;
 
    maxAllocaPerUserTierOne = 0.5 ether;
    maxAllocaPerUserTierTwo = 8 ether; 
    maxAllocaPerUserTierThree = 16 ether;
    maxAllocaPerUserTierFour = 24 ether;
  }

  // function to update the tiers value manually
  function updateTierValues(uint256 _tierOneValue, uint256 _tierTwoValue, uint256 _tierThreeValue , uint256 _tierFourValue
                          ) external onlyOwner {
    tierOneMaxCap =_tierOneValue;
    tierTwoMaxCap = _tierTwoValue;
    tierThreeMaxCap =_tierThreeValue;
    tierFourMaxCap = _tierFourValue;
  }

  //add the address in Whitelist tier One to invest
  function addWhitelistOne(address _address) external onlyOwner {
    require(_address != address(0), "Invalid address");
    whitelistTierOne.push(_address);
  }

  //add the address in Whitelist tier two to invest
  function addWhitelistTwo(address _address) external onlyOwner {
    require(_address != address(0), "Invalid address");
    whitelistTierTwo.push(_address);
  }

  //add the address in Whitelist tier three to invest
  function addWhitelistThree(address _address) external onlyOwner {
    require(_address != address(0), "Invalid address");
    whitelistTierThree.push(_address);
  }
  
   //add the address in Whitelist tier Four to invest
  function addWhitelistFour(address _address) external onlyOwner {
    require(_address != address(0), "Invalid address");
    whitelistTierFour.push(_address);
  }
  

  // check the address in whitelist tier one
  function getWhitelistOne(address _address) public view returns(bool) {
    uint i;
    uint length = whitelistTierOne.length;
    for (i = 0; i < length; i++) {
      address _addressArr = whitelistTierOne[i];
      if (_addressArr == _address) {
        return true;
      }
    }
    revert("Address not found");
  }

  // check the address in whitelist tier two
  function getWhitelistTwo(address _address) public view returns(bool) {
    uint i;
    uint length = whitelistTierTwo.length;
    for (i = 0; i < length; i++) {
      address _addressArr = whitelistTierTwo[i];
      if (_addressArr == _address) {
        return true;
      }
    }
    revert("Address not found");
  }

  // check the address in whitelist tier three
  function getWhitelistThree(address _address) public view returns(bool) {
    uint i;
    uint length = whitelistTierThree.length; 
    for (i = 0; i < length; i++) {
      address _addressArr = whitelistTierThree[i];
      if (_addressArr == _address) {
        return true;
      }
    }
    revert("Address not found");
  }
  
      // check the address in whitelist tier Four
  function getWhitelistFour(address _address) public view returns(bool) {
    uint i;
    uint length = whitelistTierFour.length; 
    for (i = 0; i < length; i++) {
      address _addressArr = whitelistTierFour[i];
      if (_addressArr == _address) {
        return true;
      }
    }
    revert("Address not found");
  }
  
    /**
     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to
     * `recipient`, forwarding all available gas and reverting on errors.
     *
     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost
     * of certain opcodes, possibly making contracts go over the 2300 gas limit
     * imposed by `transfer`, making them unable to receive funds via
     * `transfer`. {sendValue} removes this limitation.
     *
     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].
     *
     * IMPORTANT: because control is transferred to `recipient`, care must be
     * taken to not create reentrancy vulnerabilities. Consider using
     * {ReentrancyGuard} or the
     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].
     */
    function sendValue(address payable recipient, uint256 amount) internal {
        require(address(this).balance >= amount, "Address: insufficient balance");

        // solhint-disable-next-line avoid-low-level-calls, avoid-call-value
        (bool success, ) = recipient.call{ value: amount }("");
        require(success, "Address: unable to send value, recipient may have reverted");
    }
 
  // send Eth to the contract address
  receive() external payable {

     require(block.timestamp >= saleStartTime, "The sale is not started yet "); // solhint-disable
     require(block.timestamp <= saleEndTime, "The sale is closed"); // solhint-disable
     require(totalEthReceivedInAllTier + msg.value <= maxCap, "buyTokens: purchase would exceed max cap");

    if (getWhitelistOne(msg.sender)) { 
      minBuyInOneTier[msg.sender] += msg.value;
      require(minBuyInOneTier[msg.sender] >= minAllocaPerUserTierOne , "your purchasing Power is so Low") ;   
      require(totalEthInTierOne + msg.value <= tierOneMaxCap, "buyTokens: purchase would exceed Tier one max cap");
      require(buyInOneTier[msg.sender] + msg.value <= maxAllocaPerUserTierOne ,"buyTokens:You are investing more than your tier-1 limit!");

      buyInOneTier[msg.sender] += msg.value;
      totalEthReceivedInAllTier += msg.value;
      totalEthInTierOne += msg.value;
      sendValue(projectOwner, address(this).balance);     
      
    } else if (getWhitelistTwo(msg.sender)) {
      minBuyInTwoTier[msg.sender] += msg.value;
      require( minBuyInTwoTier[msg.sender]  >= minAllocaPerUserTierTwo , "your purchasing Power is so Low") ;   
      require(totalEthInTierTwo + msg.value <= tierTwoMaxCap, "buyTokens: purchase would exceed Tier two max cap");
      require(buyInTwoTier[msg.sender] + msg.value <= maxAllocaPerUserTierTwo ,"buyTokens:You are investing more than your tier-2 limit!");

      buyInTwoTier[msg.sender] += msg.value;
      totalEthReceivedInAllTier += msg.value;
      totalEthInTierTwo += msg.value;
      sendValue(projectOwner, address(this).balance);     
    } else if (getWhitelistThree(msg.sender)) { 
      minBuyInThreeTier[msg.sender] += msg.value;
      require( minBuyInThreeTier[msg.sender] >= minAllocaPerUserTierThree , "your purchasing Power is so Low") ;   
      require(buyInThreeTier[msg.sender] + msg.value <= maxAllocaPerUserTierThree ,"buyTokens:You are investing more than your tier-3 limit!");
      require(totalEthInTierThree + msg.value <= tierThreeMaxCap, "buyTokens: purchase would exceed Tier three max cap");
     
      buyInThreeTier[msg.sender] += msg.value;
      totalEthReceivedInAllTier += msg.value;
      totalEthInTierThree += msg.value;
      sendValue(projectOwner, address(this).balance);
      
    } else if (getWhitelistFour(msg.sender)) { 
      minBuyInFourTier[msg.sender] += msg.value;
      require( minBuyInFourTier[msg.sender] >= minAllocaPerUserTierFour , "your purchasing Power is so Low") ;   
      require(totalEthInTierFour + msg.value <= tierFourMaxCap, "buyTokens: purchase would exceed Tier Four max cap");
      require(buyInFourTier[msg.sender] + msg.value <= maxAllocaPerUserTierFour ,"buyTokens:You are investing more than your tier-4 limit!");
      buyInFourTier[msg.sender] += msg.value;
      totalEthReceivedInAllTier += msg.value;
      totalEthInTierFour += msg.value;
      sendValue(projectOwner, address(this).balance);
      
    }else {
      revert();
    }
  }
}