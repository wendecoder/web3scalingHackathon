# **WE LAUNCH**

Our platform empowers users to pool their resources together in vaults, fostering a collaborative investment environment. Here's what you need to know about vault pooling and participation:

**1. Predefined Vaults:** We offer three predefined vaults corresponding to our higher tiers: Silver, Gold, and Diamond. Each vault is strategically curated to provide users with tailored investment opportunities, particularly focused on IDO events.

**2. Tier-Based Access:** Users can choose to deposit their funds into the vault that corresponds to their desired tier level: Silver, Gold, or Diamond. Each tier offers varying levels of benefits and opportunities for participating in exclusive IDO events.

**3. Collective Participation:** Depositing funds into a vault enables users to participate collectively in IDO events. When an IDO event occurs, users within the vault will collectively join the sale, leveraging pooled resources for potentially greater investment power and increased chances of allocation.

**SETUP**

**1. CLone this repo**

```bash
git clone https://github.com/wendecoder/web3scalingHackathon.git
```

**2. Go to the project folder and then test folder**

```bash
cd web3scalingHackathon/test
```

**3. Run the tests with your test explorer**

**4. Create .env file**

```bash
touch .env && \
echo 'MNEMONIC="here is where your extracted twelve words mnemonic phrase should be put"' >> .env && \
echo 'PRIVATE_KEY="****************************************************"' >> .env && \
echo 'POKT_API_KEY="********************************"' >> .env && \
echo 'INFURA_API_KEY="********************************"' >> .env && \
echo 'INFURA_API_SECRET="********************************"' >> .env && \
echo 'ALCHEMY_API_KEY="EVf9FlS72e383snl7AY685-SVSqOzr97"' >> .env && \
echo 'ETHERSCAN_API_KEY="********************************"' >> .env && \
echo 'WE_LAUNCH_CONTRACT_ADDRESS="***************************************"' >> .env && \
echo 'VAULT1_CONTRACT_ADDRESS="******************************************"' >> .env
```

**5. Go to the scripts folder**

```bash
cd scripts
```

**6 Run the scripts**

```bash
npx hardhat run --network etherlinkTest scripts/deployLaunchpad.ts
```

---

Feel free to intract with other scripts.