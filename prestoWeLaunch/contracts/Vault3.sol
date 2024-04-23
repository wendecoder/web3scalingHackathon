// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Vault3 {
    address public immutable owner;
    // IERC20 public immutable token;
    address public launchpadContract;

    address[] public participants; // Array to store participant addresses
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    address public allowedToTransfer;

    uint256 public TOTAL_PARTICIPANTS = 0;
    uint256 public constant MAX_PARTICIPANTS = 100;
    uint256 public constant MIN_DEPOSIT = 0.08 ether;
    uint256 public constant MAX_DEPOSIT = 0.12 ether;

    
    constructor(address _launchpadContract) {
        owner = msg.sender;
        launchpadContract = _launchpadContract;
    }

    function _mint(address _to, uint256 _shares) private {
        totalSupply += _shares;
        balanceOf[_to] += _shares;
        TOTAL_PARTICIPANTS += 1;
        participants.push(_to);
        if(TOTAL_PARTICIPANTS == MAX_PARTICIPANTS) {
            allowedToTransfer = getAddressWithHighestShare();
        }
    }

    function _burn(address _from, uint256 _shares) private {
        totalSupply -= _shares;
        balanceOf[_from] -= _shares;
    }

    function deposit() external payable {
        require(balanceOf[msg.sender] == 0, "User has already deposited");
        require(
            msg.value >= MIN_DEPOSIT && msg.value <= MAX_DEPOSIT,
            "Invalid deposit amount"
        );
        require(
            TOTAL_PARTICIPANTS <= MAX_PARTICIPANTS,
            "Vault is full, cannot accept more deposits"
        );
        uint256 shares = msg.value;
        _mint(msg.sender, shares);
    }


    function getAddressWithHighestShare() public view returns (address) {
        require(TOTAL_PARTICIPANTS == MAX_PARTICIPANTS, "Subscription not ended");

        address highestShareAddress = participants[0]; // Initialize with the first participant
        uint256 highestShare = balanceOf[participants[0]]; // Initialize with the balance of the first participant

        for (uint256 i = 1; i < participants.length; i++) { // Start from index 1
            address participant = participants[i];
            if (balanceOf[participant] > highestShare) {
                highestShare = balanceOf[participant];
                highestShareAddress = participant;
            }
        }

        return highestShareAddress;
    }

    function transferToLaunchpad() external onlyAllowedToTransfer vaultIsFull {
        require(launchpadContract != address(0), "Launchpad contract not set");
        payable(launchpadContract).transfer(address(this).balance);
    }

    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    modifier onlyAllowedToTransfer() {
        require(allowedToTransfer == msg.sender, "Not allowed to transfer funds");
        _;
    }

    modifier vaultIsFull() {
        require(
            TOTAL_PARTICIPANTS == MAX_PARTICIPANTS,
            "Vault is not full yet"
        );
        _;
    }

}

interface IERC20 {
    function totalSupply() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);

    function transfer(
        address recipient,
        uint256 amount
    ) external returns (bool);

    function allowance(
        address owner,
        address spender
    ) external view returns (uint256);

    function approve(address spender, uint256 amount) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 amount);
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 amount
    );
}
