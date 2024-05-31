import { useAccount, useBalance } from 'wagmi';
import { Row } from './Row';

export default function AccountInfo() {
    const { address } = useAccount();
    const { data, isLoading, error } = useBalance({ address });

    let balance = BigInt(0);

    if (!isLoading) {
        balance = BigInt(data!.value / BigInt(10 * data!.decimals));
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <>
            <Row
                title="Account Info"
                columns={[
                    { title: "Your Balance", value: balance.toString() },
                    { title: "Your Win Chance", value: "1 in 256" },
                    { title: "Prize Yield", value: "6.7% APR" },
                ]}
            />
        </>
    );
}