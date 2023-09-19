// cohortName variable 
const cohortName = '2302-acc-pt-web-pt-a';
// Use the API_URL variable for fetch requests
const API_URL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

// Fetches all posts from the API 
export async function fetchAllPosts() {
    try {
      const response = await fetch(`${API_URL}/posts`);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

export async function addPost(title,description,price,location,willDeliver,token) {
    console.log(title);
    try {
      const response = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price,
            location: location,
            willDeliver: willDeliver
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (error) {
      console.log(error);
    }
  }

  export async function deletePost(_id,token) {
    console.log(title);
    try {
      const response = await fetch(`${API_URL}/posts/${_id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },        
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (error) {
      console.log(error);
    }
  }