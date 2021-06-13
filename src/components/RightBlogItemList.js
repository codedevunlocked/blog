import RightBlogItem from './RightBlogItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL:"https://raw.githubusercontent.com/shivpsingh/dummyApi/main/"
})

export default function RightBlogItemList(props) {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("data.json").then(res => {
            setData(res.data);
            setLoading(false);
        })
    }, []);

    if(!loading) {
        return (
            <>
                {
                    data.map((v, k) => {
                        return <RightBlogItem key={k} id={k} item={v}/>
                    })
                }
            </>
        );
    } else {
        return (
            <>
            <h1>Loading .....</h1>
            </>
        );
    }
}