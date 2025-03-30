const axios = require("axios");

exports.handler = async (event) => {
  try {
    const [postsRes, usersRes] = await Promise.all([
      axios.get("https://jsonplaceholder.typicode.com/posts"),
      axios.get("https://jsonplaceholder.typicode.com/users"),
    ]);

    //
    console.log("postsRes sample:", postsRes.data.slice(0, 1));
    console.log("usersRes sample:", usersRes.data.slice(0, 1));

    const usersMap = new Map(usersRes.data.map(user => [user.id, user.name]));

    const combined = postsRes.data.map(post => ({
      id: post.id,
      author: usersMap.get(post.userId) || "Unknown",
    }));

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(combined)
    };
  } catch (error) {
    console.error(" Lambda error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" })
    };
  }
};
