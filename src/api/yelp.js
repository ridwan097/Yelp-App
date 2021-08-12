import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer S7Sx2OD3MdoLUS2xL5B8kW_mkTH79ahkvO6v6aPjrCSTCimVzY3l7PhlocN7KNBwzlX78gwcxs0Dx2IshMtBz8fO7Q3rT1Z13L7WQfTDA6ftGFzoI4tskI8OgGMUYXYx'
    }
});