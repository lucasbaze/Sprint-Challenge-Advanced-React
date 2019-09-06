import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useHttp = (url, dependencies, post) => {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        console.log('Sending HTTP request');

        if (post) {
            axios
                .post(url, post)
                .then(res => {
                    if (res.status !== 200) {
                        throw new Error('could not fetch');
                    }
                    console.log(res.data);
                    setFetchedData(res.data);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            axios
                .get(url)
                .then(res => {
                    if (res.status !== 200) {
                        throw new Error('could not fetch');
                    }
                    console.log(res.data);
                    setFetchedData(res.data);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, dependencies);

    return [isLoading, fetchedData];
};

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        let item = window.localStorage.getItem(key) || null;
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
};
