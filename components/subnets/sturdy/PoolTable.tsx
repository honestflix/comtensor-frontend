import React from 'react';

interface Pool {
    pool_id: string;
    base_rate: number;
    base_slope: number;
    kink_slope: number;
    optimal_util_rate: number;
}

interface PoolTableProps {
    pools: Pool[];
}

const PoolTable: React.FC<PoolTableProps> = ({ pools }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-900 py-10">
            <h1 className="text-lg text-gray-400 font-medium">Assets and Pool</h1>
            <div className="flex flex-col mt-4">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden sm:rounded-lg">
                            <table className="min-w-full bg-white border border-gray-300">
                                <thead className="bg-gray-800 text-xs uppercase font-medium">
                                    <tr>
                                        <th className="px-6 py-3 text-left tracking-wider">Pool ID</th>
                                        <th className="px-6 py-3 text-left tracking-wider">Base Rate</th>
                                        <th className="px-6 py-3 text-left tracking-wider">Base Slope</th>
                                        <th className="px-6 py-3 text-left tracking-wider">Kink Slope</th>
                                        <th className="px-6 py-3 text-left tracking-wider">Optimal Util Rate</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-gray-800'>
                                    {pools.map((pool) => (
                                        <tr key={pool.pool_id} className='bg-black bg-opacity-20'>
                                            <td className="px-6 py-4 text-center whitespace-nowrap">{pool.pool_id}</td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap">{pool.base_rate}</td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap">{pool.base_slope}</td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap">{pool.kink_slope}</td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap">{pool.optimal_util_rate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PoolTable;
