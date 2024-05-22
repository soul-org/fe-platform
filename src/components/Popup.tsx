import { useState } from "react";
import { FaX } from "react-icons/fa6";

interface Props {
  title: string;
  button: string;
  onClick: () => void;
}

export default function Popup({ title, onClick, button }: Props) {
  const [amount, setAmount] = useState<number>();

  return (
    <div className="justify-center items-center flex fixed inset-0 z-50 bg-black bg-opacity-60">
      <div className="p-4 flex flex-col justify-center items-center bg-[#0F0F0F] rounded-lg w-[25%] min-w-[300px]">
        <button type="button" className="self-end" onClick={() => onClick()}>
          <FaX />
        </button>
        <span className="text-xl font-bold m-2">{title}</span>
        <div className="flex flex-col bg-[#151515] border-2 border-[#363636] rounded-lg w-full p-4 m-2">
          <div className="flex flex-row justify-between text-2xl font-semibold my-2">
            <input
              type="text"
              className="bg-[#151515] border-0 focus:outline-none w-[50%]"
              onChange={(e) => setAmount(Number(e.target.value))}
              placeholder="0"
            />
            <div className="flex">
              <img src="/avalanche.svg" className="w-10 mx-1" alt="Avalanche Logo" />
              <span>AVAX</span>
            </div>
          </div>
          <div className="flex flex-row justify-between text-lg my-2">
            <span>$0</span>
            <div className="flex">
              <span className="mx-2">Balance: 0</span>
              <button type="button" className="text-[#F66A35]">
                MAX
              </button>
            </div>
          </div>
        </div>
        {!amount ? (
          <button
            type="button"
            className="w-full border-2 border-[#F66A35] text-[#F66A35] m-3 rounded-lg p-2 text-lg"
            disabled
          >
            Enter Amount
          </button>
        ) : (
          <>
            <div className="flex w-full justify-between h-[100px] mt-1 mb-4">
              <div className="flex flex-col justify-between">
                <div className="flex flex-col grow justify-center">
                  <div className="flex justify-between">
                    <span>Deposit</span>
                    <span>$0.14</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Withdraw</span>
                    <span>$0.06</span>
                  </div>
                </div>
                <span>Estimated Transaction Fees</span>
              </div>
              <div className="flex flex-col justify-between items-center">
                <span className="grow content-center text-xl font-semibold">1 in 256</span>
                <span>Estimated Transaction Fees</span>
              </div>
            </div>
            <button type="button" className="w-full bg-[#F66A35] rounded-lg p-2 text-lg m-3" onClick={() => onClick()}>
              {button}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
