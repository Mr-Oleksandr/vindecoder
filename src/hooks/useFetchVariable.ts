import { useEffect, useState } from 'react';
import VinDecoderServices from '../services/vindecoderService';
import { IVariable } from '../types/Variable';

export type TApiResponse = {
   variable: IVariable[];
   error: any;
   loading: boolean;
};

const api = new VinDecoderServices();

export const useFetchArticleById = (id: string): TApiResponse => {
   const [variable, setVariables] = useState<any>();
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<any>(null);
   const getArticle = async () => {
      setLoading(true);
      try {
         const response = await api.getVariable(id);
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
      variable,
      loading,
      error,
   };
};
