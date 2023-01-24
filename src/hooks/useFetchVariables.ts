import { useEffect, useState } from 'react';
import VinDecoderServices from '../services/vindecoderService';
import {IVariables} from '../types/Variables';

export type TApiResponse = {
    variables: IVariables[];
    error: any;
    loading: boolean;
};

const api = new VinDecoderServices();

export const useFetchArticleById = ():TApiResponse => {
    const [variables, setVariables] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);
    const getArticle = async () => {
        setLoading(true);
        try {
            const response = await api.getVariableList();
            setVariables(response.Results);
            setLoading(false);
        } catch (error) {
            setError(error);
        }
    };
    useEffect(() => {
        getArticle();
    }, []);
    return {
        variables,
        loading,
        error,
    };
};
