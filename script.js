$( document ).ready(function() {
    const apiSearchBaseUrl = (searchTerm) => { 
        return `http://openlibrary.org/search.json?title=${searchTerm}`
    }
    const apiCoverBaseUrl = (bookId, size) => {
        return `http://covers.openlibrary.org/b/id/${bookId}-${size}.jpg`
    } 

    let suggestedBooks  =  [];
    const searchJquery = $('#bookListing')
    const search = document.querySelector('#search')

    search.addEventListener("input", (event) => {
        if(event.target.value.length > 1) {
            getSearchResults(event.target.value).then((data)=> {
                const filterOutNonCover = data.docs.filter((ele)=> {
                    return ele.cover_i
                })

                const topResults = filterOutNonCover.slice(0, 6);
                suggestedBooks= []
                const finalResult = topResults.map((ele)=> {
                    return genereateBookItem(ele.title)
                })
                suggestedBooks.push(...finalResult)
                console.log(suggestedBooks)
                searchJquery.empty()
                $.each(suggestedBooks, function(i,val) {
                    searchJquery.append(val);
                });
            })
        }
    });

     const getSearchResults = async (searchTerm) => {
        const results = await fetch(apiSearchBaseUrl(searchTerm), {method: 'GET'})
        return results.json()
     }

     const genereateBookItem = (title) => {
         return $(`<div class="col-md-6 col-lg-4">
         <div class="trip_image1">
           <div class="content_trip_image">
             <button class="px-3 mb-3 category bg-primary btn" style="width: 100px;
                       margin: 0 auto; background-color: #f0ad4e;">$340.00</button>
             <h2 class="headline_trip">${title}</h2>
             <button type="button" class="btn btn-secondary" style="width: 40%;
                       margin: 0 auto; background-color: #f0ad4e; color: white; margin-top: 17px;">View more</button>
           </div>
         </div>
       </div>`)
     }


});