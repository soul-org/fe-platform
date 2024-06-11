import { Address } from 'viem';

export function shortenAddress(address?: string | Address, prefixLength: number = 6, postfixLength: number = 4): string {
    if (!address) return '';

    const prefix = address.slice(0, prefixLength);
    const postfix = address.slice(-postfixLength);

    return `${prefix}...${postfix}`;
}