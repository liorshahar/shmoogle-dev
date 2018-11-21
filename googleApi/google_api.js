const axios = require('axios');




async function google_api_query(q_string, num_page){
    var key         = 'AIzaSyCDhcsSRvui2MASdLcz95aVgkFpn7N7naY';
    var cx          = '007050846176263573226:le3uufjq018';
    var searchTerm  = q_string;
    var start       = num_page * 10 + 1;
    var uri         = `https://www.googleapis.com/customsearch/v1?q=${searchTerm}&key=${key}&cx=${cx}&start=${start}`;
    var searchUrl   = encodeURI(uri)
    
   try{
        var response = await axios.get(searchUrl);
        var items = response.data.items;
        //console.log(items);
        return items;
   }catch(error){
       console.log(error);
   }
    
   
   
}


module.exports = {
    query_google_api: async function(query_string){

    var results = [];
    var result_keys_mapping = {

            'htmlSnippet': 'content', 
            'htmlFormattedUrl': 'url', 
            'title': 'title',
            'snippet': 'contentNoFormatting',
            'link': 'visibleUrl',
            'htmlTitle': 'titleNoFormatting'
        
        };

        for(var i = 0 ; i < 3 ; i++){
           
            let result = await google_api_query('shenkar', i)
            console.log('result' + result);
            let filtetResult = result.map(data=>{
                var newObj = {};
                newObj['htmlSnippet']=data.htmlSnippet;
                newObj['htmlFormattedUrl']=data.htmlFormattedUrl;
                newObj['title']=data.title;
                newObj['snippet']=data.snippet;
                newObj['link']=data.link;
                newObj['htmlTitle']=data.htmlTitle;
                return newObj;
            });
            results.push(filtetResult);
          
         
        }
        return results;
         
    }
}

      



