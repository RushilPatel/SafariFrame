
function goBack()
  {
  window.history.back()
  }
function goForward()
  {
  window.history.forward()
  }
 function urlKeyPress(e)
    {
        if (e.keyCode == 13)
        {
            var url = document.getElementById('urlbox').value;
            if(url != ""){
            document.getElementById('browserframe').src = "http://"+url;
            }
            
        }
    }
  function setURL()
  {	
  		document.getElementById('urlbox').value=document.getElementById('browserframe').src;	
  }
  function searchKeyPress(e)
    {
        if (e.keyCode == 13)
        {
            var key = document.getElementById('googlebox').value;
            if (key != ""){
            document.location = 'http://www.google.com/search?q='+key;
            }  
        }
    }
   function searchEvent()
    {
        var key = document.getElementById('googlebox').value;
            if (key != ""){
            document.location = 'http://www.google.com/search?q='+key;
            }
    }
