import { Dialog, Transition } from '@headlessui/react'
import {Fragment, useEffect, useRef} from 'react'
import Profile from "../../models/profile"

export default function EditProfileModal({ profileRef, isOpen, onClickCloseModal, onClickUpdate }) {
    const currProfRef = useRef(Profile.copy(profileRef.current));
    currProfRef.current = Profile.copy(profileRef.current);

    useEffect(()=>{
    }, []);

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
                                        Edit Profile
                                    </Dialog.Title>
                                    <div className="mt-4 mb-4">
                                        {/* Enter name */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Name <span className='text-red-700'>*</span></span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder=""
                                                defaultValue={currProfRef.current.name}
                                                onChange={(e)=> {currProfRef.current.name = e.target.value}}
                                            />
                                        </label>
                                        {/* Enter email */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Email</span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-500"
                                                placeholder=""
                                                disabled
                                                defaultValue={currProfRef.current.email}
                                                onChange={(e)=> {currProfRef.current.email = e.target.value}}
                                            />
                                        </label>
                                        {/* Enter phone */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Phone No <span className='text-red-700'>*</span></span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder=""
                                                defaultValue={currProfRef.current.phone}
                                                onChange={(e)=> {currProfRef.current.phone = e.target.value}}
                                            />
                                        </label>
                                        {/* Enter description */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Description <span className='text-red-700'>*</span></span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder=""
                                                defaultValue={currProfRef.current.description}
                                                onChange={(e)=> {currProfRef.current.description = e.target.value}}
                                            />
                                        </label>
                                        {/* Enter tagline */}
                                        <label className="block mb-4">
                                            <span className="text-gray-700">Tagline <span className='text-red-700'>*</span></span>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                placeholder=""
                                                defaultValue={currProfRef.current.tagline}
                                                onChange={(e)=> {currProfRef.current.tagline = e.target.value}}
                                            />
                                        </label>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent bg-brand-100 px-4 py-2 text-sm font-medium text-brand-900 hover:bg-brand-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                                            onClick={()=>onClickUpdate(currProfRef.current)}
                                        >
                                        Update Profile
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