import { useState } from "react";
import AccountInfo from '../components/AccountInfo';
import Button from '../components/Button';
import InterestRates from '../components/InterestRates';
import Navbar from '../components/Navbar';
import PoolInformation from '../components/PoolInformation';
import Popup from "../components/Popup";
import YieldSource from '../components/YieldSource';

export default function Pool() {
  const [isDepositModalDisplayed, setDisplayDepositdModal] = useState<boolean>(false);
  const [isWithdrawModalDisplayed, setDisplayWithdrawModal] = useState<boolean>(false);

  return (
    <>
      <div className="w-full">
        <Navbar title='Pools' />
        <div className="flex flex-row m-10">
          <div className="grow mx-10">
            <div className="flex justify-between items-end w-[10%]">
              <img src="/avalanche.svg" className="h-10" alt="Avalanche Logo" />
              <span className="text-3xl font-bold mx-4">Avalanche</span>
              <span className="text-xs bg-[#FFFFFF0D] rounded-2xl px-3 py-1 my-3">AVAX</span>
            </div>
            <div className="flex flex-col my-12">
              <AccountInfo />
              <InterestRates />
              <PoolInformation />
              <YieldSource />
            </div>
            <div className="flex flex-row m-2 justify-center">
              <Button
                className="bg-[#F66A35] rounded-lg p-2 m-2 w-[150px] text-lg"
                onclick={() => setDisplayDepositdModal(true)}
              >
                Deposit
              </Button>
              <Button
                className="border-2 border-[#F66A35] text-[#F66A35] m-2 rounded-lg p-2 w-[150px] text-lg"
                onclick={() => setDisplayWithdrawModal(true)}
              >
                Withdraw
              </Button>
            </div>
          </div>
        </div>
        {isDepositModalDisplayed ? (
          <Popup title="Deposit AVAX on Avalanche" button="Deposit" onClick={() => setDisplayDepositdModal(false)} />
        ) : null}
        {isWithdrawModalDisplayed ? (
          <Popup title="Withdraw AVAX from Avalanche" button="Withdraw" onClick={() => setDisplayWithdrawModal(false)} />
        ) : null}
      </div>
    </>
  );
}