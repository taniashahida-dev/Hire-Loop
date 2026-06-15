


const server = process.env.SERVER_URL

export const fetchServer = async(path)=>{
const res = await fetch(`${server}${path}`)


return res.json()

}


export const ServerMutation = async(api,data)=>{
const res = await fetch(`${server}${api}`,{
      method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
})
 return await res.json();


}