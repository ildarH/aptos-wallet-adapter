import { AccountAuthenticator, AccountInfo, AnyRawTransaction, AptosChangeNetworkOutput, AptosStandardSupportedWallet, AvailableWallets, InputGenerateTransactionOptions, InputSubmitTransactionData, InputTransactionData, Network, NetworkInfo, PendingTransactionResponse, SignMessagePayload, SignMessageResponse, Types, Wallet, WalletInfo, WalletName } from '@aptos-labs/wallet-adapter-core';
import { Ref, ComputedRef } from 'vue';

export interface WalletContextState {
    connected: ComputedRef<boolean>;
    isLoading: ComputedRef<boolean>;
    account: ComputedRef<AccountInfo | null>;
    network: ComputedRef<NetworkInfo | null>;
    wallet: ComputedRef<WalletInfo | null>;
    wallets?: Ref<ReadonlyArray<Wallet | AptosStandardSupportedWallet>>;
    autoConnect: Ref<boolean>;
    connect(walletName: WalletName): void;
    disconnect(): void;
    signAndSubmitTransaction(transaction: InputTransactionData): Promise<any>;
    signTransaction(transactionOrPayload: AnyRawTransaction | Types.TransactionPayload, asFeePayer?: boolean, options?: InputGenerateTransactionOptions): Promise<AccountAuthenticator>;
    submitTransaction(transaction: InputSubmitTransactionData): Promise<PendingTransactionResponse>;
    signMessage(message: SignMessagePayload): Promise<SignMessageResponse>;
    signMessageAndVerify(message: SignMessagePayload): Promise<boolean>;
    changeNetwork(network: Network): Promise<AptosChangeNetworkOutput>;
}
export interface AptosWalletProviderProps {
    plugins?: ReadonlyArray<Wallet>;
    optInWallets?: ReadonlyArray<AvailableWallets>;
    dappConfig?: {
        network: Network;
    };
    onError?: (error: any) => void;
}
/**
 *
 * @param {AptosWalletProviderProps} props - Optional object with properties for
 * configuring the wallet adapter.
 * @return {WalletContextState}
 */
export declare function useWallet(props?: AptosWalletProviderProps): WalletContextState;
