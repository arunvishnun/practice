

window.onload = function(e) {
    const API = 'https://node-hnapi.herokuapp.com/news?page=';
    const scrollParent = document.querySelector('#infinite-scroller')
    let currentPage = 1;
    let ticking = false;
    
    scrollParent.addEventListener('scroll', function() {
        console.log(scrollParent.scrollTop,scrollParent.clientHeight,scrollParent.scrollHeight) 
        if (scrollParent.scrollTop + scrollParent.clientHeight >= scrollParent.scrollHeight) {
            console.log('-----')
            getFeed(currentPage++);
        }
    });

    const loadMore = (content) => {
        let li = null;
        content.forEach((content) => {
            li = document.createElement('li');
            li.innerHTML = content.title;
            scrollParent.appendChild(li);
        });
    }

    const getFeed = (pageId) => {
        fetch(API + pageId)
            .then(res => res.json())
            .then((response) => {
                loadMore(response);
            });
    }
    getFeed(currentPage);
}






