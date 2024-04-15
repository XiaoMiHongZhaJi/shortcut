const chat_id_dict = {
    "group": -10011111111
}
const default_chat_id = "-10011111111";
const token = "botxxxxxxx";

export default {
    async fetch(request, env, ctx){
        const ip = request.headers.get("Cf-Connecting-Ip")
        console.log("ip", ip);
        let url = request.url;
        console.log("url", url);
        url = url.substring(url.indexOf("//") + 2);
        url = url.substring(url.indexOf("/") + 1);
        const key = url.substring(0, url.indexOf("/"));
        console.log("key", key);
        let text = url.substring(url.indexOf("/") + 1);
        console.log("text", text);
        if(!text){
            text = "【空白消息】";
        }
        let chat_id = chat_id_dict[key];
        console.log("chat_id", chat_id);
        if(!chat_id){
            chat_id = default_chat_id;
            if(!key){
                return Response.json({msg: ip});
            }
            text = key + "/" + text + "%0A【from ip: " + request.headers.get("Cf-Connecting-Ip") + "】";
        }
        if(text.indexOf("/") > -1){
            text = text.replace("/", "%0A");
        }
        let newUrl = 'https://api.telegram.org/';
        newUrl += token;
        newUrl += '/sendMessage?';
        newUrl += 'chat_id=' + chat_id;
        newUrl += '&text=' + text;
        console.log("newUrl", newUrl);
        const response = await fetch(newUrl);
        console.log("response", response);
        if(response.ok){
            return Response.json({msg: "send success", your_ip: ip});
        }
        return Response.json({msg: response.statusText, your_ip: ip});
    }
}