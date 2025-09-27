import React from 'react'
import { X } from 'lucide-react';

const List = ({ item = [], onDelete }) => {
    return (
        <>
            {item.length === 0 && (
                <p className='text-center text-gray-500'>No tasks added yet</p>
            )}
            {item.length > 0 && (
                <div className='w-full rounded-2xl p-4 gap-4'>
                    <ul className='flex flex-col w-full items-start space-y-2'>
                        {item.map((task, index) => (
                            <li key={index} className='bg-slate-500 w-full p-4 rounded-2xl flex justify-between items-center'>
                                <span>{task}</span>
                                <button 
                                    onClick={() => onDelete?.(index)} 
                                    className='text-white hover:text-red-300 transition-colors'
                                >
                                    <X size={18} />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>

    )
}

export default List
