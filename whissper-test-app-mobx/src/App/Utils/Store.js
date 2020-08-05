import { createContext } from 'react';
import { useLocalStore } from 'mobx-react-lite';

export const AppDispatch = createContext();

export const useStore = () => {
    const store = useLocalStore(() => ({
        count: 0,
        increment: () => {
            store.count++;
        }
    }));

    return store;
};