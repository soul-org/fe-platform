import { Row } from './Row';

export default function InterestRates() {
    return (
        <>
            <Row
                title="Interest Rates"
                columns={[
                    { title: "Bonus Rewards", value: "9.6% APR" },
                    { title: "TVL", value: "$1.3M" },
                    { title: "7D Prize Pool Contribution", value: "0.513 WETH" },
                ]}
            />
        </>
    );
}