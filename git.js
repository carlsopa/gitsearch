$(function(){
    
    var uri = 'https://api.github.com/users/'
    $('#gitbtn').on('click',function(e){
        var search_term = $('#gitdata').val();
        var requri = uri+search_term;
        console.log(requri)
        requestJSON(requri, function(json){
            console.log(json['login']);
            var user_data = json;
            $('#pro_pic').attr('src',user_data['avatar_url'])
            $('#userName').text(user_data['login'])
            $('#name').text(user_data['name'])
            $('#bio').text(user_data['bio'])
            requestJSON(user_data['repos_url'],function(json){
                repo_data = json
                $.each(repo_data,function(index){
                    var description = ''
                    var title = repo_data[index]['name']
                    if (repo_data[index]['description'] == null)
                        description = "no description given"
                    else
                        description = repo_data[index]['description']
                    requestJSON(repo_data[index]['languages_url'],function(json){
                        x = 0
                        $.each(json,function(index,key){
                            console.log(title)
                            console.log(index)
                            console.log(Object.keys(json).length)
                            
                            textToAppend = "<div class='repository_box'>"
                            if (x == 0) {
                                    textToAppend = textToAppend + 
                            "<span id='title'>"+title+
                            "<p>"+description+"</p>"+
                            "<div id='languages'>Languages used:<ul id='language_list'>"
                            
                        }
                        console.log(textToAppend)
                        textToAppend = textToAppend + "<li>"+index+"</li>"
                    
                        if (x == Object.keys(json).length) 
                               textToAppend = textToAppend + 
                            "</ul></div>"+
                            "</div>"
                            // console.log(textToAppend)
                            $('#repos').append(textToAppend)
                            x++
                        })
                    }) 
                      
                  })

        })
        
        // $('#userName').text(data['login'])
    })
    function requestJSON(url, callback) {
        $.ajax({
          url: url,
          headers:{Authorization: "basic "+btoa('carlsopa')},
          complete: function(xhr) {
            callback.call(null, xhr.responseJSON);
          }
        });
      }
});})
