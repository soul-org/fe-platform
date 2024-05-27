import { useState } from "react";
import { FaRegClipboard } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import Popup from "../components/Popup";

export default function Pool() {
  const [isDepositModalDisplayed, setDisplayDepositdModal] = useState<boolean>(false);
  const [isWithdrawModalDisplayed, setDisplayWithdrawModal] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-row w-full m-10">
        <div className="flex w-[12%]">
          <div className="flex flex-row w-full justify-end items-center h-[50px]">
            <FaArrowLeftLong />
            <span className="mx-4">POOLS</span>
          </div>
        </div>
        <div className="grow mx-10">
          <div className="flex justify-between items-end w-[25%]">
            <img src="/avalanche.svg" className="h-12" alt="Avalanche Logo" />
            <span className="text-5xl font-bold mx-4">Avalanche</span>
            <span className="text-xs bg-[#FFFFFF0D] rounded-2xl px-3 py-1 my-2">AVAX</span>
          </div>
          <div className="flex flex-col my-12">
            <Row
              title="Account Info"
              columns={[
                { title: "Your Balance", value: "$34,998" },
                { title: "Your Win Chance", value: "1 in 256" },
                { title: "Prize Yield", value: "6.7% APR" },
              ]}
            />
            <Row
              title="Interest Rates"
              columns={[
                { title: "Bonus Rewards", value: "9.6% APR" },
                { title: "TVL", value: "$1.3M" },
                { title: "7D Prize Pool Contribution", value: "0.513 WETH" },
              ]}
            />
            <Row
              title="Pool Information"
              columns={[
                { title: "Deposit Token | MATIC", value: "0x0b2c...Ff85", copy: true },
                { title: "Prize Token", value: "0x0b2c...Ff85", copy: true },
                { title: "Vault Owner", value: "0x0b2c...Ff85", copy: true },
              ]}
            />
            <div className="flex flex-row justify-between p-6 w-full bg-[#FFFFFF05] border-b-2 border-[#444444]">
              <span className="text-lg">Yield Source</span>
              <a href="app.soul.com" className="text-[#F66A35] underline">
                app.soul.com
              </a>
            </div>
          </div>
          <div className="flex flex-row m-2 justify-center">
            <button
              className="bg-[#F66A35] rounded-lg p-2 m-2 w-[150px] text-lg"
              type="button"
              onClick={() => setDisplayDepositdModal(true)}
            >
              Deposit
            </button>
            <button
              type="button"
              className="border-2 border-[#F66A35] text-[#F66A35] m-2 rounded-lg p-2 w-[150px] text-lg"
              onClick={() => setDisplayWithdrawModal(true)}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
      {isDepositModalDisplayed ? (
        <Popup title="Deposit AVAX on Avalanche" button="Deposit" onClick={() => setDisplayDepositdModal(false)} />
      ) : null}
      {isWithdrawModalDisplayed ? (
        <Popup title="Withdraw AVAX from Avalanche" button="Withdraw" onClick={() => setDisplayWithdrawModal(false)} />
      ) : null}
    </>
  );
}

interface Column {
  title: string;
  value: string;
  copy?: boolean;
}

interface RowProps {
  title: string;
  columns: Array<Column>;
}

const Row = ({ title, columns }: RowProps) => (
  <div className="flex flex-col border-b-2 border-[#444444]">
    <span className="p-6 bg-[#FFFFFF0D] text-lg">{title}</span>
    <div className="flex flex-row justify-between px-6 py-8 bg-[#FFFFFF05]">
      {columns.map((col) => (
        <div key={col.title} className="flex flex-col flex-[33%]">
          <span className="text-lg my-1">{col.title}</span>
          <div className="flex flex-row items-center">
            <span className="font-bold text-xl">{col.value}</span>
            {col.copy ? (
              <button type="button" className="mx-5 text-xl text-[#F66A35]">
                <FaRegClipboard />
              </button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  </div>
);
