import React, { useEffect, useState } from 'react';
import { httpRequest } from '../../helpers/httpRequest';
import { APIUrl, MyApiKey } from '../../helpers/Utils';

export const Appearances = ({ Actor }) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            let requestUrl =`${APIUrl}person/${Actor.idActor}/images?api_key=${MyApiKey}&language=es-ES`;

            setLoading(true);

            const [resp] = await Promise.all([
                httpRequest().get(requestUrl),
            ]);

            console.log(resp)
            setResponse(resp);
            setLoading(false);
        };
        
        fetchData();
    }, [Actor])

    // console.log('=>>', Actor, Actor.idActor)

    return (
        <div>
            <p className='inf_containerMain'>Apariciones de este actor sonnnn</p>
        </div>
    );
};