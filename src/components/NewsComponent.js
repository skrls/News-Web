import { useEffect, useState,  CSSProperties } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";



function NewsComponent(props) {

  const [json, setJson] = useState([]);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(1)
  const [newData, setNewData] = useState([])


  const override: CSSProperties = {
    display: "block",
    justifyContent: "center",
    
    marginLeft: "50%",
    borderColor: "red"
  };


  const KEY = "8b34c39abb7c42c38074f961d8a62f09"
  const url =
  `https://newsapi.org/v2/everything?q=${props.category}&page=${page}&apiKey=${KEY}`
  console.log(props.category)

  useEffect(() => {
   

    const fetchData = async () => {
      try {

        const response = await fetch(url);
        const jsonData = await response.json();
        setJson(jsonData.articles);
        setLoader(false)

      } catch (error) {
        console.log("error", error);
      }
    
    }; 
   
    fetchData();
    
  }, []);

  const fetchMoreData = async () => {
    try{
       setPage(page+1)
       const response = await fetch(url);
       const jsonData = await response.json();
       // setNewData(jsonData.articles);
       setJson(json.concat(jsonData.articles))
       setLoader(false)
       
 
         
   
     } catch (error) {
       console.log("error", error);
     }
 
   };


  // setTimeout(() => {
  //   setLoader(false)
  // }, 5000);
  console.log(json)

  return (
   <>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
      {/* {console.log(loader)} */}

      <InfiniteScroll
    dataLength={json.length}
    next={fetchMoreData}
    hasMore={true}
    loader={<h4></h4>}
    // scrollableTarget="scrollableDiv"
  >
  <div className="container">

      <div>
    { loader ? <ScaleLoader color={"#f587ed"} loading={loader} cssOverride={override} size={90} /> :
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {json.map((data) => (
            
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={data.urlToImage}
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                {data.title}
              </h2>
              <p class="text-base leading-relaxed mt-2">
               {data.description}
              </p>
              <a class="text-pink-500 inline-flex items-center mt-3" href={data.url}>
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
    }
    </div>
    </div>
    </InfiniteScroll>
     
      </div>
      
    </section>
    </>
  );
}

export default NewsComponent;
