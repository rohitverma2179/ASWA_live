import React, { useState } from 'react';

import Button from '../../assets/bottle_png_.png';

export const SubscriptionForm: React.FC = () => {
    const BASE_PRICE = 99.95;

    // State
    const [quantity, setQuantity] = useState(1);
    const [subType, setSubType] = useState('Daily');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [frequency, setFrequency] = useState('1 Month');

    // Derived state
    const months = parseInt(frequency.split(' ')[0]) || 1;
    const totalPrice = (BASE_PRICE * quantity * months).toFixed(2);

    const handleSubmit = () => {
        const formData = {
            product: 'Asva 20 Litre Water Jars',
            quantity,
            subscriptionType: subType,
            startDate,
            endDate,
            paymentFrequency: frequency,
            totalPrice
        };
        console.log('Subscription Form Data:', formData);
        alert('Subscription details logged to console!');
    };

    // Validation
    const isDateValid = !startDate || !endDate || new Date(endDate) >= new Date(startDate);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center gap-16 max-w-6xl">

                {/* Left: Bottles */}
                <div className="flex justify-center relative lg:w-1/3">
                    <div className="flex gap-4">
                        <img src={Button} alt="Bottle 1" className="h-64 md:h-96 w-auto object-contain" />
                        {/* <img src="/assets/hero-bottles.png" alt="Bottle 2" className="h-64 md:h-96 w-auto object-contain translate-y-8" /> */}
                    </div>
                    {/* Badges */}
                    <div className="absolute top-1/2 -translate-y-1/2 -right-8 flex flex-col gap-4">
                        <div className="w-8 h-24 bg-[#00659e] rounded-lg flex items-center justify-center text-white shadow-lg">
                            <span className="-rotate-90 text-xs font-bold whitespace-nowrap tracking-widest">1 L</span>
                        </div>
                        <div className="w-8 h-24 bg-[#00659e] rounded-lg flex items-center justify-center text-white shadow-lg">
                            <span className="-rotate-90 text-[10px] font-bold leading-tight text-center">
                                <span className="block">12</span>
                                <span className="block mt-1">Bottles</span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right: Form Card */}
                <div className="lg:w-2/3 w-full max-w-2xl bg-white rounded-4xl border border-gray-200 p-8 md:p-10 shadow-sm">
                    <div className="mb-6">
                        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Asva Packaged Drinking Water</span>
                        <h3 className="text-xl md:text-2xl font-serif text-black mt-1 mb-2">- Asva 20 Litre Water Jars</h3>
                        <p className="text-xs text-justify text-gray-500 leading-relaxed mb-6">
                            The 20 litre pack is ideal for home and office use and gives you great value for money. ... Sources of its usage, hygiene is best maintained with the push tap and stand mechanism.
                        </p>

                        <div className="flex items-center justify-between mb-8">
                            <div className="border border-gray-300 rounded-full px-6 py-2 text-sm font-bold text-gray-700">
                                ₹{BASE_PRICE}
                            </div>

                            {/* Quantity Selector */}
                            <div className="flex items-center border border-gray-300 rounded-full px-4 py-1 gap-4">
                                <button
                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    className="text-lg font-medium text-gray-500 hover:text-black w-4 disabled:opacity-30"
                                    disabled={quantity <= 1}
                                >-</button>
                                <span className="text-sm font-bold w-4 text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(q => q + 1)}
                                    className="text-lg font-medium text-gray-500 hover:text-black w-4"
                                >+</button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 border border-gray-100 rounded-xl p-6">
                        <div>
                            <label className="block text-[10px] font-bold text-gray-900 mb-2">Select Subscription Type</label>
                            <div className="flex gap-2">
                                {['Daily', 'Alternate Days', 'Weekly'].map(type => (
                                    <button
                                        key={type}
                                        onClick={() => setSubType(type)}
                                        className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors
                                            ${subType === type
                                                ? 'border-gray-800 bg-gray-50 text-black'
                                                : 'border-gray-200 text-gray-500 hover:border-gray-300'
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold text-gray-900 mb-2">Select</label>
                            <div className="flex gap-4">
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="border border-gray-300 rounded-full px-4 py-2 text-xs text-gray-600 w-full focus:outline-hidden focus:border-gray-500"
                                    placeholder="Start Date"
                                />
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className={`border rounded-full px-4 py-2 text-xs text-gray-600 w-full focus:outline-hidden focus:border-gray-500
                                        ${!isDateValid ? 'border-red-300 bg-red-50' : 'border-gray-300'}
                                    `}
                                    placeholder="End Date"
                                />
                            </div>
                            {!isDateValid && <p className="text-[10px] text-red-500 mt-1 pl-2">End date must be after start date</p>}
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold text-gray-900 mb-2">Payment Frequency</label>
                            <select
                                value={frequency}
                                onChange={(e) => setFrequency(e.target.value)}
                                className="w-full border border-gray-300 rounded-full px-4 py-2 text-xs text-gray-600 focus:outline-hidden focus:border-gray-500 appearance-none bg-white"
                            >
                                {['1 Month', '3 Months', '6 Months', '12 Months'].map(f => (
                                    <option key={f} value={f}>{f}</option>
                                ))}
                            </select>
                        </div>

                        <div className="pt-2 text-right">
                            <p className="text-xs font-bold text-gray-900">Total: ₹{totalPrice}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-12">
                <button
                    onClick={handleSubmit}
                    className="text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-black transition-colors border-b border-transparent hover:border-black pb-0.5"
                >
                    Shop
                </button>
            </div>
        </section>
    );
};