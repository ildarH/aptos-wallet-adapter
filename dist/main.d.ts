import { App } from 'vue';
import { default as WalletItem } from './components/WalletItem.vue';
import { default as WalletConnectButton } from './components/base/WalletConnectButton.vue';
import { default as WalletIcon } from './components/base/WalletIcon.vue';
import { default as WalletName } from './components/base/WalletName.vue';
import { default as WalletInstallLink } from './components/base/WalletInstallLink.vue';
import { default as AptosLogo } from './components/icons/AptosLogo.vue';
import { default as AptosPrivacyPolicy } from './components/pp/AptosPrivacyPolicy.vue';
import { default as Disclaimer } from './components/pp/Disclaimer.vue';
import { default as Link } from './components/pp/Link.vue';
import { default as PoweredBy } from './components/pp/PoweredBy.vue';

declare const _default: {
    install: (app: App) => void;
};
export default _default;
export { WalletItem, WalletConnectButton, WalletIcon, WalletName, WalletInstallLink, AptosLogo, AptosPrivacyPolicy, Disclaimer, Link, PoweredBy, };
