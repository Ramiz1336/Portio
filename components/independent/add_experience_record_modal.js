import { Dialog, Transition } from '@headlessui/react'
import {Fragment, useRef} from 'react'
import Experience from "../../models/experience";

export default function AddExperienceRecordModal({ isOpen, onClickCloseModal, onClickSave }) {
    const experienceRef = useRef(Experience.empty());
    // ROle, Organiztion, start, end, Accomplishments
    return (
        <>
            <Transition show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={onClickCloseModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Add Experience Record
                                    </Dialog.Title>
                                    <div className="mt-4 mb-4">
                                        {/* Enter title */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Title <span className='text-red-700'>*</span></span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder="i.e. SRE"
                                                onChange={(e)=> {experienceRef.current.role = e.target.value}}
                                            />
                                        </label>
                                        {/* Enter description */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Description <span className='text-red-700'>*</span></span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder="i.e. NITR"
                                                onChange={(e)=> {experienceRef.current.description = e.target.value}}
                                            />
                                        </label>
                                        {/* Enter link */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Certificate / Reference Link <span className='text-red-700'>*</span></span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder="i.e. B.Tech CSE"
                                                onChange={(e)=> {experienceRef.current.referenceLink = e.target.value}}
                                            />
                                        </label>
                                        <div className='flex flex-col md:flex-row gap-4 mb-6'>
                                            {/* Enter starting date */}
                                            <label className="block w-full">
                                                <span className="text-gray-700">Starting Date <span className='text-red-700'>*</span></span>
                                                <input
                                                    type="date"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                    placeholder="i.e. 01-01-2010"
                                                    onChange={(e)=> {experienceRef.current.setStartingDate(e.target.value)}}
                                                />
                                            </label>
                                            {/* Enter ending date */}
                                            <label className="block w-full">
                                                <span className="text-gray-700">Ending Date <span className='text-blue-500 font-semibold cursor-pointer' onClick={()=>document.getElementById("project_ending_date").value = null}>[Not Yet Finished]</span></span>
                                                <input
                                                    type="date"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                    placeholder="i.e. 01-01-2010"
                                                    id="project_ending_date"
                                                    onChange={(e)=> {experienceRef.current.setEndingDate(e.target.value)}}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent bg-brand-100 px-4 py-2 text-sm font-medium text-brand-900 hover:bg-brand-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                                            onClick={()=>onClickSave(experienceRef.current)}
                                        >
                                            Submit Details
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}