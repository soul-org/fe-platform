import { FaRegClipboard } from 'react-icons/fa';

interface RowProps {
    title: string;
    columns: Array<Column>;
}

interface Column {
    title: string;
    value: string;
    copy?: boolean;
}


export const Row = ({ title, columns }: RowProps) => (
    <div className="flex flex-col border-b-2 border-[#444444]">
        <span className="p-4 bg-[#FFFFFF0D] text-lg">{title}</span>
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