import React, { useEffect, useState } from 'react';

import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants'
import { createContext } from 'react';

export const TransactionContext = createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)
}

export const TransactionProvider = ({ children }) => {

    const [connectedAccount, setConnectedAccount] = useState('');
    const [formData, setFormData] = useState({addressTo: ', amount: ', keyword: '', message: ''});

    const handleChange = (e, name) => {
        setFormData((prevState) => ({...prevState, [name]: e.target.value}))
    }

    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({ method: 'eth_accounts' });
            
            if (accounts.length) {
                setConnectedAccount(accounts[0]);
    
                //getAllTransactions();
            } else {
                console.log('No accounts');
            }
        } catch (error) {
            console.log("err", error)
        }
       
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log(error)

            throw new Error("no ethereum")
        }
    }

    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");

            // get the data from the form
        } catch (error) {
            
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected()
    }, [])

    return (
        <TransactionContext.Provider value={{ connectWallet, formData, setFormData, handleChange, sendTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}