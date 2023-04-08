import { ethers } from "ethers";
import {
  GelatoRelayAdapter,
  MetaTransactionOptions,
} from "@safe-global/relay-kit";
import Safe from "@safe-global/safe-core-sdk";
import {
  MetaTransactionData,
  OperationType,
} from "@safe-global/safe-core-sdk-types";

const GELATO_RELAY_API_KEY = "";

//  1 Balance
/// https://docs.gelato.network/developer-services/relay/payment-and-fees/1balance
/// Need USDC on polygon or GETH on goerli , single gas fees to send tx on any chain

// Sync Fee
// Funds from the contract are used to pay for the gas

export default function relay() {
  const targetContractAddress = "";
  const chainId = 5;
  const options = {
    gasLimit: ethers.BigNumber.from(gasLimit),
    isSponsored: true,
  };
  const prepareTransactionData = () => {};

  const sendTransaction1Balance = async () => {
    const relayAdapter = new GelatoRelayAdapter(GELATO_RELAY_API_KEY);

    // we need to get the encoded tx data
    const relayTransaction = {
      target: targetContractAddress,
      encodedTransaction: encodedTx,
      chainId,
      options,
    };
    const response = await relayAdapter.relayTransaction(relayTransaction);

    console.log(
      `Relay Transaction Task ID: https://relay.gelato.digital/tasks/status/${response.taskId}`
    );
  };

  const sendTransactionSyncFee = async () => {
    const relayAdapter = new GelatoRelayAdapter();

    // we need to get the encoded tx data
    const relayTransaction = {
      target: targetContractAddress,
      encodedTransaction: encodedTx,
      chainId,
    };
    const response = await relayAdapter.relayTransaction(relayTransaction);

    console.log(
      `Relay Transaction Task ID: https://relay.gelato.digital/tasks/status/${response.taskId}`
    );
  };
}
