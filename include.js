    $(document).ready(function(){
      $.ajax({
          url: 'katawan.html',
          type: 'get',
          success: function(data) {
              $("#katawan").html(data);
          }
      });
    });
 
