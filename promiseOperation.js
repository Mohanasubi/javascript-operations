const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json());
};
fetchData()
.then(data=>console.log(data));