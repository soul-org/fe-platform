import { Row } from './Row';

export default function PoolInformation() {
    return (
        <>
            <Row
                title="Pool Information"
                columns={[
                    { title: "Deposit Token | AVAX", value: "0x0b2c...Ff85", copy: true },
                    { title: "Prize Token", value: "0x0b2c...Ff85", copy: true },
                    { title: "Vault Owner", value: "0x0b2c...Ff85", copy: true },
                ]}
            />
        </>
    );
}