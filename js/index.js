
const blogUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2022-08-25&sortBy=publishedAt&apiKey=47bf52aa4cbc4c55a8cfd3531bb1d669';

fetch(blogUrl)
    .then(response => response.json())
    .then(data => displayBlog(data));


const displayBlog = (blogs) => {
    
    const heroDiv = document.getElementById('heroContent');
    const image = document.createElement('img');
    image.src = blogs.articles[4].urlToImage;
    image.style.width = '100%';
    image.style.height = '300PX';
    heroDiv.appendChild(image);

    const blogContentDiv = document.getElementById('blogContent');
    
    const blogsDiv = document.getElementById('blogs');
    // const blogsArray = document.createElement('div');
    // blogsArray.className = 'row';
    // blogsDiv.appendChild(blogsArray);
    blogs.articles.forEach(blog => {

       
        const blogDiv = document.createElement('div');
        blogDiv.innerHTML = `
        
            <img class="blogImage" src = "${blog.urlToImage}" alt = "">
            <h3>${blog.title}</h3>
            <p>${blog.description}</p>
            <a href="${blog.url}" target="_blank">Read More</a>
        
        `
        blogDiv.className = 'row';
        blogsDiv.appendChild(blogDiv);
        
        // const blogImage = document.createElement('img');
        // blogImage.className = 'blogImage';
        // blogImage.src = blog.urlToImage;

        // const blogTitle = document.createElement('h3');
        // blogTitle.innerText = blog.title;

        // const blogDescription = document.createElement('p');
        // blogDescription.innerText = blog.description;

        // blogsArray.appendChild(blogImage);
        // blogsArray.appendChild(blogTitle);
        // blogsArray.appendChild(blogDescription);

        
    });

};