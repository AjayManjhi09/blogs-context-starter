import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";




export const AppContext = createContext();

export default function AppContextProvider({children}) {

    const[loading, setLoading] = useState("false");

    const[posts, setPosts]= useState([]);

    const[page, setPage]= useState(1);

    const[totalPages, setTotalPages] = useState(null);


    async function fetchBlogPost (page=1) {
        setLoading(true);

        let url = `${baseUrl}?page=${page}`;

        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);

            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch{
            alert("Error in fething Data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handelPageChange(page){
        setPage(page);
        fetchBlogPost(page);
    }


    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPost,
        handelPageChange
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}