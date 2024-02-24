'use client';
import React, {useState} from 'react';

const Tabs = ({children}) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };

    return (
        <div className="container mx-auto px-1 md:px-5">
            {/* <div className="max-w-md mx-auto"> */}
            <div className="flex">
                {
                children.map(child => (
                    <button key={
                            child.props.label
                        }
                        className={
                            `${
                                activeTab === child.props.label ? 'border-b-2 border-[#E7323F] text-red-600 text-xs md:text-lg font-bold' : ''
                            } flex-1 text-[#3A3434] py-2 md:text-lg font-bold text-xs`
                        }
                        onClick={
                            e => handleClick(e, child.props.label)
                    }>
                        {
                        child.props.label
                    } </button>
                ))
            } </div>
            <div className="py-4">
                {
                children.map(child => {
                    if (child.props.label === activeTab) {
                        return <div key={
                            child.props.label
                        }>
                            {
                            child.props.children
                        }</div>;
                    }
                    return null;
                })
            } </div>
        </div>
    );
};

const Tab = ({label, children}) => {
    return (
        <div label={label}
            className="hidden">
            {children} </div>
    );
};
export {
    Tabs,
    Tab
};
